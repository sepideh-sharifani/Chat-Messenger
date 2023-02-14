import { Input } from '../../../../base/forms/inputs'
import { FiSend } from 'react-icons/fi'
interface ChatSenderProps extends React.PropsWithChildren { }

const ChatSender: React.FunctionComponent<ChatSenderProps> = (props) => {
    return (
        <div className='relative overflow-hidden flex justify-center items-center mt-3 z-50'>
            <Input variant='send' placeholder="Type Something ..." />
            <div className='bg-white m-2 p-2 rounded-full flex justify-center items-center cursor-pointer duration-150 ease-out text-MainPurple-1 hover:text-black'>
                <FiSend className='text-xl' title='send' />
            </div>
        </div>

    )
}

export default ChatSender