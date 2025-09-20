import { Link } from "react-router-dom";

function LoginPage() {
    return (
            <>
                <input type = "email" placeholder = "email or username" /> <br /> <br />
                <input type = "text" placeholder = "password" />
                <Link to = "/home">
                    <button>Log In</button>
                </Link>
            </>
    )
}

export default LoginPage;