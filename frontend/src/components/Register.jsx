
function Register() {
    return (
        <div className="">

            <h1 class="font-semibold text-2xl text-zinc-600 text-center mb-4 mt-16">Register</h1>

            <form action="/register" method="post"
                class="w-96 max-w-96 mx-auto border rounded border-blue-500 p-4 relative">
                <input type="text" name="username" id="username" required placeholder="username"
                    class="block w-full p-2 mb-4 border border-gray-500 rounded" />

                <input type="email" name="email" id="email" required placeholder="email"
                    class="block w-full p-2 mb-4 border border-gray-500 rounded" />

                <input type="password" name="password" id="password" required placeholder="password"
                    class="block w-full p-2 mb-4 border border-gray-500 rounded" />

                <select name="role" id="role" required class="block w-full p-2 mb-4 border border-gray-500 rounded">
                    <option selected disabled>select role</option>
                    <option value="manager">Manager</option>
                    <option value="developer">Developer</option>
                </select>

                <button type="submit"
                    class="bg-blue-500 text-white py-2 px-4 rounded border border-blue-500 transition-all hover:bg-transparent hover:text-blue-500">Register</button>

                {/* <% if (error) { %>
                    <p class="text-red-500 text-center ">
                        <%= error %>
                    </p>
                    <% } %> */}
            </form>
        </div>
    )
}

export default Register