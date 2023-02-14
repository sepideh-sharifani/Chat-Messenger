import Messenger from "./../Components/Messenger"

interface HomePageProps extends React.PropsWithChildren { }

export const HomePage: React.FunctionComponent<HomePageProps> = ({ }): JSX.Element => {
    return (
        <Messenger />
    )
}
