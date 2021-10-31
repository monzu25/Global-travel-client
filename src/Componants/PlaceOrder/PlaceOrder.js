import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useFirebase from '../Firebase/useFirebase';

const PlaceOrder = () => {
    // const { orderId } = useParams(); 


    const location = useLocation();
    const getId = location.pathname.split('/').pop();
    const { user } = useFirebase()

    const [singleOrdered, setSingleOrdered] = useState({});

    const [selectedOrder, setSelectedOrder] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/packages/${getId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleOrdered(data))
    }, [])

    //Add to cart

    const addressRef = useRef();
    const phoneRef = useRef();

    const hndlePlaceOrder = tourService => {

        const isAvailable = selectedOrder.find(selected => selected._id === tourService._id);

        const address = addressRef.current.value;
        const phone = phoneRef.current.value;

        delete tourService._id;
        tourService.uid = user.uid;
        tourService.status = 'pending';
        tourService.address = address;
        tourService.phone = phone;

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
                        alert('Order Place Successfully.')
                    }
                })
        }
    }



    return (



        <div className="container my-5">
            <div className="row">
                <div className="col-md-7 d-flex justify-content-center">
                    <img className="rounded w-25 h-50" src={singleOrdered?.img} alt="" />
                    <h3>{singleOrdered?.title}</h3>
                    <h5 style={{ width: "100px" }} >Fee: ${singleOrdered?.price}</h5>
                </div>
                <div className="col-md-5">
                    <form>
                        <input type="text" value={user.displayName} placeholder="" /><br /><br />
                        <input type="text" value={user.email} placeholder="" /><br /><br />
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
