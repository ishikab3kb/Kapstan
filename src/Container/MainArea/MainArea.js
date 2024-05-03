import React from 'react'
import Header from '../../Components/Header/Header'
import './mainArea.css'
import Tabs from '../../Components/Tabs/Tabs'

const MainArea = () => {
  return (
    <div className='app__mainarea'>
        <Header></Header>
        <Tabs></Tabs>
    </div>
  )
}

export default MainArea