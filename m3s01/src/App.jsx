import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { Outlet } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <AuthContextProvider>
      <Outlet />
    </AuthContextProvider>
  )
}

export default App
