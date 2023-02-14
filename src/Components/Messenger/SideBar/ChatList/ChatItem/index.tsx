import React, { useContext } from "react";
import { AXIOS } from "../../../../../config/axios.config";
import { ApiRoutes } from "../../../../../constants/api.urls";
import { AppContext } from "../../../../../Context/store";
import { MessegeActionTypes } from "../../../../../Types/Context/Context.types";

interface ChatItemProps extends React.PropsWithChildren {
    name: string;
    time: string;
    messege: string;
    image: string;
    roomId: string;
}
export const ChatItem: React.FunctionComponent<ChatItemProps> = ({
    name,
    time,
    messege,
    image,
    roomId,
}) => {
    const dispatch = useContext(AppContext).dispatch;
    const handleClickItem = (roomId: string) => {
        AXIOS.get(`${ApiRoutes.GetMesseges}${roomId}`).then((res) => {
            console.log(res)
            if (res?.data?.length > 0) {
                dispatch(
                    {
                        type: MessegeActionTypes.Get_Current_Messeges,
                        payload: res?.data[0]
                    }
                )
            }
        }).catch((err) => {
            //notif
        })
    }

    return (
        <div className="flex items-center justify-center w-full p-1 mb-2 cursor-pointer ease-in duration-200 bg-MainGreen-2 hover:bg-MainPurple-3 rounded-md" onClick={() => handleClickItem(roomId)} >
            <img
                className="rounded-full w-9 h-9 overflow-hidden"
                src={image}
                alt="user"
            />
            <div className="w-full">
                <div className="flex justify-between items-center">
                    <h4 className="text-md font-bold ml-2">{name}</h4>
                    <h6 className="text-sm font-semibold ml-2">
                        {new Date(time).toLocaleDateString()}
                    </h6>

                </div>
                <h5 className="text-xs mt-1 ml-2">{messege}</h5>
            </div>
        </div>
    );
};

export default ChatItem