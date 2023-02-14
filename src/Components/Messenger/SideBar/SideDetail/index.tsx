import { FiSettings } from 'react-icons/fi'
import { SiDarkreader } from 'react-icons/si'
import { BiLogOut } from 'react-icons/bi'

interface SideDetailProps extends React.PropsWithChildren { }

export const SideDetail: React.FunctionComponent<SideDetailProps> = (props) => {
    return (
        <div className="flex flex-col items-center justify-end gap-56 w-12 h-[calc(100vh-175px)] bg-MainPurple-1">
            <div className='flex flex-col items-center gap-6 text-xl text-white cursor-pointer'>
                <FiSettings title='Settings' className='hover:text-MainYellow' />
                <SiDarkreader title='Dark Mode' className='hover:text-MainYellow' />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img className="rounded-full p-1 w-11 h-11"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdhD4684PcmRZG-1ONraWGzrBAA9VAjKJBOmy55ZF2&s"
                    alt=""
                />
                <BiLogOut title='log out' className='text-2xl text-white m-2 cursor-pointer hover:text-MainYellow' />
            </div>

        </div>
    )
}

export default SideDetail