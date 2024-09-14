import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage.jsx";
import { AppHeader } from "./cmps/AppHeader.jsx";
import { BoardDetails } from "./pages/BoardDetails.jsx";
import { BoardIndex } from "./pages/BoardIndex.jsx";
import { DragAndDrop } from "./cmps/DragAndDrop.jsx";
import { SignUp } from "./cmps/SignUp.jsx";
import { Auth } from "./pages/Auth.jsx";

export function RootCmp() {
  return (
    <div className={"app"}>
      <AppHeader />
      <main className="main-layout">
        <Routes>
          <Route path="/signup" element={<SignUp isSignup={true} />} />
          <Route path="/login" element={<SignUp isSignup={false} />} />
          <Route path="" element={<HomePage />} />
          <Route path="/boards" element={<BoardIndex />} />
          <Route path="/boards/:boardId" element={<BoardDetails />} />
          <Route path="/boards/drag" element={<DragAndDrop />} />
        </Routes>
      </main>
    </div>
  );
}
