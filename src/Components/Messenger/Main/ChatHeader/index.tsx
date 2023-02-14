import React, { useContext } from "react";
import { BsFillTelephonePlusFill } from 'react-icons/bs'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { IoMdReturnLeft } from 'react-icons/io'
import { AppContext } from "../../../../Context/store";
import useMediaQuery from '../../../../Hooks/useMediaQuery'
import { MessegeActionTypes } from "../../../../Types/Context/Context.types";


interface ChatHeaderProps extends React.PropsWithChildren { }

const ChatHeader: React.FunctionComponent<ChatHeaderProps> = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleClick = () => {
        dispatch({
            type: MessegeActionTypes.Exit_Room
        }
        )
    }

    const { state: { messeges } } = useContext(AppContext);
    const isAboveMediaQuary = useMediaQuery("(min-width:900px)")
    return (
        <div className="relative overflow-hidden flex justify-between items-center bg-MainPurple-1 w-full px-4 py-2">
            <div className="flex justify-center items-center ">
                <IoMdReturnLeft title="return" className='cursor-pointer text-white text-2xl mr-4 md:hidden' onClick={handleClick} />
                <div className="relative">
                    <div className="absolute bg-green-500 rounded-full w-4 h-4 left-10" />
                    <img className="rounded-full w-14 h-14"
                        src={messeges.messegeDetail[0].image}
                        alt=""
                    />
                </div>
                <h3 className="font-bold text-lg mx-2">{messeges.messegeDetail[0].name}</h3>
            </div>
            <div className="flex justify-center items-center gap-3">
                <BsFillTelephonePlusFill title="Call" className='cursor-pointer text-white text-xl' />
                <RiDeleteBin5Line title="Delete Chat" className='cursor-pointer text-white text-xl' />
            </div>
            {isAboveMediaQuary ?
                <div className='absolute bg-MainYellow w-44 h-44 rounded-full -top-32 right-1/4' /> : ''}
        </div>
    )
}

export default ChatHeader