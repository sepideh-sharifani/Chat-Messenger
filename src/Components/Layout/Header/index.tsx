interface HeaderProps extends React.PropsWithChildren { }

export const Header: React.FunctionComponent<HeaderProps> = (props) => {
    return (
        <div className="my-5 text-center">
            <h1 className="font-extrabold tracking-wide">Welcome to the <span className="text-yellow-500 text-xl">O</span><span className="text-red-400 text-xl">M</span><span className="text-green-600 text-xl">G</span> chat messenger</h1>
        </div>
    )
}

export default Header