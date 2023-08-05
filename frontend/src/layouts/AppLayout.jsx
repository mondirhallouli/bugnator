import { useState } from "react"
import Navigation from "../components/Navigation"
import DashNav from "../components/DashNav"
import { Outlet } from "react-router-dom"

function AppLayout() {

    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <div>
            {loggedIn ? <DashNav /> : <Navigation />}

            <Outlet />
        </div>
    )
}

export default AppLayout
