import React, { useCallback, useContext, useEffect } from 'react'
import { AXIOS } from '../../../../config/axios.config'
import { ApiRoutes } from '../../../../constants/api.urls'
import { AxiosResponse } from 'axios'
import { ChatItem } from './ChatItem'
import { Contacts } from '../../../../Types/api.types'
import { AppContext } from '../../../../Context/store'
import { ContactActionTypes } from '../../../../Types/Context/Context.types'


interface ChatListProps extends React.PropsWithChildren { }
export const ChatList: React.FunctionComponent<ChatListProps> = (props) => {

    //all the received data must be stored in a state so the component can manage that
    const dispatch = useContext(AppContext).dispatch;
    const state = useContext(AppContext).state;

    const fetchContacts = useCallback(async () => {
        const response = await AXIOS.get<any, AxiosResponse<Contacts[]>>(ApiRoutes.GetContacts)
        if (response.status === 200) {
            dispatch(
                {
                    type: ContactActionTypes.Get_All_Contact,
                    payload: response.data
                }
            )
        }
    }, [dispatch]);

    useEffect(() => {
        fetchContacts()
    }, [fetchContacts])

    return (
        <>
            <div className='m-2 mr-4'>
                {
                    state.contacts.searchList.length === 0 ? (
                        state.contacts.contactList.length === 0 ?
                            (
                                <div>No Chats yet!</div>
                            ) : (
                                state.contacts.contactList.map((item) => (
                                    <ChatItem
                                        key={item.id}
                                        name={item.name}
                                        image={item.image}
                                        messege={item.messege}
                                        time={item.time}
                                        roomId={item.roomId}
                                    />
                                ))
                            )
                    ) : (
                        state.contacts.searchList.map((item) => (
                            <ChatItem
                                image={item.image}
                                messege={item.messege}
                                time={item.time}
                                name={item.name}
                                key={item.id}
                                roomId={item.roomId}
                            />
                        ))
                    )}
            </div>
        </>
    )
}