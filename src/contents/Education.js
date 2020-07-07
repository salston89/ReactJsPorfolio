import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Mobile App Development" where="Wake Technical Community College" from="July 2019" to="Present"/>
            <Widecard title="A.A.S in Graphic Arts" where="Kings College" from="2007" to="2009"/>
            </div>
            )
        }
    }
    
export default Education
    