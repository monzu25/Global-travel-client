import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Portfolio.css'

const touristPlaces = [
    {
        id:101,
        placeName: 'Paris Tourist Place,Eiffel Tower',
        placeURL:'https://media-private.canva.com/MAC5Fb9-pbI/1/screen_2x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20220216%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220216T040724Z&X-Amz-Expires=40670&X-Amz-Signature=ab8b56971cf939ccf0401f07927a717e1a15f771e7d82c294f33eee65031637f&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2016%20Feb%202022%2015%3A25%3A14%20GMT'
    },
 
    {
        id:103,
        placeName: 'Paris Tourist Place,Eiffel Tower',
        placeURL:'https://marketplace.canva.com/XI17Y/MAEGvtXI17Y/1/s2/canva-temple-wat-in-nan%2C-thailand-MAEGvtXI17Y.jpg'
    },
    {
        placeName: 'Wat Phra That , Lamphun Thailand',
        placeURL:'https://marketplace.canva.com/52FPw/MAEGtT52FPw/1/s2/canva-wat-phra-that-%2C-lamphun-thailand-MAEGtT52FPw.jpg'
    },
    {
        id:104,
        placeName: 'Famous tourist place in Leon',
        placeURL:'https://media-private.canva.com/MADFPo8GGxY/1/screen_2x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20220215%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220215T152424Z&X-Amz-Expires=89902&X-Amz-Signature=e0fddd35f69d7f289922ab81503f0a2eb98cc7d7b925a7a3888dff1c2ba6407c&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2016%20Feb%202022%2016%3A22%3A46%20GMT'
    },
    {
        id:105,
        placeName: 'Surajkund, A tourist place,',
        placeURL:'https://media-private.canva.com/MADSP0deYI0/1/screen_2x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20220215%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220215T225057Z&X-Amz-Expires=60281&X-Amz-Signature=7153fb9b011a3bfd33d6b88c71910cce5e9c9d12c4740e7d6de8d48d5cd0ac8e&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2016%20Feb%202022%2015%3A35%3A38%20GMT'
    },
    {
        id:106,
        placeName: 'Tourist Cruse Boat in Germany',
        placeURL:'https://media-private.canva.com/MADJ0aKw1Wg/1/screen_2x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20220216%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220216T040726Z&X-Amz-Expires=43343&X-Amz-Signature=7dc885a956638f3ba6a3ee0f81b0a0e60ef5ab166b32bec6f2e7cc0e1060eec1&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2016%20Feb%202022%2016%3A09%3A49%20GMT'
    },

]


const Profle = () => {



    return (
     <div className='container my-5'>
            <h2>Attractive Places For Tourist</h2>
   <Row xs={1} md={2} lg={3} className="g-4">
     {touristPlaces.map((touritPlace) => (
      <Col>
      <Card key={touritPlace.id}>
        <Card.Img variant="top" src={touritPlace.placeURL} />
        <Card.Body>
          <Card.Title>{touritPlace.placeName}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
   ))}
 </Row>

        </div>
 
    );
};

export default Profle;