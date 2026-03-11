import { useState, useEffect} from 'react'

function ConstructorStandings () {
    const [ constructors, setConstructors] = useState([])
    const [loading, setLoading]= useState(true)
    const [visible, setVisible] = useState(false)       
    useEffect(()=>{
        setTimeout(()=>{
            fetch('https://api.jolpi.ca/ergast/f1/2026/constructorstandings/')
            .then(res=> res.json())
            .then(data => {
                const teams = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
                setConstructors(teams)
                setLoading(false)
               
                setTimeout (()=> setVisible(true), 50)
            })
        },1000)
    
    },[])

if(loading){
    return <p>
        Loading constructors...
        </p>

}

return (
   <div className={`standings-container ${visible ? 'fade-in' : ''}`}>

        <h2>Constructor Standings</h2>
        {constructors.map(constructor=> (
            <p key ={constructor.position}>
                {constructor.position}. {constructor.Constructor.name} — {constructor.points} pts
            </p>
        ))}

    </div>
)
}

export default ConstructorStandings