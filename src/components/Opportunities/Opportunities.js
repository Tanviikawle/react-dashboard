import React from 'react'
import Meter from '../../assets/meter.jpg'
import styles from './Opportunities.css'

const Opportunities = () => {
    return (
        <div style={{height: "100%"}} className="bg-white p-3 rounded card">
            <div className='d-flex justify-content-between'>
                <div className='card-title fw-bold fs-5'>Industry Opportunities</div>
                <div style={{color: '#98A2B3'}}><i className="bi bi-three-dots-vertical fs-5"></i></div>
            </div>
            <hr className='mt-0 mb-4' />
            <div style={{height:"100%"}} className='d-flex align-items-center flex-column justify-content-center'>
            <div >
            <div className="my-4 d-flex justify-content-center">
                <img className='img-fluid' src={Meter} alt="Opportunities gauge" />
            </div>
            <h6 style={{marginTop: "10px", paddingTop: "30px"}} className="fs-5">You can achieve <span style={{color: "#10B981"}}>44%</span> more opportunities in market</h6>
            </div>
            <hr style={{width:"100%"}} className='mt-1 mb-4' />
            <div className="container mt-3">
                <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2">
                    <span className="dot"></span>
                    <span>Your Position in Market</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                    <span className="dot dot-light-green"></span>
                    <span>Total Market Opportunities</span>
                </li>
                <li className="d-flex align-items-center">
                    <span className="dot dot-dark-green"></span>
                    <span>Achievable Market Opportunities</span>
                </li>
                </ul>
            </div>
            </div>
            
        </div>
    );
}

export default Opportunities
