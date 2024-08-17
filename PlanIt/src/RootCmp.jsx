import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { HomePage } from "./pages/HomePage.jsx";
import { AppHeader } from "./cmps/AppHeader.jsx";


export function RootCmp() {
    return (
            <Router>
                <section className="app">
                    <AppHeader />
                    <main className="main-layout">
                        {/* <Routes>
                        </Routes> */}
                    </main>
                </section>
            </Router>
    )
}
