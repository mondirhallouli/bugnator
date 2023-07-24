import { useState } from "react"
import Navigation from "./components/Navigation"
import DashNav from "./components/DashNav"

function App() {

    const [loggedIn, setLoggedIn] = useState(true)

    return (
        <div>
            {loggedIn ? <DashNav /> : <Navigation />}
        </div>
    )
}

export default App
