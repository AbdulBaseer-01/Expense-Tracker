import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Dashboard from './pages/dashboard/Dashboard'
import ProtectedRoute from './config/ProtectedRoute'
import Tasks from './pages/sub/Tasks'
import Expenses from './pages/sub/Expenses'
import Support from './pages/sub/Support'
import Reports from './pages/sub/Reports'

const App = () => {
  return (
    <Routes>
      <Route element={<Login/>} path='/' />
      <Route element={<ProtectedRoute><Dashboard/></ProtectedRoute>} path='/dashboard' />
      <Route element={<ProtectedRoute><Expenses/></ProtectedRoute>} path='/expenses' />
      <Route element={<ProtectedRoute><Tasks/></ProtectedRoute>} path='/tasks' />
      <Route element={<ProtectedRoute><Support/></ProtectedRoute>} path='/support' />
      <Route element={<ProtectedRoute><Reports/></ProtectedRoute>} path='/reports' />
    </Routes>
  )
}

export default App