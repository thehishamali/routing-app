import { Link } from "react-router-dom";

function RegistrationPage() {
    return (
            <>
                <input type = "text" placeholder = "username" /> <br /> <br />
                <input type = "email" placeholder = "email" /> <br /> <br />
                <input type = "text" placeholder = "password" /> <br /> <br />
                <Link to = "/login">
                    <button>Submit</button>
                </Link>
            </>
    )
}

export default RegistrationPage;