import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Firebase/useAuth';




const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';


    const btnLoginWithGoogle = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }



    // Email Password Login Method 


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);


    const onLogin = () => {
        setLoading(true)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // localStorage.setItem('token', userCredential._tokenResponse.idToken);
                history.push(redirect_uri)
            })
            .catch(e => alert(e.message))
            .finally(() => setLoading(false))
    }





    return (

        <section className="vh-100" >
            <div className="container py-5  h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-5">Sign in</h3>

                                <div className="form-outline mb-4">

                                    <input value={email} onChange={e => setEmail(e.target.value)} name="email" type="email" id="typeEmailX-2" placeholder="Your Valid Email" className="form-control form-control-lg" />

                                </div>

                                <div className="form-outline mb-4">
                                    <input value={password} onChange={e => setPassword(e.target.value)} name="password" type="password" placeholder="Password" id="typePasswordX-2" className="form-control form-control-lg" />

                                </div>


                                <div className="d-flex  justify-content-sm-between mb-4">



                                    <button onClick={onLogin} className="btn btn-primary w-25 h-25 " type="submit">  {loading ? 'Logging you in ...' : 'Login'}</button>
                                    <div>
                                        <p>New To Global Tour? </p>
                                        <Link to="/signup">Create Account</Link>
                                    </div>

                                </div>
                                <hr className="my-4" />


                                <button onClick={btnLoginWithGoogle} className="btn btn-lg btn-block btn-primary mb-3" style={{ backgroundColor: "#dd4b39" }} type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
                                <button className="btn btn-lg btn-block btn-primary mb-2" style={{ backgroundColor: "#3b5998" }} type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Login;