import React from 'react'

const Header = () => {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <h1 className="fs-2 fw-bold">Dashboard</h1>
            <div className="d-flex gap-4">
                <button className="btn btn-light"><i className="fas fa-search"></i></button>
                <button style={{borderColor:'#D0D5DD'}} className="btn btn-light"><i className="bi bi-toggles"></i>{"  "}Customize</button>
                <button style={{borderColor:'#D0D5DD'}} className="btn btn-light"><i className="bi bi-cloud-arrow-down"></i>{"  "}Export</button>
            </div>
        </div>
    );
}

export default Header
