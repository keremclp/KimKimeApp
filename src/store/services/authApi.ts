import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { User, LoginCredentials, RegisterData } from '../slices/authSlice'

// API response types
export interface AuthResponse {
  user: User
  token: string
  refreshToken?: string
}

export interface LoginResponse extends AuthResponse {
  rememberMe?: boolean
}

// Create the auth API
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://stingray-app-tbaur.ondigitalocean.app/api/v1',
    prepareHeaders: (headers, { getState }) => {
      // Add auth token if available
      const token = (getState() as any).auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginCredentials>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),
    register: builder.mutation<AuthResponse, RegisterData>({
      query: (userData) => {
        // Validate passwords match
        if (userData.password !== userData.confirmPassword) {
          throw new Error('Passwords do not match')
        }

        // Check if terms are accepted
        if (!userData.acceptTerms) {
          throw new Error('You must accept the terms and conditions')
        }

        return {
          url: '/register',
          method: 'POST',
          body: {
            name: userData.name,
            phoneNumber: userData.phoneNumber,
            email: userData.email,
            password: userData.password,
            acceptMarketing: userData.acceptMarketing,
          },
        }
      },
      invalidatesTags: ['User'],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),
    refreshToken: builder.mutation<{ token: string }, { refreshToken: string }>({
      query: ({ refreshToken }) => ({
        url: '/refresh',
        method: 'POST',
        body: { refreshToken },
      }),
    }),
    getCurrentUser: builder.query<User, void>({
      query: () => '/me',
      providesTags: ['User'],
    }),
  }),
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useRefreshTokenMutation,
  useGetCurrentUserQuery,
} = authApi