import React from 'react';
import './Bottom.css'

const Bottom = () => {
    return (

        <div>
            <h1>Our Statistics</h1>

            <div className="container d-md-flex ">
                <div>
                    <img src="https://demo.bosathemes.com/html/travele/assets/images/img8.jpg" alt="" />
                </div>
                <div className="container-fluid p-4 text-white" style={{ backgroundColor: "#00294D" }}>

                    <div><h2>GO TRAVEL. DISCOVER. REMEMBER US!!</h2>
                        <h5 className="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Eaque adipiscing, luctus eleifend.</h5>
                    </div>
                    <div className="container align-items-center pt-5 " >
                        <div className=" d-flex flex-row justify-content-center" >
                            <div className="border-bottom  border-end d-flex flex-row p-2">
                                <img width="80px" src="https://demo.bosathemes.com/html/travele/assets/images/icon1.png" alt="" />
                                <div className="m-2"><h3>500K+</h3>
                                    <p>Satisfied Clients</p>
                                </div>
                            </div>
                            <div className="border-bottom d-flex flex-row p-2" >
                                <img height="80px" src="https://demo.bosathemes.com/html/travele/assets/images/icon3.png" alt="" />
                                <div className="m-2"><h3>250K+</h3>
                                    <p>Satisfied Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className=" d-flex flex-row justify-content-center " >
                            <div className="border-end d-flex p-2">
                                <img height="80px" src="https://demo.bosathemes.com/html/travele/assets/images/icon2.png" alt="" />
                                <div className="m-2"><h3>15K+</h3>
                                    <p>Satisfied Clients</p>
                                </div>
                            </div>
                            <div className=" d-flex  p-2">
                                <img height="80px" src="https://demo.bosathemes.com/html/travele/assets/images/icon4.png" alt="" />
                                <div className="m-2"><h3>10K+</h3>
                                    <p>Satisfied Clients</p>
                                </div></div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Bottom;