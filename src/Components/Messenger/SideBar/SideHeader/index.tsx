interface SideHeaderProps extends React.PropsWithChildren { }

export const SideHeader: React.FunctionComponent<SideHeaderProps> = (props) => {
    return (
        <div className="relative overflow-hidden flex justify-center items-center bg-MainPurple-3 w-full px-4 py-2">
            <img className="w-28 h-14" src={require("../../../../assets/Logo.png")} alt="" />
        </div>
    )
}

export default SideHeader