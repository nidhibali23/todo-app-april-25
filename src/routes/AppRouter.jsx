import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import CreateTask from '../pages/CreateTask'
import TaskList from '../pages/TaskList'
import Profile from '../pages/Profile'
import Navbar from '../components/Navbar'
import Login from '../auth/Login'
import Register from '../auth/Register'
import { AuthProvider } from '../auth/AuthContext'
import ProtectedRoute from '../auth/ProtectedRoute'


const AppRouter = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Navbar />

                <Routes>
                    <Route path='/' element={<Navigate to="/login" />}></Route>

                    <Route path='/' element={<Home />}>
                        <Route path='login' element={<Login />}></Route>
                        <Route path='register' element={<Register />}></Route>
                    </Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/task-list' element={<ProtectedRoute><TaskList /></ProtectedRoute>}></Route>
                    <Route path='/create-task' element={<ProtectedRoute><CreateTask /></ProtectedRoute>}></Route>
                    <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route>

                </Routes>
            </AuthProvider>
        </BrowserRouter >
    )
}

export default AppRouter;