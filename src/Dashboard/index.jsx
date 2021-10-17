import React from 'react';
import Zoom from 'react-reveal/Zoom';
import DashboardWork1 from './DashboardWork1';
import DashboardWork2 from './DashboardWork2';
import DashboardWork3 from './DashboardWork3';
import DashboardWork4 from './DashboardWork4';
import { DashboardWrapper } from './style';

function Dashboard() {
    return (
        // <Zoom>
            <DashboardWrapper>
                <DashboardWork1 />
                <DashboardWork2 />
                <DashboardWork3 />
                <DashboardWork4 />
            </DashboardWrapper>
        // </Zoom>

    )
}

export default Dashboard;
