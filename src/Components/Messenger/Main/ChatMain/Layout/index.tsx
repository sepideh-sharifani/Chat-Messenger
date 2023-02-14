import React from 'react'
import ChatMessages from '../ChatMessege'
import ChatSender from '../ChatSender'

interface ChatMainLayoutProps extends React.PropsWithChildren { }

const ChatMainLayout: React.FunctionComponent<ChatMainLayoutProps> = (props) => {

    return (
        <div id='chat' className='relative overflow-hidden bg-MainPurple-2 flex flex-col h-[calc(100vh-175px)] p-2'>
            <ChatMessages />
            <ChatSender />
            <div className='absolute bg-MainPink w-44 h-44 rounded-full -bottom-9 -right-11' />
            <div className='absolute bg-MainGreen w-44 h-44 rounded-full -top-9 -left-11' />
        </div>
    )
}

export default ChatMainLayout