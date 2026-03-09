import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Main from './layouts/main.layout'
import Browse from './pages/browse'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route element={<Main/>}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/browse" element={<Browse/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App