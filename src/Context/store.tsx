import React, { createContext, useReducer } from "react";
import { ContextAction, ContextAppState } from "../Types/Context/Context.types";
import ContactReducer from "./ContactReducer/Contact.reducer";
import { MessegeReducer } from "./MessegesReducer/Messeges.reducer";

const initialState: ContextAppState = {
    //store shape
    contacts: {
        contactList: [],
        searchList: []
    },
    messeges: {
        MessegeList: [],
        roomId: ""
    },
}

const AppContext = createContext<{
    state: ContextAppState;
    dispatch: React.Dispatch<ContextAction<any, any>>
}>({
    state: initialState,
    dispatch: () => null
})

const CombineReducer = ({ contacts, messeges }: ContextAppState, action: any) => ({
    contacts: ContactReducer(contacts, action),
    messeges: MessegeReducer(messeges, action),
})

interface AppContextProviderProps extends React.PropsWithChildren { }

const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({ children }): JSX.Element => {
    const [state, dispatch] = useReducer(CombineReducer, initialState);
    return (
        <>
            <AppContext.Provider value={{ state, dispatch }}>
                {children}
            </AppContext.Provider>
        </>

    )
}


export { AppContext, AppContextProvider }