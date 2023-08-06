import React from 'react'
import ReactDOM from 'react-dom/client'
// LAYOUT
import AppLayout from './layouts/AppLayout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
// PAGES
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import AddProjectPage from './pages/AddProjectPage.jsx'
import ReportBugPage from './pages/ReportBugPage.jsx'
import ProjectDetailsPage from './pages/ProjectDetailsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
// CONTEXTS
// import { userContext } from './contexts/userContext.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
            {
                path: "/dashboard",
                element: <DashboardPage />,
            },
            {
                path: "/create",
                element: <AddProjectPage />,
            },
            {
                path: "/projects/:id",
                element: <ProjectDetailsPage />,
            },
            {
                path: "/projects/:id/report",
                element: <ReportBugPage />,
            },
        ],
    },
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
