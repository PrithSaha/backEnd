import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"BabyPink",
        feelsLike:99 ,
        humidity:95 ,
        temp: 99 ,
        tempMax: 99,
        tempMin:99 ,
        weather:"pinkish",
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