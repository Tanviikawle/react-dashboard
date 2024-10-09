import React from 'react'
import graphImg from '../../assets/chart-card.jpg';

const Card = ({ title, value, percentage }) => {
    return (
        <div className="bg-white p-4 rounded card mb-3">
        <div className='d-flex justify-content-between mb-2'>
            <div className='card-title fw-bold fs-6'>{title}</div>
            <div style={{color: '#98A2B3'}}><i className="bi bi-three-dots-vertical"></i></div>
        </div>
        <div className='row'>
            <div className='col-6'>
                <div className='card-title fw-bold fs-2'>{value}</div>
                <div className='fs-6'><i style={{color:"#17B26A"}} className="bi bi-arrow-up fw-bold"></i><span style={{color: '#067647'}}>{percentage}</span> last mnth</div>
            </div>
            <div className='col-6 d-flex justify-content-end'>
                <img className='img-fluid' src={graphImg} alt="graph1"/>
            </div>
        </div>
        </div>
    );
}

export default Card
