import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = () => {
    return (
        <>
                <div className='fixed top-0 left-0 right-0 z-50 '>
                <Navbar />
                </div>
                <div className='min-h-screen mt-16 '>

            <Outlet />
                </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Layout
