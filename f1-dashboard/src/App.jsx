import { Routes, Route } from 'react-router-dom'
import DriverStandings from './components/DriverStandings'
import Navbar from './components/Navbar'
import ConstructorStandings from './components/ConstructorStandings'
import PitStopVisualizer from './components/PitStopVisualizer'
import DriverPoints from './components/DriverPoints'

function App() {
  return (
    <div>
     <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<DriverStandings/>} />
        <Route path="/constructors" element={<ConstructorStandings/>} />
        <Route path="/pitstops" element={<PitStopVisualizer />} />
        <Route path="/DriverPoints" element={<DriverPoints />} />

      </Routes>
    </div>

    </div>
  )
}

export default App