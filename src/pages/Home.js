import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Home = () => {

    let navigate = useNavigate();

    return (
        <div className="d-flex justify-content-center mt-5">
            <form>
                <h1 className="d-flex justify-content-center">Tool Stock Master</h1>
                    <div className="mb-3">
                        <label htmlFor="inputUserName" className="form-label">Username:</label>
                        <input type="text" className="form-control" id="inputUserName" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputPassword" className="form-label">Password:</label>
                        <input type="password" className="form-control" id="inputPassword"/>
                    </div>
                    <div className="d-flex justify-content-center mb-3">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="d-flex justify-content-center mb-3">
                        <button className="btn btn-primary" onClick={() => navigate("/registration")}>Registration</button>
                    </div>
                    <div className="d-flex justify-content-center ">
                        <Link to={"/searchbyid"}>to search by id</Link>
                    </div>
            </form>
        </div>               
    )
}

export default Home;