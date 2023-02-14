import { ContextAction, ContactActionTypes, ContactListState } from '../../Types/Context/Context.types';

const ContactReducer = (
    state: ContactListState,
    action: ContextAction<ContactActionTypes, any>
): ContactListState => {
    switch (action.type) {
        case ContactActionTypes.Get_All_Contact:
            state.contactList = action.payload;
            return state;
        case ContactActionTypes.Filter_Contact:
            const LowerCased = action.payload.toLowerCase();
            const filterContacts = state.contactList.filter((n) => n.name.toLowerCase().includes(LowerCased))
            state.searchList = filterContacts;
            return state;
        default:
            return state;
    }
}

export default ContactReducer