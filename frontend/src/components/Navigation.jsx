
function Navigation() {
    return (
        <nav class="w-3/4 mx-auto mb-16 py-4 border-b-2 border-zinc-200">
            <ul class="flex items-center justify-between flex-wrap gap-y-4 gap-x-8">
                <section class="">
                    <h1 class="text-2xl font-bold text-zinc-600">Bugnator</h1>
                </section>

                <section class="flex items-center justify-between flex-wrap gap-4">
                    <li><a href="/login" class="transition-all hover:text-blue-500 hover:underline">Login</a></li>
                    <li><a href="/register" class="transition-all hover:text-blue-500 hover:underline">Register</a></li>
                </section>
            </ul>
        </nav>
    )
}

export default Navigation