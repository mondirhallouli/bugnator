import { Link, useRouteError } from "react-router-dom"

function NotFoundPage() {
    const error = useRouteError()
    console.error(error)

    return (
        <div id="error-page" className="w-96 mx-auto mt-40 text-center">
            <h1 className="text-3xl font-bold mb-16">Oops!</h1>
            <p className="mb-12">Sorry, an unexpected error has occured.</p>
            <p className="text-gray-500 mb-16">
                <i>{error.statusText || error.message}</i>
            </p>
            <p className="text-gray-500">
                Go back to the <Link to="/" className="text-blue-400">Home page</Link>
            </p>
        </div>
    )
}

export default NotFoundPage