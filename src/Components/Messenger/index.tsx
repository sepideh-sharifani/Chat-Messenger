import { MessengerLayout } from "./Layout"

interface MessengerProps extends React.PropsWithChildren { }
const Messenger: React.FunctionComponent<MessengerProps> = (props) => {
    return (
        <MessengerLayout />
    )
}

export default Messenger