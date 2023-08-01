
function DashNav() {
    return (

        <nav className="w-3/4 mx-auto mb-16 py-4 border-b-2 border-zinc-200">
            <ul className="flex items-center justify-between flex-wrap gap-y-4 gap-x-8">
                <section className="">
                    <h1 className="text-2xl font-bold text-zinc-600">Bugnator</h1>
                </section>

                <section className="">
                    <li className="text-zinc-500 font-bold italic">
                        {/* @<%= username %> */}
                        username
                    </li>
                </section>

                <section className="flex items-center justify-between flex-wrap gap-4">
                    <li>
                        <a href="/" className="transition-all hover:text-blue-500 hover:underline">Dashboard</a>
                    </li>
                    {/* <% if (role=='manager' ) {%>
        <li>
          <a href="/dashboard/new-project" className="transition-all hover:text-blue-500 hover:underline">New
            project</a>
        </li>
        <% } %> */}
                    <li><a href="/logout" className="transition-all hover:text-blue-500 hover:underline">Log out</a></li>
                </section>
            </ul>
        </nav>
    )
}

export default DashNav