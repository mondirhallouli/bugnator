import { useState } from "react"
import Navigation from "./components/Navigation"
import DashNav from "./components/DashNav"
import Login from "./components/Login"
import Register from "./components/Register"
import { Route, Routes } from "react-router-dom"

function App() {

    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <div>
            {loggedIn ? <DashNav /> : <Navigation />}
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </div>
    )
}

export default App
