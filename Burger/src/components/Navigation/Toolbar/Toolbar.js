import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import SideDrawer from '../SideDrawer/SideDrawer'
import DrawerToggler from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => {
    return (
        <header className="Toolbar">
            <DrawerToggler open={props.open} />
                <Logo height="80%" width="100px"/>
            <nav className="DesktopOnly">
                <NavigationItems/>
            </nav>
        </header>
    )
}

export default toolbar
{/* <div><button onClick={props.open}>MENU</button></div> */}