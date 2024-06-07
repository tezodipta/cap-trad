import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import SharesScreen from "./screens/sharesScreen.jsx";
import Google from "./screens/Google.jsx";
import Hdfc from "./screens/Hdfc.jsx";
import Icici from "./screens/Icici.jsx";
import Hal from "./screens/Hal.jsx";
import Amazon from "./screens/Amazon.jsx";
import Apple from "./screens/Apple.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index={true} path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/sharesScreen" element={<SharesScreen />} />
            <Route path="" element={<PrivateRoute />}>
                <Route path="/profile" element={<ProfileScreen />} />
            </Route>
            <Route path="google" element={<Google />} />
            <Route path="icici" element={<Icici />} />
            <Route path="hdfc" element={<Hdfc />} />
            <Route path="hal" element={<Hal />} />
            <Route path="apple" element={<Apple />}/>
            <Route path="amazon" element={<Amazon />}/>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </Provider>
);
