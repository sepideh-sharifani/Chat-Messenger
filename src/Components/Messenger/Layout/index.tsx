import { AppContext } from "../../../Context/store"
import useMediaQuery from "../../../Hooks/useMediaQuery"
import { useContext } from 'react'
import ChatPreview from "../Main/ChatPreview"
import { ChatList } from "../SideBar/ChatList"
import SearchBar from "../SideBar/SearchBar"
import SideDetail from "../SideBar/SideDetail"
import SideHeader from "../SideBar/SideHeader"
import ChatHeader from "../Main/ChatHeader"
import ChatMainLayout from "../Main/ChatMain/Layout"

interface MessengerLayoutProps extends React.PropsWithChildren { }

export const MessengerLayout: React.FunctionComponent<MessengerLayoutProps> = (props) => {
    const { state: { messeges } } = useContext(AppContext)
    const isAboveMediaQuery = useMediaQuery('(min-width:500px)')
    return (
        <div className="bg-white flex justify-center items-center m-auto rounded-xl h-[calc(100vh-105px)]">
            {isAboveMediaQuery ? (
                <>
                    <div className="flex-[0_0_300px] flex-col lg:w-full">
                        <SideHeader />
                        <div className="flex justify-center items-center">
                            <SideDetail />
                            <div className="flex flex-col w-full h-[calc(100vh-175px)] overflow-y-auto scrollbar-thin scrollbar-thumb-MainPurple-1">
                                <SearchBar />
                                <ChatList />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex-col">
                        {
                            messeges.roomId ? (
                                <>
                                    <ChatHeader />
                                    <ChatMainLayout />
                                </>
                            ) : (
                                <ChatPreview />
                            )
                        }
                    </div>
                </>)
                :
                (<div className="flex flex-col w-full">
                    <SideHeader />
                    <div className="flex justify-center items-center">
                        <SideDetail />
                        <div className="flex flex-col w-full h-[calc(100vh-175px)] overflow-y-auto scrollbar-thin scrollbar-thumb-MainPurple-1">
                            <SearchBar />
                            <ChatList />
                        </div>
                    </div>
                </div>)
            }
        </div >
    )
}
