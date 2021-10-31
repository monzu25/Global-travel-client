import React, { useRef } from 'react';

const AddNewPackage = () => {

    const titleRef = useRef();
    const descrpRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();
    const durationRef = useRef();
    const personRef = useRef();
    const countryRef = useRef();

    const handleAddPackage = e => {

        const title = titleRef.current.value;
        const description = descrpRef.current.value;
        const img = imgRef.current.value;
        const price = priceRef.current.value;
        const duration = durationRef.current.value;
        const person = personRef.current.value;
        const country = countryRef.current.value;



        const newPackage = { title, description, img, price, duration, person, country };

        fetch('http://localhost:5000/packages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPackage)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }


    return (
        <div className="container ">
            <div className="m-4">
                <h1 className="my-3">Add New Packages</h1>
                <form onSubmit={handleAddPackage}>
                    <div className="mb-3">
                        <input type="text" ref={titleRef} className="form-control" id="inputEmail" placeholder="Title" required />
                    </div>
                    <div className="mb-3">
                        <textarea name="description" ref={descrpRef} placeholder="Description" style={{ width: "100%" }} id="description" ></textarea>
                    </div>
                    <div className="mb-3">
                        <input type="text" ref={imgRef} className="form-control" id="inputImg" placeholder="Image Link" required />
                    </div>
                    <div className="mb-3">
                        <input type="number" ref={priceRef} className="form-control" id="inputPrice" placeholder="Price" required />
                    </div>
                    <div className="mb-3">
                        <input type="text" ref={durationRef} className="form-control" id="inputDuration" placeholder="Duration (Formate:XD/YN)" required />
                    </div>
                    <div className="mb-3">
                        <input type="number" ref={personRef} className="form-control" id="inputDuration" placeholder="Number Of Person" required />
                    </div>
                    <div className="mb-3">
                        <input type="text" ref={countryRef} className="form-control" id="inputCountry" placeholder="Country" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Add New Package</button>
                </form>
            </div>

        </div>
    );
};

export default AddNewPackage;