import React, { createContext, useEffect, useState } from 'react';
import { getFirebaseIdToken } from '../util/firebaseFunctons';
import firebase from '../firebase';
export const AuthContext = createContext();

const AuthProvder = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const [token, setToken] = useState(null);

    const updateUser = (user) => {
         if (user) {
            const { email, uid } = user;
            const lastLogin = user.metadata.lastSignInTime;
            setCurrentUser({ email, uid, lastLogin });
            getFirebaseIdToken().then((token) => {
                setToken(token);
                setLoading(false)
            })
         } else {
           setCurrentUser(null);
           setLoading(false)
         }
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(updateUser)
        return unsubscribe;
    }, []);

    if (loading) return <div>Loading...</div>;

    return(
        <AuthContext.Provider value={{currentUser, token}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvder; 