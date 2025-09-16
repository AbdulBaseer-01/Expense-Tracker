import {  onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate();
    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(!user){
                navigate('/')
            }
        })
        return() => unsubscribe();
    }, [navigate]);

    return children;
};

export default ProtectedRoute