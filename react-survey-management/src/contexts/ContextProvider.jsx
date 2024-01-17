import {useState, useContext} from 'react';

const StateContext = useContext({children});
export const ContextProvider = ()=>{
    const [currentUser, setcurrentUser] = useState({});
    const [userToken, setUserToken] = useState(null);
    return (
        <StateContext.Provider value={{
            currentUser,
            setcurrentUser,
            userToken,
            setUserToken
        }}>
            {children}
        </StateContext.Provider>
    )
}