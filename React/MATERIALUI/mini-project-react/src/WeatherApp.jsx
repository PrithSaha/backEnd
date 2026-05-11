import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"delhi",
        feelsLike: 34.54,
        humidity: 43,
        temp: 33.05 ,
        tempMax: 33.05,
        tempMin: 33.05,
        weather:"haze",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h4>Weather app by PrithwiRajS.</h4>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}