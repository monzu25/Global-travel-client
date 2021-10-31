import React from 'react';


const Contact = () => {
    return (
        <div className="container w-50 my-5">
            <h2 className="my-3" >Contact Us</h2>

            <div className="mb-3 d-flex ">
                <label style={{ width: "200px" }} for="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
            </div>
            <div className="mb-3 d-flex ">
                <label style={{ width: "200px" }} for="exampleFormControlInput1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3 d-flex">
                <label style={{ width: "200px" }} for="exampleFormControlTextarea1" className="form-label">Your Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Write Your Message" rows="3"></textarea>
            </div>
            <div className="mb-3 ms-4 w-50 text-white justify-content-lg-start justify-content-md-start ">
                <button className="btn btn-primary ">Submit</button>
            </div>
        </div >
    );
};

export default Contact;