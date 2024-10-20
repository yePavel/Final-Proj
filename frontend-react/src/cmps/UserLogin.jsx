import { useState } from "react";
import { FaApple, FaSlack, FaTrello } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { login } from "../store/actions/user.actions";
import { useNavigate } from "react-router-dom";

export function UserLogin() {
    const [credentials, setCredentials] = useState({ username: '', password: '' })
    const navigate = useNavigate();

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value

        setCredentials({ ...credentials, [field]: value })
    }

    async function onLogin(ev = null) {
        if (ev) ev.preventDefault()
        if (!credentials.username || !credentials.password) return
        await login(credentials)
        navigate('/boards')
    }

    return <section className="user-login">
        <div className="login-form">

            <div className="header">
                <FaTrello className="planIt-logo" />
                <h2>PlanIt</h2>
            </div>

            <form className="user-details" onSubmit={onLogin}>
                <span>Log in to continue</span>
                <input placeholder="Username" type="text" name="username" onChange={(ev) => handleChange(ev)} />
                <input placeholder="Password" type="password" name="password" onChange={(ev) => handleChange(ev)} />
                <button className="continue-btn">Continue</button>
            </form>

            <span>Or continue with:</span>
            <div className="connect-btns">
                <button>
                    <FcGoogle />
                    <span>Google - soon</span>
                </button>
                <button>
                    <TfiMicrosoftAlt />
                    <span>Microsoft - soon</span>
                </button>
                <button>
                    <FaApple />
                    <span>Apple - soon</span>
                </button>
                <button>
                    <FaSlack />
                    <span>Slack - soon</span>
                </button>
            </div>
        </div>
    </section>

}