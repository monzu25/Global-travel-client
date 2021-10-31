import React from 'react';
import Packages from '../Packages/Packages';
import Bottom from './Bottom/Bottom';
import Slider from './Slider/Slider';


const Home = () => {


    return (
        <div>
            {/* <Header></Header> */}
            <Slider></Slider>
            <Packages></Packages>
            {/* <ExtraCss></ExtraCss> */}
            {/* <DetailsView></DetailsView> */}
            <Bottom></Bottom>

        </div>
    );
};

export default Home;