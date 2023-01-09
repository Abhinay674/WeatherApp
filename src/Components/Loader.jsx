import React from 'react'
import loader from './assets/loader.gif'

function Loader() {
  return (
    <>
      <img src={loader} alt='Loading...' style={{width:'100vw',height:'100vh',objectFit:'cover',display:'block',margin:'auto'}} />
    </>
  )
}

export default Loader
