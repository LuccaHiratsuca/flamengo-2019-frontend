export interface AuthState {
    loading: boolean;
    userInfo: UserInfo | null;
    userToken: string | null;
    error: null;
    success: boolean;
}

interface UserInfo {
    token: string;
}
