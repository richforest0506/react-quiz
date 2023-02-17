import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/button'

const LandingPage = () => {
  const navigate = useNavigate()
  const handleStart = () => {
    navigate('/quiz')
  }
  return <div>
    <h1>Are you an introvert or an extrovert?</h1>
    <div><img src="https://www.psychologies.co.uk/wp-content/uploads/sites/3/2018/05/introvert_or_extrovert-1-scaled.jpg?w=1080" alt="title" /></div>
    <Button onClick={handleStart} label='Start quiz' />
  </div>
}

export default LandingPage
