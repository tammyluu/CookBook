import { createBrowserRouter } from "react-router-dom"
import HomePage from "./routes/HomePage/HomePage"
import SignForm from "./routes/SignForm/SignForm"

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        children: [{
            path:"/sign",
            element: <SignForm />
        }]
    }
])

export default router