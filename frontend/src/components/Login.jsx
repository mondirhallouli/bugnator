import { useState } from "react"

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    function handleSubmit(event) {
        event.preventDefault()

        const data = {
            email: formData.email,
            password: formData.password
        }

        // send the data to the server
        const response = fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        response.then(res => {
            if (res.status === 200) {
                // redirect to success page
                window.location.href = '/dashboard'
            }
        }).catch(error => console.log(error.message))
    }

    return (
        <div className="">

            <h1 className="font-semibold text-2xl text-zinc-600 text-center mb-4 mt-16">Log in</h1>

            <form onSubmit={handleSubmit} className="w-96 max-w-96 mx-auto border rounded border-blue-500 p-4 relative">
                <input
                    type="email"
                    name="email"
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    value={formData.email}
                    id="email"
                    placeholder="email"
                    className="block w-full p-2 mb-4 border border-gray-500 rounded"
                />

                <input
                    type="password"
                    name="password"
                    onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                    value={formData.password}
                    id="password"
                    placeholder="password"
                    className="block w-full p-2 mb-4 border border-gray-500 rounded"
                />

                <button type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded border border-blue-500 transition-all hover:bg-transparent hover:text-blue-500">Log
                    in</button>
            </form>
        </div>
    )
}

export default Login