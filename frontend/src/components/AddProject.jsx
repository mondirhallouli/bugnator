
function AddProject() {
    return (
        <div className="">

            <h1 class="font-semibold text-2xl text-zinc-600 text-center mb-4 mt-16">Add new project</h1>

            <form action="projects/new-project" method="post"
                className="w-3/4 max-w-lg mx-auto border rounded border-blue-500 p-4 relative">

                <input type="text" name="title" id="projectTitle" placeholder="Title"
                    className="block w-full p-2 mb-4 border border-gray-500 rounded placeholder:italic focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                    required />

                <textarea name="description" id="projectDesc" placeholder="Description"
                    className="block w-full h-40 p-2 mb-4 border border-gray-500 rounded" required></textarea>

                <button type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded border border-blue-500 transition-all hover:bg-transparent hover:text-blue-500">Add</button>

                <a href="/dashboard"
                    className="bg-red-500 text-white py-2 px-4 rounded border border-red-500 transition-all hover:bg-transparent hover:text-red-500">Cancel</a>
            </form>
        </div>
    )
}

export default AddProject