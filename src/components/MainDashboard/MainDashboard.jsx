import React from 'react'
import Header from '../Header/Header';
import Tabs from '../Tabs/Tabs';
import Card from '../Card/Card';
import MarketTrend from '../MarketTrend/MarketTrend';
import Opportunities from '../Opportunities/Opportunities';
import IndustryTrend from '../IndustryTrend/IndustryTrend';
import Visibility from '../Visibility/Visibility';

const MainDashboard = () => {
    return (
        <div style={{borderRadius: "32px 0px 0px 0px"}} className="flex-grow-1 p-4 bg-white rounded-lg pb-4 shadow h-200">
            <Header />
            <Tabs />
            <div className="row mt-4">
                <div className="col-md-6 col-lg-4">
                    <Card title="Today's revenue" value="$1,280" percentage="15%" />
                </div>
                <div className="col-md-6 col-lg-4">
                    <Card title="Today's orders" value="14" percentage="10%" />
                </div>
                <div className="col-md-6 col-lg-4">
                    <Card title="Avg. order value" value="$91.42" percentage="20%" />
                </div>
            </div>
            <div className="row ">
                <div className="col-lg-8 mb-3">
                    <MarketTrend />
                </div>
                <div  className="col-lg-4 mb-3">
                    <Opportunities />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 mb-3">
                    <IndustryTrend />
                </div>
                <div className="col-lg-6 mb-3">
                    <Visibility />
                </div>
            </div>
        </div>
    );
}

export default MainDashboard
