import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AppHeader } from "./cmps/AppHeader.jsx";
import { HomePage } from "./pages/HomePage.jsx";


export function RootCmp() {

    return (
        <Router>
            <section className="app">
                <AppHeader />
                <main className="main-layout">
                    <Routes>
                        <Route path="" element={<HomePage />} />
                    </Routes>
                </main>
            </section>
        </Router>
    )
}