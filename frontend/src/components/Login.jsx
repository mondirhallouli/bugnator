
function Login() {
    return (
        <div className="">

            <h1 class="font-semibold text-2xl text-zinc-600 text-center mb-4 mt-16">Log in</h1>

            <form action="/login" method="post" class="w-96 max-w-96 mx-auto border rounded border-blue-500 p-4 relative">
                {/* <% if (warning) { %>
          <p class="text-red-400 py-2">
            <%= warning %>
          </p>
          <% } %> */}

                <input type="email" name="email" id="email" placeholder="email"
                    class="block w-full p-2 mb-4 border border-gray-500 rounded" />

                <input type="password" name="password" id="password" placeholder="password"
                    class="block w-full p-2 mb-4 border border-gray-500 rounded" />

                <button type="submit"
                    class="bg-blue-500 text-white py-2 px-4 rounded border border-blue-500 transition-all hover:bg-transparent hover:text-blue-500">Log
                    in</button>
            </form>
        </div>
    )
}

export default Login