import { Route, BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage.jsx";
import { AppHeader } from "./cmps/AppHeader.jsx";
import { BoardDetails } from "./pages/BoardDetails.jsx";
import { BoardIndex } from "./pages/BoardIndex.jsx";
import { DragAndDrop } from "./cmps/DragAndDrop.jsx";
import { MainHeader } from "./cmps/MainHeader.jsx";
import { UserLogin } from "./cmps/UserLogin.jsx";
import { useSelector } from "react-redux";

export function RootCmp() {
  const loggedInUser = useSelector(storeState => storeState.userModule.user)

  return (
    <div className="app">
      {loggedInUser ? <AppHeader loggedInUser={loggedInUser} /> : <MainHeader />}
      <main className="main-layout">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/boards" element={<BoardIndex />} />
          <Route path="/boards/:boardId" element={<BoardDetails />} />
          <Route path="/boards/drag" element={<DragAndDrop />} />
        </Routes>
      </main>
    </div>
  );
}
