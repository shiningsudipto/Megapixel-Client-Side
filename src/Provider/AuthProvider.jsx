import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../../firebase.config";


const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // google sign in
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    // update user information
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const authInfo = {
        user,
        loading,
        createUser,
        googleSignIn,
        updateUserProfile,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;