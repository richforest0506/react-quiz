import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import QuizPage from './pages/quiz'
import ResultPage from './pages/result'

const Routers = () => {
  return <Router>
    <Routes>
      <Route
        path='quiz'
        element={<QuizPage />}
      ></Route>
      <Route
        path='result'
        element={<ResultPage />}
      ></Route>
    </Routes>
  </Router>
}

export default Routers
