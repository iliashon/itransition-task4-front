import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import SignIn from "./pages/SignIn.tsx";
import Cabinet from "./pages/Cabinet.tsx";
import Home from "./pages/Home.tsx";
import SignUp from "./pages/SignUp.tsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="sign-in" element={<SignIn />} />
                <Route path="sign-up" element={<SignUp />} />
                <Route path="cabinet" element={<Cabinet />} />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Route>
        </Routes>
    );
}

export default App;
