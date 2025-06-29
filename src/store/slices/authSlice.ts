import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authApi } from '../services/authApi'

// Types
export interface User {
  id: string
  name: string
  email: string
  phoneNumber: string
}

export interface AuthState {
  user: User | null
  token: string | null
  refreshToken: string | null
  isAuthenticated: boolean
  rememberMe: boolean
}

export interface LoginCredentials {
  phoneNumber: string
  password: string
  rememberMe?: boolean
}

export interface RegisterData {
  name: string
  phoneNumber: string
  email: string
  password: string
  confirmPassword: string
  acceptTerms: boolean
  acceptMarketing: boolean
}

// Initial state
const initialState: AuthState = {
  user: null,
  token: null,
  refreshToken: null,
  isAuthenticated: false,
  rememberMe: false,
}

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRememberMe: (state, action: PayloadAction<boolean>) => {
      state.rememberMe = action.payload
    },
    resetAuthState: (state) => {
      state.user = null
      state.token = null
      state.refreshToken = null
      state.isAuthenticated = false
      state.rememberMe = false
    },
    setCredentials: (state, action: PayloadAction<{ user: User; token: string; refreshToken?: string }>) => {
      const { user, token, refreshToken } = action.payload
      state.user = user
      state.token = token
      state.refreshToken = refreshToken || null
      state.isAuthenticated = true
    },
  },
  extraReducers: (builder) => {
    // Login
    builder
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        const { user, token, refreshToken, rememberMe } = action.payload
        state.user = user
        state.token = token
        state.refreshToken = refreshToken || null
        state.isAuthenticated = true
        state.rememberMe = rememberMe || false
      })

    // Register
    builder
      .addMatcher(authApi.endpoints.register.matchFulfilled, (state, action) => {
        const { user, token, refreshToken } = action.payload
        state.user = user
        state.token = token
        state.refreshToken = refreshToken || null
        state.isAuthenticated = true
      })

    // Logout
    builder
      .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
        state.user = null
        state.token = null
        state.refreshToken = null
        state.isAuthenticated = false
        state.rememberMe = false
      })


    // Get current user
    builder
      .addMatcher(authApi.endpoints.getCurrentUser.matchFulfilled, (state, action) => {
        state.user = action.payload
        state.isAuthenticated = true
      })
  },
})

export const { setRememberMe, resetAuthState, setCredentials } = authSlice.actions
export default authSlice.reducer