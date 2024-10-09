import React,{useState} from 'react'
import styles from './Sidebar.css'

const Sidebar = () => {

    const[activeBtn,setActive] = useState("home");

    return (
        <div style={{height:"100%", marginLeft: "0.6rem"}} className={`${styles.sideNav} text-white p-4 mt-3 d-flex flex-column align-items-center`}>
            <div className="rounded-circle bkgImg">
            </div>
            <div style={{height:"100%"}} className='d-flex flex-column mt-4'>
                <div className='d-flex flex-column sideBarIcons flex-fill align-items-center'>
                    <div className={`sideDiv ${activeBtn === 'home' ? 'active' : ''}`} onClick={()=>{setActive('home')}}>
                        <i className="fas fa-home text-white "></i>
                    </div>
                    
                    <div className={`sideDiv ${activeBtn === 'graph' ? 'active' : ''}`} onClick={()=>{setActive('graph')}}>
                        <i className="bi bi-file-bar-graph"></i>
                    </div>
                    
                    <div className={`sideDiv ${activeBtn === 'stack' ? 'active' : ''}`} onClick={()=>{setActive('stack')}}>
                        <i className="bi bi-stack"></i>
                    </div>
                    
                    <div className={`sideDiv ${activeBtn === 'square' ? 'active' : ''}`} onClick={()=>{setActive('square')}}>
                        <i className="bi bi-check2-square"></i>
                    </div>
                    
                    <div className={`sideDiv ${activeBtn === 'pie' ? 'active' : ''}`} onClick={()=>{setActive('pie')}}>
                        <i className="bi bi-pie-chart"></i>
                    </div>
                    
                    <div className={`sideDiv ${activeBtn === 'people' ? 'active' : ''}`} onClick={()=>{setActive('people')}}>
                        <i className="bi bi-people"></i>
                    </div>
                    
                </div>
                <div className='d-flex flex-column sideBarIcons flex-fill align-items-center'>
                    <div className={`sideDiv ${activeBtn === 'life' ? 'active' : ''}`} onClick={()=>{setActive('life')}}>
                        <i className="bi bi-life-preserver"></i>
                    </div>
                        
                    <div className={`sideDiv ${activeBtn === 'gear' ? 'active' : ''}`} onClick={()=>{setActive('gear')}}>
                        <i className="bi bi-gear"></i>
                    </div>
                    
                    <div className="sideDiv" onClick={()=>{setActive('gear')}}>
                        <i><div className="rounded-circle user"></div></i>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Sidebar
