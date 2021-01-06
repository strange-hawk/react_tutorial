import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Label } from 'recharts';
import { Line } from 'react-chartjs-2';

// export default class Graph extends Component {
//     render() {
//         const data = this.props.data
//         console.log(data)
//         return (
//             <AreaChart width={500} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
//                 <Area type="monotone" dataKey="volt" stroke="#8884d8" />
//                 <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//                 <XAxis dataKey="time">
//                     <Label value="Time" offset={0} position="insideBottom" />
//                 </XAxis>
//                 <YAxis dataKey="volt">
//                     <Label value="Voltage" offset={0} position="insideLeft" />
//                 </YAxis>
//                 <Tooltip />
//             </AreaChart>

//         )
//     }
// }

// const state = {
//     labels = labels
// }
export default class Graph extends Component {
    render() {
        const data_set = this.props.data
        var labels = []
        data_set.map(i => labels.push(i.time))
        var volatge = []
        data_set.map(i => volatge.push(i.volt))
        var current = []
        data_set.map(i => current.push(i.current))

        const graph_data = {
            labels: labels,
            datasets: [
                {
                    label: 'voltage',
                    fill:false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: volatge
                },
                {
                    label: 'current',
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: current
                }
            ]
        }


        return (
            <div style={{width : '800px', height: 'auto'}}>
                <Line
                    data={graph_data}
                    options={{
                        title: {
                            display: true,
                            text: 'voltage/current with time',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div >

        )
    }
}


// 0:
// current: 1
// energy: 1
// id: 10
// profile: 3
// time: "2019-04-06 15:38:47"
// volt: 1
// watt: 1