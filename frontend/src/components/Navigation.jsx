import { Link } from "react-router-dom"

function Navigation() {
    return (
        <nav className="w-3/4 mx-auto mb-16 py-4 border-b-2 border-zinc-200">
            <ul className="flex items-center justify-between flex-wrap gap-y-4 gap-x-8">
                <section className="">
                    <h1 className="text-2xl font-bold text-zinc-600">Bugnator</h1>
                </section>

                <section className="flex items-center justify-between flex-wrap gap-4">
                    <li><Link to="/" className="transition-all hover:text-blue-500 hover:underline">Login</Link></li>
                    <li><Link to="/register" className="transition-all hover:text-blue-500 hover:underline">Register</Link></li>
                </section>
            </ul>
        </nav>
    )
}

export default Navigation