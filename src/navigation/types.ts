import { NavigatorScreenParams } from "@react-navigation/native";

export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
};

export type BottomTabParamList = {
    Home: undefined;
    Profile: undefined;
    Settings: undefined;
    Notifications: undefined;
};

export type RootStackParamList = {
    Auth: NavigatorScreenParams<AuthStackParamList>;
    Main: NavigatorScreenParams<BottomTabParamList>;
};

// Global type declaration for useNavigation hook
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}