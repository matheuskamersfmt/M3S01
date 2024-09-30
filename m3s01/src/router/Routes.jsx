import { createBrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import App from "../App";
import Login from "../pages/Login";
import Home from "../pages/Home";

const PrivateRoute = ({ element }) => {
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? element : <Login />;
};

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <h1>Página não encontrada</h1>,
        children: [
            {
                path: "/",
                element: <PrivateRoute element={<Home />} />,
            },
            {
                path: "/login",
                element: <Login />,
            }
        ]
    }
])