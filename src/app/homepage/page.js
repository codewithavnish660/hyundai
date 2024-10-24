import Link from "next/link";
export default function homepage() {

    return (

        <div className="container-navbar">
            <div className="navbar">TradingView
            </div>
            <div className="logo">
                <nav>
                    <ul>
                        <li>Products</li>
                        <li>Community</li>
                        <li>Markets</li>
                        <li>News</li>
                        <li>Brokers</li>
                        <li>More</li>

                    </ul>
                </nav>

            </div>
            <div className="cta-buttons">
                <Link href="loginpage"><button type="button" class="btn btn-light">Sign In</button></Link>
                <button type="button" class="btn btn-light">Sign Up</button>
            </div>
        </div>

    )

}
