import React,{useState} from 'react'
import lineAndBarChart from '../../assets/line-and-bar-chart.jpg';
import Commercial from '../../assets/Commercial.svg'
import styles from './MarketTrend.css'

const MarketTrend = () => {

    const [activeBtn,setActiveBtn] = useState("Market")
    const [activeDayBtn,setActiveDayBtn] = useState("1st")


    return (
        <div style={{height: "100%"}} className ="bg-white rounded col-lg-12 card">
        <div className='innerCard'>
        <div className=" d-flex justify-content-between align-items-baseline">
            <div>
            <h2 className="fs-5 fw-bold">Current Market Trend</h2>
            <p className='text-muted'>Track how your rating compares to your industry average.</p>
            </div>
                <div className="d-flex gap-2">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className={`btn btn-outline-secondary  text-dark btnStyle ${activeDayBtn === '1st' ? 'activeBtn' : ''}`} onClick={()=>{setActiveDayBtn('1st')}}>12 Months</button>
                        <button type="button" className={`btn btn-outline-secondary  text-dark btnStyle ${activeDayBtn === '2nd' ? 'activeBtn' : ''}`} onClick={()=>{setActiveDayBtn('2nd')}}>30 Days</button>
                        <button type="button" className={`btn btn-outline-secondary  text-dark btnStyle ${activeDayBtn === '3rd' ? 'activeBtn' : ''}`} onClick={()=>{setActiveDayBtn('3rd')}}>7 Days</button>
                    </div>
                </div>
            </div>
            <div className="mt-1">
            <ul className="nav nav-pills rounded">
                <li className="nav-item">
                    <a className={`nav-link ${activeBtn === 'Market' ? 'active' : ''}`} onClick={()=>{setActiveBtn("Market")}} >Market</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${activeBtn === 'Category' ? 'active' : ''}`} onClick={()=>{setActiveBtn("Category")}} >Category</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${activeBtn === 'Products' ? 'active' : ''}`} onClick={()=>{setActiveBtn("Products")}} >Products</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${activeBtn === 'Cross Selling' ? 'active' : ''}`} onClick={()=>{setActiveBtn("Cross Selling")}} >Cross Selling</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${activeBtn === 'Geography' ? 'active' : ''}`} onClick={()=>{setActiveBtn("Geography")}} >Geography</a>
                </li>
            </ul>
            </div>
            <div className='row mt-4'>
                <div className='col-12'><div className='img-fluid'>
                <img className='w-100 img-fluid' src={lineAndBarChart} />
            </div>
            </div>
            </div>
        </div>
        <div style={{marginTop:"auto", verticalAlign: "bottom"}} className=' d-flex justify-content-end flex-column mt-3'>
                <div className='d-flex marketTrendFooter'>
                    <div style={{padding: "24px"}} className='img-fluid'>
                        <img style={{objectFit: 'cover'}} src={Commercial} alt="commercial" />
                    </div>
                    <div style={{padding: "15px"}}>
                        <div className='fs-6 fw-bold'>Your customer market is increasing! Set up Ad Campaign to reach your customers</div>
                        <p className='text-muted mb-0'>We will guide you through entire setup of Campaign</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MarketTrend
