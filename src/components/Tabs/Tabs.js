import React,{useState} from 'react'

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('Market Analysis');

    return (
        <div className="mt-4">
            <div className="d-flex gap-4 border-bottom">
                <button
                    style={{border: 'none',background: 'white'}}
                    className={`py-2 ${activeTab === 'Market Analysis' ? 'border-bottom border-primary fw-bold' : ''}`}
                    onClick={() => setActiveTab('Market Analysis')}>
                    Market Analysis
                </button>
                <button
                    style={{border: 'none',background: 'white'}}
                    className={`py-2 ${activeTab === 'Performance' ? 'border-bottom border-primary fw-bold' : ''}`}
                    onClick={() => setActiveTab('Performance')}>
                    Performance
                </button>
            </div>
        </div>
    );
}

export default Tabs
