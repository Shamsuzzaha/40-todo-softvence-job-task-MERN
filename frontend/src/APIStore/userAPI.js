import { create } from "zustand";
import axios from "axios";

// Get base URL from the environment variable
const baseURL = import.meta.env.VITE_API_BASE_URL;

const userAPI = create((set) => ({
    isLogin: null,

    // check isLogin
    checkLoginStatus: async () => {
        try {
            const res = await axios.get(`${baseURL}/auth/check`, {
                withCredentials: true
            });

            if (res.data.isLogin) {
                set({ isLogin: true });
            }
        } catch (error) {
            set({ isLogin: false });
        }
    },

    // login
    loginRequest: async (userData) => {
        try {
            const res = await axios.post(`${baseURL}/login`,
                userData,
                { withCredentials: true }
            );
            set({ isLogin: true });
            return res.data;
        } catch (error) {
            console.error("Login error:", error.response?.data || error.message);
        }
    },

    // logout
    logoutRequest: async () => {
        try {
            const res = await axios.delete(`${baseURL}/logout`, { withCredentials: true });
            set({ isLogin: false });
            return res.data;
        } catch (error) {
            console.error("Logout error:", error.response?.data || error.message);
        }
    },

    // register
    registerRequest: async (userData) => {
        try {
            const res = await axios.post(`${baseURL}/register`, userData);
            return res.data;
        } catch (err) {
            console.error('Registration failed:', err);
        }
    },

}));

export default userAPI;
