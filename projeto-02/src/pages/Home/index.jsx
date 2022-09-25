import React from "react";
import { useEffect, useState } from "react";
import { Navbar } from "../../componentes/navbar";
import { Card } from "../../componentes/cards/card";
import styles from './home.css'
import axios from "axios";




const HomePage = () => {


    // const [localizacao, setLocalizacao] = useState(false)
    // const [weather, setWeather] = useState(false)


    // useEffect(()=>{
    //     navigator.geolocation.getCurrentPosition((position)=>{
    //         getWeather(position.coords.latitude, position.coords.longitude)
    //         setLocalizacao(true)
    //     })
    // }, [])


  

    // let getWeather = async (lat, long) => {
    //     let  res = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
    //         params: {
    //             lat: lat,
    //             lon: long,
    //             appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
    //             lang:"pt",
    //             units: 'metric',
    //         }
    //     });
    //     setWeather(res.data)
    //     console.log(res.data)
    // }
        


    return (
        <>
            <Navbar />
            <div className="clima">
                <div className="temp">
                    <h2>16ºC</h2>
                    <h3>Palhoça,SC</h3>
                </div>
                <div className="info-temp">
                    <h4> Sensação térmica: 16ºC - precipitação: 0mm - Chance de chuva: 0% </h4>
                </div>
            </div>

            <div className="filter">
                <button>Todos</button>

                <button>Casa</button>

                <button>Escritório</button>
            </div>

            <div className="todos-produtos">
                <Card />
                <Card />
                <Card />

            </div>

        </>
    )
}

export default HomePage