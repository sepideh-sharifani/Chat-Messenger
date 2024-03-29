import { ContextAction, MessegeActionTypes, MessegeState } from "../../Types/Context/Context.types";

export const MessegeReducer = (
    state: MessegeState,
    action: ContextAction<MessegeActionTypes, any>
): MessegeState => {
    switch (action.type) {
        case MessegeActionTypes.Get_Current_Messeges:
            state.roomId = action.payload.roomId;
            state.messegeDetail = action.payload.messegeDetail;
            state.MessegeList = action.payload.MessegeList;
            return state;
        case MessegeActionTypes.Exit_Room:
            state.MessegeList = [];
            state.roomId = '';
            return state;
        default:
            return state;
    }
}