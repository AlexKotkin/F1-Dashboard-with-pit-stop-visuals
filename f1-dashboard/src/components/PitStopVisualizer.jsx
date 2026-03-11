import {useState,useEffect,} from 'react'
import './PitStopVis.css'

function PitStopVisualizer(){
    const [races, setRaces] = useState([])
    const [selectedRace, setSelectedRace] =useState('')
    const [pitStops, setPitStops] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
       
        fetch('https://api.jolpi.ca/ergast/f1/current/races/')
        .then(res=>res.json())
        .then(data => {
        const raceList = data.MRData.RaceTable.Races
        setRaces(raceList)
      })
        

    },[])

    useEffect(()=>{
        // this is a guard. When the component first loads
        // selectedRace is empty, so we bail out immediately and 
        // don't fetch anything
        if (!selectedRace) return
        setIsLoading(true)
        setPitStops([])
    fetch(`https://api.jolpi.ca/ergast/f1/current/${selectedRace}/pitstops/`)
    // two thens used, one to parse the other to use the data 
      .then(res => res.json())
      .then(data => { const stops = data.MRData.RaceTable.Races[0].PitStops
        setPitStops(stops)
        setIsLoading(false)
      })
    //   This means "re-run every time selectedRace changes rerunning the useeffect
  }, [selectedRace])

    return (
       < div className={'pitStopVis'}>

        <h2>Pit Stop Stratagy</h2>
        <select 
            value={selectedRace}
            onChange={e=> setSelectedRace(e.target.value)}>
            <option value="">Select a race</option>
            {races.map(race=>( 
                <option key={race.round} value={race.round}>
                {race.raceName}
            </option>

            ))}
        </select>
        {isLoading && <p>Loading pit stops...</p>}
      {pitStops.length > 0 && (
        //  waiting for the url to update their pitstops grrrrr
        <p>{pitStops.length} pit stops loaded — chart coming next!</p>
      )}
       </div>
    )

    

}
export default PitStopVisualizer
