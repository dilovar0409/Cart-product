import React from 'react';
import { Bar, Line, Pie, defaults } from 'react-chartjs-2';
import { DashboardWork3Card, DashboardWork3Div, DashboardWork3Wrapper, DashboardWork3Wrapper1, DashboardWork3Wrappers } from './style';

function DashboardWork3() {
    return (
        <DashboardWork3Wrapper>
            <DashboardWork3Wrappers>
                <DashboardWork3Wrapper1>
                    <p>Sales Overview</p>
                    <DashboardWork3Div>
                        <p>Month</p>
                        <div><i class="fas fa-chevron-down"></i></div>
                    </DashboardWork3Div>
                </DashboardWork3Wrapper1>
                <div>
                    <div>
                        <Bar data={{
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            datasets: [{
                                label: 'statics',
                                data: [16, 12, 18, 8, 10, 18, 10, 12, 10, 8, 19, 10],
                                backgroundColor: [
                                    '#45A5FF',
                                    '#45A5FF',
                                    '#45A5FF',
                                    '#45A5FF',
                                    '#45A5FF',
                                    '#FEBB36',
                                    '#45A5FF',
                                    '#45A5FF',
                                    '#45A5FF',
                                    '#45A5FF',
                                    '#45A5FF',
                                    '#45A5FF',
                                ],
                            }]
                        }} />
                    </div>
                </div>
            </DashboardWork3Wrappers>
            <DashboardWork3Card>
                <DashboardWork3Wrapper1>
                    <p className="text">Analytics</p>
                    <DashboardWork3Div style={{marginBottom:"40px"}}>
                        <p>Weekly</p>
                        <div><i class="fas fa-chevron-down"></i></div>
                    </DashboardWork3Div>
                </DashboardWork3Wrapper1>
                <div>
                    <Line data={{
                        labels: ['Sun', 'Mon', 'Tuh', 'Wed', 'Thu', 'Fri', 'Sat', 'In'],
                        datasets: [{
                            label: 'statics',
                            data: [10, 2, 12, 10, 20, 10, 18, 25],
                            backgroundColor: [
                                '#45A5FF',
                                '#45A5FF',
                                '#45A5FF',
                                '#dae7ee',
                                '#45A5FF',
                                '#45A5FF',
                                '#45A5FF',
                                '#45A5FF',
                                '#45A5FF',
                                '#45A5FF',
                            ],
                        }]
                    }} />
                </div>
            </DashboardWork3Card>
        </DashboardWork3Wrapper>
    )
}

export default DashboardWork3;
