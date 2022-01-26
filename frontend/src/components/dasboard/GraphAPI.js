//import React from 'react';
import React, { useState, useEffect,Component } from 'react'
//import { Chart as ChartJS, BarElement, CategoryScale,LinearScale,} from 'chart.js'
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale
  } from 'chart.js';
import {Scatter } from 'react-chartjs-2';

import axios from "axios";

const cors = require('cors');
const app = cors();



ChartJS.register(
    CategoryScale,
    BarElement,
    LinearScale, PointElement, LineElement, Tooltip, Legend
);



const GraphAPI = () => {

 
  const graph1=[];
  const graph2=[];
  const graph3=[];
  const graph4=[];
  const graph5=[];
  const graph6=[];

  const label1=[];
  const label2=[];
  const label3=[];
  const label4=[];
  const label5=[];
  const label6=[];

  const songname=[]

    const [graph, setGraph] = React.useState(null);
    //var endpoint = "http://127.0.0.1:8080/";

    React.useEffect(() => {
      axios.get("http://127.0.0.1:8080/").then((response) => {
        setGraph(response.data);



      });
    }, []);


    if (!graph) return null;
    else console.log(graph[1].x);
    //console.log(Xcoo[1]);


                  for(var i=0; i<graph.length;i++){
                    if(graph[i].lda_main_topic==="topic_1"){graph1.push(graph[i])&&label1.push(graph[i].song_name)}
                    else if(graph[i].lda_main_topic==="topic_2"){graph2.push(graph[i])&&label2.push(graph[i].song_name)}
                    else if(graph[i].lda_main_topic==="topic_3"){graph3.push(graph[i])&&label3.push(graph[i].song_name)}
                    else if(graph[i].lda_main_topic==="topic_4"){graph4.push(graph[i])&&label4.push(graph[i].song_name)}
                    else if(graph[i].lda_main_topic==="topic_5"){graph5.push(graph[i])&&label5.push(graph[i].song_name)}
                    else if(graph[i].lda_main_topic==="topic_6"){graph6.push(graph[i])&&label6.push(graph[i].song_name)}
          
                  }

                  for(var j=0; j<graph.length;j++){

                    songname.push(graph[j].song_name)

                  }
                  
                  console.log(label1[8]);

    var data={

      
        datasets: [{

          type: 'scatter',
          label: `${graph1?.length} Musique Disponible`,
          labels:label1,
         /* data: [{
              x: -10,
              y: 0
            }, {
              x: 0,
              y: 10
            }, {
              x: 10,
              y: 5
            }, {
              x: 0.5,
              y: 5.5
            }],*/
          data: graph1.map(e => ({ x: e.x, y: e.y})),
          //data:[graph?.map(x => x.x),graph?.map(y=>y.y)],
          //data:{x:graph?.map(x => x.x),y:graph?.map(y => y.y)},
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132,.0.5)',
          borderWidth: 1,

      }, {
            type: 'scatter',
            labels:graph.song_name,
            label: `${graph2?.length} Musique Disponible`,
            data: graph2.map(e => ({ x: e.x, y: e.y})),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(10, 48, 171, 0.5)',
            borderWidth: 1,

        }

        , {
          type: 'scatter',
          labels:label3,
          label: `${graph3?.length} Musique Disponible`,
          data: graph3.map(e => ({ x: e.x, y: e.y})),
          borderColor: 'rgb(231, 239, 16)',
          backgroundColor: 'rgba(231, 239, 16, 0.5)',
          borderWidth: 1,

      }
        , {
          type: 'scatter',
          label: `${graph4?.length} Musique Disponible`,
          labels:label4,
          data: graph4.map(e => ({ x: e.x, y: e.y})),
          borderColor: 'rgb(186, 27, 235)',
          backgroundColor: 'rgba(186, 27, 235, 0.5)',
          borderWidth: 1,

      }
        , {
          type: 'scatter',
          label: `${graph5?.length} Musique Disponible`,
          labels:label5,
          data: graph5.map(e => ({ x: e.x, y: e.y})),
          borderColor: 'rgb(235, 159, 27)',
          backgroundColor: 'rgba(235, 159, 27, 0.5)',
          borderWidth: 1,

      }
        , {
          type: 'scatter',
          label: `${graph6?.length} Musique Disponible`,
          labels:label6,
          data: graph6.map(e => ({ x: e.x, y: e.y})),
          borderColor: 'rgb(132, 59, 59)',
          backgroundColor: 'rgba(132, 59, 59, 0.5)',
          borderWidth: 1,

      }

      ]


    }
    
    var  options= {

    plugins:{
      tooltip:{
        callbacks: {
       /*   title: function() {
            // console.log(ctx);

            return `${songname[8]}` ;
          }*/
       }       


      }},

      /*onClick: (e) => {
        const canvasPosition = graph.helpers.getRelativePosition(e, graph);

        // Substitute the appropriate scale IDs
        const dataX = graph.scales.x.getValueForPixel(canvasPosition.x);
        const dataY = graph.scales.y.getValueForPixel(canvasPosition.y);
        console.log(dataY);
    },*/

        maintainAspectRatio:false,
        scales: {
            y: {
                beginAtZero: true
            },
            x: {
              type: 'linear',
              position: 'bottom'
            }
        },
        legend:{
            display:true,
            labels:{
                fontSize:24,
                color: 'rgb(255, 99, 132)'
            }
        }
    }

  return( <div className='Music'>
      <h1> {graph[1].song_name} </h1>
      <Scatter
      data={data}
      height={200}
      options={options}
      />

      
  </div>)
};

export default GraphAPI;

