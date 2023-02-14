export type ContactState = {
	image: string;
	name: string;
	id: number;
	messege: string;
	time: string;
	roomId: string;
};

export enum ContactActionTypes {
	Get_All_Contact = 'Get_All_Contact',
	Filter_Contact = 'Filter_Contact',
}

export type MessegeState = {
	roomId: string;
	MessegeList: MessegeItem[];
};

export type MessegeItem = {
	isSentByOwner: boolean;
	value: string;
	id: number;
};

export enum MessegeActionTypes {
	Get_Current_Messeges = 'Get_Current_Messeges',
}

export type ContextAppState = {
	contacts: ContactListState;
	messeges: MessegeState;
};

export type ContextAction<T, K> = {
	type: T;
	payload: K;
};

export type ContactListState = {
	contactList: ContactState[];
	searchList: ContactState[];
};
