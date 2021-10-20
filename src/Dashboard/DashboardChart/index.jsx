import React from "react";
import ReactApexChart from "react-apexcharts";

export class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [70, 20, 10],
            options: {
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 270
                    }
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'gradient',
                },
                legend: {
                    formatter: function (val, opts) {
                        return val + " ." + opts.w.globals.series[opts.seriesIndex]
                    }
                },
                title: {
                    text: 'Visit Customers',
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },


        };
    }
    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={380} />
            </div>
        )
    }
}
