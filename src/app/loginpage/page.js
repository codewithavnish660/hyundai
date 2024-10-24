import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import Link from "next/link";
export default function loginpage() {
    return (
        <div className="container55">
            <div className="login-box">
                <h1>Sign In</h1>
                <form>
                    <div className="input-group">
                        <label>Username</label>
                        <input type="text" placeholder="Type your username"></input>
                        <h3 className="social-login"><FaRegUser /></h3>
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="Type your password"></input>
                        <h3 className="social-login2"><RiLockPasswordLine /></h3>
                    </div>
                    <p className="page-transfer">Forgot password?</p>
                    <div><button type="submit" className="login-btn" >LOGIN</button></div>
                </form>
                <p className="login1">Or Sign Up Using</p>
                <div className="icon-social">
                    <IoLogoFacebook />
                    <AiFillTwitterCircle />
                    <AiFillGoogleCircle />
                </div>
                <p className="registor">Or Sign Up Using</p>
               <Link href="registorpage" className="signup-link"><p className="registor-page">Sign up</p></Link>
            </div>
        </div>
    )
}