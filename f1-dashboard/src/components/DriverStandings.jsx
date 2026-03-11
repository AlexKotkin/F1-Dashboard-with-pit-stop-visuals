import {useState, useEffect} from 'react'
import './DriverStandings.css'



function DriverStandings() {

    const [ standings, setStandings]= useState([])
    const [ loading, setLoading] =useState(true)
    const [ visible, setVisible] =useState(false)

    useEffect( ()=>{
        setTimeout(()=> {
             fetch('https://api.jolpi.ca/ergast/f1/2026/driverstandings/')
         .then(res=> res.json())
        .then(data=> {

            const drivers = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
            setStandings(drivers)
            setLoading (false)
            setTimeout(()=> setVisible(true), 500)
        })
        },1000)

    }, [])
        
       

    if(loading){
        return <p>
            Loading standings...
        </p>
    }

  return (
    <div className={`standings-container ${visible ? 'fade-in' : ''}`}>
      <h2>Driver Standings</h2>
      {standings.map(driver => (
         <p key={driver.position}>
          {driver.position}. {driver.Driver.familyName} — {driver.points} pts
        </p>
      ))}

    </div>
  )
}

export default DriverStandings