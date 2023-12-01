import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ConnectionPage } from "./pages/ConnectionPage";
import { DNSPage } from "./pages/DNSPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<ConnectionPage />} />
                    <Route path="DNSPage" element={<DNSPage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById("app")!).render(<App />);