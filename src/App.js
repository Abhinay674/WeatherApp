import React from 'react'
import { useState } from 'react'
import Loader from './Components/Loader'
import Weather from './Components/Weather';

function App() {

  const APIKEY ='4f0c5f237b428cfe861db9dc06e5875a';
  const [text,setText] = useState('');
  const [citys,setCitys] = useState({});
  const [loading,setLoading] = useState(false);

const fetchCitys = async () => {
    setLoading(true);
    const response = await fetch(`/data/2.5/weather?q=${text}&appid=${APIKEY}`);
    const data = await response.json();
    setCitys(data);
    setLoading(false);
  }

const handleChange =(e) => {
    setText(e.target.value);
  }

  const handleSubmit = async (e) => {
    if(text){
      fetchCitys();
      setText('');
    } else {
      alert('Please Enter a Book Title/Author');
    }
    e.preventDefault();
  }

  return loading ? (<Loader />) : (<>
    <header>
      <form onSubmit={handleSubmit} >
        <input onChange={handleChange} className='input' type='text' value={text} placeholder='Enter city name' />
      </form>
    </header>
    <Weather data={citys} />
  </>);
}

export default App


