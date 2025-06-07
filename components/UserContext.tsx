// UserContext.js
import React, { createContext, useState, useContext } from "react";

const UserContext = createContext({});

export function UserProvider({ children }: any) {
    const [userName, setUserName] = useState("");
    console.log("Nome no context:", userName);

    return (
        <UserContext.Provider value={{ userName, setUserName }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser(): any {
    return useContext(UserContext);
}
