import React from 'react'
import Container from '../../assets/container.jpg'

const Visibility = () => {
    return (
        <div style={{height: "100%"}} className="bg-white p-4 rounded card">
            <div className='d-flex justify-content-between mb-2'>
                <div className='card-title fw-bold fs-5'>Visibility</div>
                <div style={{color: '#98A2B3'}}><i className="bi bi-three-dots-vertical fs-5"></i></div>
            </div>
            <hr className='mt-0 mb-4' />
            <div style={{height:"100%"}} className="mt-4 d-flex justify-content-between flex-column">
                <div className='row'>
                    <div className="col-md-6 col-lg-6 col-xl-4 mt-3">
                            <div className="fs-6 mb-2 ">Impressions</div>
                            <div className='d-flex'>
                                <div className='pe-1'>
                                <div className="fs-2 fw-bold">4,862</div>
                                </div>
                                <div className='p-1'>
                                <div className="d-flex align-items-center fw-bold fs-6">
                                <i style={{color: "#17B26A"}} className="bi bi-arrow-up-right"></i>
                                <span className='text-success'>9.2%</span>
                            </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4 mt-3">
                            <div className="fs-6 mb-2 ">Views</div>
                            <div className='d-flex'>
                                <div className='pe-1'>
                                <div className="fs-2 fw-bold">2,671</div>
                                </div>
                                <div className='p-1'>
                                <div className="d-flex align-items-center fw-bold fs-6">
                                <i style={{color: "#17B26A"}} className="bi bi-arrow-up-right"></i>
                                <span className='text-success'>6.6%</span>
                            </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4 mt-3">
                            <div className="fs-6 mb-2 ">Clicks</div>
                            <div className='d-flex'>
                                <div className='pe-1'>
                                <div className="fs-2 fw-bold">822</div>
                                </div>
                                <div className='p-1'>
                                <div className="d-flex align-items-center fw-bold fs-6">
                                <i style={{color: "#17B26A"}} className="bi bi-arrow-up-right"></i>
                                <span className='text-success'>8.1%</span>
                            </div>
                        </div></div></div>
                </div>
                <div className='p-2 m-2 rounded'>
                    <div className=" d-flex justify-content-center">
                            <img className='img-fluid' src={Container} alt="Visibility graph" />
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Visibility
