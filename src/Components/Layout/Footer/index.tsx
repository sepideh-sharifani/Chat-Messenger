interface FooterProps extends React.PropsWithChildren { }

const Footer: React.FunctionComponent<FooterProps> = (props) => {
    return (
        <h3 className="font-bold text-sm py-2">Designed and Coded by Sepideh Sharifani</h3>
    )
}

export default Footer