import React from 'react'
import { RiComputerLine } from "react-icons/ri";
import { LuAlertTriangle, LuWrench} from "react-icons/lu";
import { MdHistory } from "react-icons/md";
import './tabs.css'

const Tabs = () => {
  return (
    <div className='app__tabs'>
        <div className='app__tabs-appName'>
            <h4>tic-tac-toe</h4>
            <div className='app__tabs-appName-status'>
                <div>
                    <p>Deployed</p>
                </div>
            </div>
        </div>
        <ul className='app__tabs-link'>
            <li><RiComputerLine></RiComputerLine><p>Overview</p></li>
            <li><LuWrench></LuWrench><p>Environment Variables</p></li>
            <li><LuAlertTriangle></LuAlertTriangle><p>Alerts</p></li>
            <li><MdHistory></MdHistory><p>Event</p></li>
        </ul>
    </div>
  )
}

export default Tabs