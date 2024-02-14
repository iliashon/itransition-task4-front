import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import Login from "./pages/Login.tsx";
import Cabinet from "./pages/Cabinet.tsx";
import Home from "./pages/Home.tsx";
import Registration from "./pages/Registration.tsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="registr" element={<Registration />} />
                <Route path="cabinet" element={<Cabinet />} />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Route>
        </Routes>
    );
}

export default App;
