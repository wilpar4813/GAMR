import React from './node_modules/react';

function Login() {
    return (
     <div>    
        <div className="container">
            <div className="row">
                    <div className="col-md-6 col-md-offset-3" style={{background: "gold"}}>
                    <h2>User Login</h2>
                        <form className="login">
                            <div className="form-group">
                                <label for="exampleInputEmail">Email Address</label>
                                <input type="emial" className="form-control" id="emial-input" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                        <button type="submit" className="btn btn-danger" style={{border: "black"}}>Login</button>
                        </form>
                        <a href="#" style={{color: "black"}}>Register</a>
                    </div>
                    <div className="col-md-6 col-md-offset-3">
                    <img src="/images/gamer.png" style={{width: "100%"}}/>
                    </div>
             </div>
        </div>
     </div> 
    )
}

export default Login;