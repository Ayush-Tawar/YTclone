import React, { createContext, useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

const Authcontext = createContext();
export const useAuth = () => useContext(Authcontext)

function AuthProvider({ children }) {
    const [userData, setUserData] = useState(null)
    
    const handleLogout = () => {
        updateUserData(null)
    }
    
    const updateUserData = (params) => {
        setUserData(params)
        if (params) {
            localStorage.setItem("userData", JSON.stringify(params))
        }else {
            localStorage.removeItem("userData")
        }
    }
    useEffect(()=>{
      let  localData = localStorage.getItem("userData")
      if (localData){
        setUserData(JSON.parse(localData))
      }
    }, [])

    const values = {
        updateUserData: updateUserData,
        userData: userData,
        isLoggedIn: Boolean(userData) ,
        handleLogout: handleLogout,
    }
    return (
        <Authcontext.Provider value={values}>
            {children}
        </Authcontext.Provider>
    )
}

export default AuthProvider