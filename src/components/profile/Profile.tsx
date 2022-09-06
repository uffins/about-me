import React from 'react';
import data from './data.json';
import {Image} from "react-bootstrap";

const ProfileElements = () => <>
    <Image src="/images/profile.jpg"
         alt="photo"
         fluid={true}
         roundedCircle={true}
         className="border border-primary border-3"/>
    <hr/>
    <ul className="list-unstyled mt-2">
        <li><small>🎂 {data.birth}</small></li>
        <li><small>💌 {data.email}</small></li>
        <li><small>🏠 {data.address}</small></li>
    </ul>
</>

export default ProfileElements;