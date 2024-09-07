import React ,{useState}from 'react'
import He,{data} from "./header/Header"
import  "./App.scss"

export default function App() {
  return (
    <div className='header'>
      <He/>
      <h1>{data}</h1>
    </div>
  )
}
