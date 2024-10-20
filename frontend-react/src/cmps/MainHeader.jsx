
import { FaTrello } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { login } from "../store/actions/user.actions";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export function MainHeader() {
    const navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState(false)

    function getLoginForm() {
        navigate("/login")
    }

    function navToHomePage() {
        navigate("/")
    }

    async function getBoardIndex(ev) {
        if (ev) ev.preventDefault()
        const credentials = { username: '', password: "" }
        credentials.username = 'admin'
        credentials.password = 'admin'
        await login(credentials)
        navigate('/boards')

    }

    function handleMobileMenu() {
        setOpenMenu(prev => !prev)
    }

    return <header className="main-header">

        <div className="left-section" onClick={navToHomePage}>
            <FaTrello className="planIt-logo" />
            <h2>PlanIt</h2>
        </div>

        <div className="right-section">
            <button onClick={() => getLoginForm()} className="logIn-btn">Log in</button>
            <button onClick={() => getBoardIndex()} className="start-free-btn">Start Free Demo!</button>
        </div>

        <div className="right-section mobile" onClick={handleMobileMenu}>
            <GiHamburgerMenu />
            <div className={`dropdown-menu ${openMenu ? 'active' : ''}`}>
                <button onClick={() => getLoginForm()} className="logIn-btn">Log in</button>
                <button onClick={() => getBoardIndex()} className="start-free-btn">Start Free Demo!</button>
            </div>
        </div>

    </header>
}