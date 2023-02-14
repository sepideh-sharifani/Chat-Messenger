import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'

interface LayoutProps extends React.PropsWithChildren { }

const Layout: React.FunctionComponent<LayoutProps> = ({ children }): JSX.Element => {
    return (
        <div className='bg-gray-200 flex flex-col justify-center items-center h-full'>
            <Header />
            <div className='w-full lg:w-3/4 h-[calc(100vh-105px)] m-auto bg-white'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout