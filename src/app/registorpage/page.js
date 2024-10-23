export default function registorpage() {

    return (

        <div className="registor-for">
            <div className="registor-child">
                <h1>Sign Up</h1>
                <form>
                    <div>
                        <section className="form-wrapper">
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your full name"></input>
                        </section>
                        <section className="form-wrapper">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email"></input>
                        </section>
                        <section className="form-wrapper">
                            <label>Phone No.</label>
                            <input type="number" placeholder="Enter your phone number"></input>
                        </section>
                        <section className="form-wrapper">
                            <label>Create password</label>
                            <input type="password" placeholder="Enter your create password"></input>
                        </section>
                        <section className="form-wrapper">
                            <label>Confirm password</label>
                            <input type="password" placeholder="Enter your confirm password"></input>
                        </section>
                        <section className="checkbox-group">
                            <input type="checkbox"></input>
                            <label>I agree to the Terms & Conditions</label>
                        </section>
                        <div className="submit-button"><button type="submit">Sign up</button></div>
                    </div>
                </form>
            </div>
        </div>


    )

}