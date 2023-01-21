import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
