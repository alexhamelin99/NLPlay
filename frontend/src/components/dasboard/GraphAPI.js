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
import { Bar,Scatter } from 'react-chartjs-2';

import axios from "axios"

const cors = require('cors');
const app = cors();

ChartJS.register(
    CategoryScale,
    BarElement,
    LinearScale, PointElement, LineElement, Tooltip, Legend
);



const GraphAPI = () => {

    const [graph, setGraph] = useState({})

    const fetchData = () => {
        return fetch("http://127.0.0.1:8080/")
              .then((response) => response.json())
              //.then((data) => setGraph(data))
              .then((data) => console.log(data[8]));}
              
    
              useEffect(() => {
                fetchData();
                }, []);
               /* useEffect(() => {
                    const fetchSong = async () => {
                      await fetch("http://127.0.0.1:8080/", {
                        method: 'GET',
                        headers: {
                        }
                      })
                        .then((response) => {
                          if (response.ok) {
                            response.json().then((json) => {
                              console.log(json.data);
                              setGraph(json.data)
                            });
                          }
                        }).catch((error) => {
                          console.log(error);
                        });
                    };
                    fetchSong()
                  },)*/
        


    var data= {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [{
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
              }],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
    
    var  options= {
        maintainAspectRatio:false,
        scales: {
            y: {
                beginAtZero: false
            }
        },
        legend:{
            labels:{
                fontSize:26
            }
        }
    }

  return( <div>
      <Scatter
      data={data}
      height={400}
      options={options}
      />

      
  </div>)
};

export default GraphAPI;

