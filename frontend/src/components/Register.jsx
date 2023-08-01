
function Register() {
    return (
        <div classNameName="">

            <h1 className="font-semibold text-2xl text-zinc-600 text-center mb-4 mt-16">Register</h1>

            <form action="/register" method="post"
                className="w-96 max-w-96 mx-auto border rounded border-blue-500 p-4 relative">
                <input type="text" name="username" id="username" required placeholder="username"
                    className="block w-full p-2 mb-4 border border-gray-500 rounded" />

                <input type="email" name="email" id="email" required placeholder="email"
                    className="block w-full p-2 mb-4 border border-gray-500 rounded" />

                <input type="password" name="password" id="password" required placeholder="password"
                    className="block w-full p-2 mb-4 border border-gray-500 rounded" />

                <select name="role" id="role" required className="block w-full p-2 mb-4 border border-gray-500 rounded">
                    <option selected disabled>select role</option>
                    <option value="manager">Manager</option>
                    <option value="developer">Developer</option>
                </select>

                <button type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded border border-blue-500 transition-all hover:bg-transparent hover:text-blue-500">Register</button>

                {/* <% if (error) { %>
                    <p className="text-red-500 text-center ">
                        <%= error %>
                    </p>
                    <% } %> */}
            </form>
        </div>
    )
}

export default Register