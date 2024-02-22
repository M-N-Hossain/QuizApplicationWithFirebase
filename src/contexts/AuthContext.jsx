import React, { useContext, useEffect, useState, useMemo } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// internal import
import "../firbase.js";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // signup function
  const signup = async (email, password, username) => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);

      // update profile
      await updateProfile(auth.currentUser, {
        displayName: username,
      });

      const user = auth.currentUser;
      setCurrentUser({
        ...user,
      });
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    }
  };

  // login function
  const login = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout function
  const logout = () => {
    const auth = getAuth();
    return signOut(auth);
  };

  const value = useMemo(
    () => ({
      currentUser,
      signup,
      login,
      logout,
    }),
    [currentUser]
  );

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
