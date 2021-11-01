import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useFirebase from '../Firebase/useFirebase';

const PlaceOrder = () => {
    // const { orderId } = useParams(); 

    const { user } = useFirebase()
    const location = useLocation();
    const getId = location.pathname.split('/').pop();


    const [singleOrdered, setSingleOrdered] = useState({});
    const [selectedOrder, setSelectedOrder] = useState([]);

    // To show Your Selected Item In Purcase Page 
    useEffect(() => {
        const url = `http://localhost:5000/packages/${getId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleOrdered(data))
    }, [])

    //Add to cart

    const nameRef = useRef()
    const emailRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    // console.log(selectedOrder);

    const hndlePlaceOrder = tourService => {

        const isAvailable = selectedOrder.find(selected => selected.packageId === tourService.getId);


        delete tourService._id;

        const address = addressRef.current.value;
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;


        tourService.uid = user.uid;
        tourService.name = name;
        tourService.email = email;
        tourService.address = address;
        tourService.phone = phone;
        tourService.packageId = getId;
        tourService.status = 'pending';

        if (isAvailable) {
            alert('Already added this item on cart.');
        }
        else {
            fetch('http://localhost:5000/newOrder/add', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(tourService)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        const newSelection = [...selectedOrder, tourService];
                        setSelectedOrder(newSelection)
                        alert('Your Order Placed Successfully.')
                    }
                })
        }

        nameRef.current.value = ""
        emailRef.current.value = ""
        addressRef.current.value = ""
        phoneRef.current.value = ""

    }



    return (

        <div className="container my-5" >
            <div className="row">
                <div className="col-md-7 d-flex align-items-center border-1 border-success" style={{ border: "1px solid lightblue", boxShadow: "initial" }}  >
                    <img className="rounded w-25 h-75" src={singleOrdered?.img} alt="" />

                    <div>
                        <h3>{singleOrdered?.title}</h3>
                        <div className="d-flex justify-content-around mt-5">
                            <p>Duration: {singleOrdered?.duration}</p>
                            <p>Person : {singleOrdered?.person}</p>
                            <p> Country: {singleOrdered?.country}</p>
                        </div>
                        <h5 className="mt-2 me-3" style={{ width: "120px", float: "right", backgroundColor: "#0791BE", padding: "2px 2px", borderRadius: "5px", color: "#fff" }} >Fee: ${singleOrdered?.price}</h5>
                    </div>

                </div>
                <div className="col-md-5">
                    <form>
                        <input type="text" ref={nameRef} value={user.displayName} placeholder="" /><br /><br />
                        <input type="text" ref={emailRef} value={user.email} placeholder="" /><br /><br />
                        <input type="text" ref={addressRef} placeholder="Address" /><br /><br />
                        <input type="text" ref={phoneRef} placeholder="Phone" /><br /><br />
                    </form>
                    <button onClick={() => hndlePlaceOrder(singleOrdered)} className="btn btn-primary text-white">Place Order</button>

                </div>
            </div>
        </div>

    );
};

export default PlaceOrder;
