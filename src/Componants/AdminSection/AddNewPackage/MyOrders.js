import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Firebase/useAuth';
import useFirebase from '../../Firebase/useFirebase';

const MyOrders = () => {




    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    useEffect(() => {
        fetch(`https://mysterious-dawn-83616.herokuapp.com/orders/${user.uid}`)
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, []);


    // Handle Delete
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://mysterious-dawn-83616.herokuapp.com/order/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('deleted');
                        const remainingOrder = myOrder.filter(single => single._id !== id);
                        setMyOrder(remainingOrder);
                    }
                })
        }
    }




    return (
        <div className="container" style={{ minHeight: '500px' }}>
            <div className="row my-4">
                <div className="col-md-8">
                    {
                        myOrder.map(singleOrder => <div
                            key={singleOrder._id}
                        >
                            <div class="card mb-3" style={{ maxWidth: '540px' }}>
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={singleOrder.img} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">{singleOrder.title}</h5>
                                            <p class="card-text"><small class="text-muted">Price: {singleOrder.price}</small></p>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className='btn btn-danger' onClick={() => handleDelete(singleOrder._id)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
                <div className="col-md-4">
                    <h2>My Order: {myOrder.length}</h2>
                </div>
            </div>
        </div>

    );
};

export default MyOrders;