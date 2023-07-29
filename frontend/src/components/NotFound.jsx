import { useRouteError } from "react-router-dom"

function NotFound() {
    const error = useRouteError()
    console.error(error)

    return (
        <div id="error-page" className="w-96 mx-auto mt-40 text-center">
            <h1 className="text-3xl font-bold mb-16">Oops!</h1>
            <p className="mb-12">Sorry, an unexpected error has occured.</p>
            <p className="text-gray-500">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default NotFound