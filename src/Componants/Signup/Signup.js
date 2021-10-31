import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';


const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);


    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const onSignup = () => {

        setLoading(true);
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => history.push('/login'))
                    .catch((e) => alert(e.message))
            }).catch((e) => alert(e.message))
            .finally(() => setLoading(false))
    }






    return (
        <>
            <section className="vh-auto" >

                <div className="container py-5  h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center">

                                    <h3 className="mb-5">Create an Account</h3>
                                    <div className="form-outline mb-4">
                                        <input value={name} onChange={e => setName(e.target.value)} name="name" id="name" placeholder="Full Name" className="form-control form-control-lg" />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input value={email} onChange={e => setEmail(e.target.value)} name="email" type="email" id="email" placeholder="Your Valid Email" className="form-control form-control-lg" />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input value={password} onChange={e => setPassword(e.target.value)} name="password" type="password" placeholder="Password" id="password" className="form-control form-control-lg" />
                                    </div>


                                    <div className="d-flex  justify-content-sm-between mb-4">
                                        <button onClick={onSignup} className="btn btn-primary w-25 h-25 ">  {loading ? 'Creating user ...' : 'Signup'}</button>
                                        <div>
                                            <p className="text-center text-muted">Have already an account?

                                                <Nav.Link as={Link} to="/login"> Login</Nav.Link>
                                            </p>
                                        </div>
                                    </div>
                                    <hr className="my-4" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Signup;