import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { HomePage } from "./pages/HomePage.jsx";
import { AppHeader } from "./cmps/AppHeader.jsx";
import { BoardList } from "./cmps/BoardList.jsx";
import { Boards } from "./pages/Boards.jsx";


export function RootCmp() {
    return (
        <Router>
            <section className="app">
                <AppHeader />
                <main className="main-layout">
                    <Routes>
                        <Route path="" element={<HomePage />} />
                        <Route path="/boards" element={<Boards />} />
                        <Route path="/boards/:boardId" element={<BoardList />} />
                    </Routes>
                </main>
            </section>
        </Router>
    )
}
