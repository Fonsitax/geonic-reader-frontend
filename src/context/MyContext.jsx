import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const useMyContext = () => {
    return useContext(MyContext);
};

export const MyProvider = ({ children }) => {
    const [basename, setBasename] = useState('');	

    return (
        <MyContext.Provider value={{ basename, setBasename }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyContext;