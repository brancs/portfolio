import * as React from "react"
import Footer from "./Footer/Footer"
import NavigationBar from "./NavigationBar/NavigationBar"
import MobileNavigationBar from "./MobileNavigationBar/MobileNavigationBar"

const Layout = ({children}) => {
    return (
        <>
            <NavigationBar />
            <MobileNavigationBar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout