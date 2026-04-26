import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import SunnyIcon from '@mui/icons-material/Sunny'; 


export default function InfoBox({info}){
    const Init_url="https://images.unsplash.com/photo-1641970304222-b2b332808a4b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Hot_url="https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const Cold_url="https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const Rain_url="https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    return(
    <div className="InfoBox">
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
         <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? Rain_url:(info.temp>12? Hot_url: Cold_url) }
        title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}&nbsp;{info.humidity>80? <UmbrellaIcon/>:(info.temp>12? <SunnyIcon/>: <AcUnitIcon/>) }
          
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>Temperature={info.temp}&deg;C</div>
          <div>Humidity={info.humidity}</div>
          <div>Minimun Temperature={info.tempMin}&deg;C</div>
          <div>Maximun Temperature={info.tempMax}&deg;C</div>
          <div>FeelsLike={info.feelsLike}&deg;C</div>
          <div>The weather feels like <i>{info.weather}</i></div>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>)
}