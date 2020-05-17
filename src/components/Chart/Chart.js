import React, {Component} from 'react';


import {Bar} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
           
                chartData:{
                  labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7','Chủ nhật'],
                  datasets:[
                    {
                      label : 'Doanh thu',
                      data:[
                        617594,
                        181045,
                        153060,
                        106519,
                        105162,
                        95072,
                        195072

                      ],
                      backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(62, 138, 138, 1)'

                      ]
                    }
                  ]
                }
             
        }
      }
    
     
     
 
  render(){
      
    return (
      <div>


	<div class="col-md-12">
  <Bar
          data={this.state.chartData}
          options={{
            //legend: { display: false },
            title: {
              
              display: true,
              text: 'Thống Kê Doanh Thu Hằng Ngày Trong Tuần',
              fontSize: 30
            },
           
          }}
        />
	</div>

      
      </div>
    )
  }
}

export default Chart;