import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import FAQ from "../pages/faq/FAQ";
import Courses from "../pages/courses/Courses";
import Blog from "../pages/blog/Blog";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/coursename')
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
]);