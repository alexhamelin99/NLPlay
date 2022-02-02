//import React from 'react';

import React, { useState, useEffect, Component,useContext } from 'react'
//import { Chart as ChartJS, BarElement, CategoryScale,LinearScale,} from 'chart.js'
import { MusicContext } from '../../pages/UserContext';
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

  import { Scatter } from 'react-chartjs-2';
  import zoomPlugin from "chartjs-plugin-zoom";
  import axios from "axios";
  import './GraphAPI.css'

const cors = require('cors');
const app = cors();




ChartJS.register(
  CategoryScale,
  BarElement,
  zoomPlugin,
  LinearScale, PointElement, LineElement, Tooltip, Legend
);



const GraphAPI = () => {

  const {music, setMusic} = useContext(MusicContext);

  const graph1 = [];
  const graph2 = [];
  const graph3 = [];
  const graph4 = [];
  const graph5 = [];
  const graph6 = [];

  const label1 = [];
  const label2 = [];
  const label3 = [];
  const label4 = [];
  const label5 = [];
  const label6 = [];

  const songname = []

  const [graph, setGraph] = React.useState(null);
  //var endpoint = "http://127.0.0.1:8080/";

  React.useEffect(() => {
    axios.get("http://127.0.0.1:8080/").then((response) => {
      setGraph(response.data);



    });
  }, []);


  if (!graph) return null;


  for (var i = 0; i < graph.length; i++) {
    if (graph[i].lda_main_topic === "topic_1") { graph1.push(graph[i]) }
    else if (graph[i].lda_main_topic === "topic_2") { graph2.push(graph[i])}
    else if (graph[i].lda_main_topic === "topic_3") { graph3.push(graph[i])}
    else if (graph[i].lda_main_topic === "topic_4") { graph4.push(graph[i])}
    else if (graph[i].lda_main_topic === "topic_5") { graph5.push(graph[i])}
    else if (graph[i].lda_main_topic === "topic_6") { graph6.push(graph[i])}

  }

  for (var j = 0; j < graph.length; j++) {

    songname.push(graph[j].song_name)

  }


  var data = {

    son: songname,
    
    
    datasets: [{

      type: 'scatter',
      
      label: `Un bel endroit`,
      labels: graph1.song_name,
      data: graph1.map(e => ({ x: e.x, y: e.y })),
      borderColor: '#3c3c3c',
      backgroundColor: '#25B33D',
      borderWidth: 0.2,

    }, {
      type: 'scatter',
      labels: graph2.song_name,
      label: `Un message`,
      data: graph2.map(e => ({ x: e.x, y: e.y })),
      borderColor: '#3c3c3c',
      backgroundColor: '#3B5998',
      borderWidth: 0.2,

    }

      , {
      type: 'scatter',
      labels: graph3.song_name,
      label: `Prise de conscience`,
      data: graph3.map(e => ({ x: e.x, y: e.y })),
      borderColor: '#3c3c3c',
      backgroundColor: '#efd807',
      borderWidth: 0.2,

    }
      , {
      type: 'scatter',
      label: `Festif`,
      labels: graph4.song_name,
      data: graph4.map(e => ({ x: e.x, y: e.y })),
      borderColor: '#3c3c3c',
      backgroundColor: '#ff8300',
      borderWidth: 0.2,

    }
      , {
      type: 'scatter',
      label: `Amour`,
      labels: graph5.song_name,
      data: graph5.map(e => ({ x: e.x, y: e.y })),
      borderColor: '#3c3c3c',
      backgroundColor: '#ff0000',
      borderWidth: 0.2,

    }
      , {
      type: 'scatter',
      label: `Description de personnes`,
      labels: graph6.song_name,
      data: graph6.map(e => ({ x: e.x, y: e.y })),
      borderColor: '#3c3c3c',
      backgroundColor: '#B10DC9',
      borderWidth: 0.2,

    }

    ]


  }
  
  var options = {


   /*events: ["click", "mouseout"],*/

    plugins: {
      zoom: {
        limits: { y: { min: -100, max: 100, maxRange: 200, minRange: 5 }, x: { min: -100, max: 100, maxRange: 200, minRange: 5 } },
        zoom: {
          wheel: {
            enabled: true // SET SCROOL ZOOM TO TRUE
          },
          mode: "xy",
          speed: 100
        },
        pan: {
          enabled: true,
          mode: "xy",
          speed: 100
        }
      },
      tooltip: {
        callbacks: {

          label: (data) => {
            
            if (data.datasetIndex === 0) {
              const value = graph1[data.dataIndex].song_name + " de " + graph1[data.dataIndex].artist_name
              return value
            }
            else if (data.datasetIndex === 1) {
              const value = graph2[data.dataIndex].song_name + " de " + graph2[data.dataIndex].artist_name
              return value
            }
            else if (data.datasetIndex === 2) {
              const value = graph3[data.dataIndex].song_name + " de " + graph3[data.dataIndex].artist_name
              return value
            }
            else if (data.datasetIndex === 3) {
              const value = graph4[data.dataIndex].song_name + " de " + graph4[data.dataIndex].artist_name
              return value
            }
            else if (data.datasetIndex === 4) {
              const value = graph5[data.dataIndex].song_name + " de " + graph5[data.dataIndex].artist_name
              return value
            }
            else if (data.datasetIndex === 5) {
              const value = graph6[data.dataIndex].song_name + " de " + graph6[data.dataIndex].artist_name
              return value
            }
         }
        }
      }
    },



    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,

      }
    },
    legend: {
      display: true,
      labels: {
        fontSize: 24,
        color: 'rgb(255, 99, 132)'
      }
    }
  }

  return (<div className='Music'>
            <h3> {graph.length} Musique Disponible</h3>
            <div style={{height: "95%"}}>
              <Scatter
                data={data}
                options={options}
              />
            </div>


  </div>)
};

export default GraphAPI;
