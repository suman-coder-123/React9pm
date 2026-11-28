// import { createContext } from "react";


// const UserContext = createContext();

// export default UserContext;



import { createContext, useState } from "react"


const UserContext = createContext();

export function UserProvider({children}) {
    const [user , setUser] = useState({
        name : "suman",
        email : "suman@gamil.com",
        role : "developer",
        isLoggedIn : false
    });

    function login() {
        setUser({
            ...user , 
            isLoggedIn : true
        });
    }


    function logout () {
        setUser({
            ...user,
            isLoggedIn : false
        });
    }

    const contextValue = {
        user , login , logout
    };


    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}



export default UserContext;



