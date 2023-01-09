import React from 'react'

function Weather({ data : {weather,main,name} }) {
  
  const KtoC = (kelvin) => {
    return +((kelvin-273.15).toFixed(1));
  }
  
const image = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className='container'>
      <div className='content'>
        <div className='name'>
          <h2 style={{color:'#3d85c6'}} >City Name:</h2>
            {name}
        </div>
        <div className='temp' >
          <h2 style={{color:'#3d85c6'}} >Temp(°C):</h2>
          <img src={image} style={{width:'10%'}} alt='Weather...' /> {(KtoC(main.temp))}
        </div>
        <div className='description' >
          <h2 style={{color:'#3d85c6'}} >Climate:</h2>
            {weather[0].description}
        </div>
      </div>
    </div>
  )
}

export default Weather
