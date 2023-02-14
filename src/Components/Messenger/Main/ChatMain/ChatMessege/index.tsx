import { AppContext, } from '../../../../../Context/store'
import MessegePerPerson from './MessegePerPerson'
import { useContext } from 'react';

interface ChatMessagesProps extends React.PropsWithChildren { }

const ChatMessages: React.FunctionComponent<ChatMessagesProps> = (props) => {
    const { state: { messeges } } = useContext(AppContext);
    return (
        <ul className="flex flex-col w-full bg-white rounded-lg shadow-lg h-[calc(100vh-20px)] [&_li]:my-5 overflow-y-auto z-50 scrollbar-thin scrollbar-track-white scrollbar-thumb-MainPurple-1">
            {messeges.MessegeList.map((item) => {
                return (
                    <MessegePerPerson key={item.id} types={item.isSentByOwner ? "sender" : "receiver"} />
                )
            })}
        </ul>

    )
}

export default ChatMessages