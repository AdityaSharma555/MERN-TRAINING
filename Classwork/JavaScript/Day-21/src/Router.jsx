import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login'
import SignUp from './SignUp';
import Home from './Home';


 const Router = createBrowserRouter([
    {
        element : <Parent />,
        Children : [
            {
                path : "/",
                element : <Home />
            }, 
            {
                path : "/",
                element : <Login />
            },
            {
                path : "/",
                element : <SignUp/>
            }
        ]
    }
])

export default Router;