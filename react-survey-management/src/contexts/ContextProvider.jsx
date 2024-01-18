import {useState, useContext, createContext} from 'react';

const StateContext = createContext({
    currentUser : {},
    userToken : null,
    setcurrentUser : ()=> {},
    setUserToken : ()=> {}

}); //declear context

export const ContextProvider = ({children})=>{
    const [currentUser, setcurrentUser] = useState({
        name: 'Tom Cook',
        email: 'tom@example.com',
        imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }); //declear state to pass into context provider

    const [userToken, setUserToken] = useState(null);
    
    return (
        <StateContext.Provider value={{  //context provider
            currentUser,
            setcurrentUser,
            userToken,
            setUserToken
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const userStateContext = ()=> useContext(StateContext);