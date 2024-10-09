import React from 'react'
import PieChart from '../../assets/Pie chart.jpg'
import styles from './IndustryTrnds.css'

const IndustryTrend = () => {
    return (
        <div style={{height: "100%"}} className="bg-white p-4 rounded card">
            <div className='d-flex justify-content-between mb-2'>
                <div className='card-title fw-bold fs-5'>Trending in your Industry</div>
                <div style={{color: '#98A2B3'}}><i className="bi bi-three-dots-vertical fs-5"></i></div>
            </div>
            <hr className='mt-0 mb-4' />
            <div className="mt-4">
                <div className='row'>
                    <div className='col-6 d-flex align-items-center justify-content-center'>
                        <img className='img-fluid' src={PieChart} />
                    </div>
                    <div className='col-6'>
                        <ul  style={{height: "100%"}} className="list-unstyled m-0 d-flex flex-column justify-content-between">
                            <div className='mb-3 '>
                                <div className='fs-4 fw-bold mb-2'>32%</div>
                                <li>
                                    <span className="dot dot-black"></span>
                                    <span>Pattern Tiles</span>
                                </li>
                            </div>
                            <div className='mb-3'>
                                <div className='fs-4 fw-bold mb-2'>49%</div>
                                <li>
                                    <span className="dot dot-dark-blue"></span>
                                    <span>Wooden Floor</span>
                                </li>
                            </div>
                            <div className='mb-3'>
                                <div className='fs-4 fw-bold mb-2'>27%</div>
                                <li>
                                    <span className="dot dot-yellow"></span>
                                    <span>Stone Textured tiles</span>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor: "#EFF6FA",color:"#1B5A84"}} className='p-2 m-2 mt-4 rounded'>
                <div className='d-flex align-items-center m-1 fw-bold justify-content-between'>
                    <div className='align-items-center p-2'><i className="bi bi-arrow-up-right fs-5"></i></div>
                    <div className='p-2'><p>Wooden floor is in trending , set up campaign for wooden tiles to reach these users</p></div>
                    <div className='align-items-center p-2 pe-2'><i className="bi bi-arrow-right fs-5"></i></div>
                </div>
            </div>
        </div>
    );
}

export default IndustryTrend
