import React from 'react'
import response from './response'
import './result.css'
import Button from '../button'
import { useLocation, useNavigate } from 'react-router-dom'

const Result = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const retakeTest = () => {
    navigate('/quiz')
  }

  return <div className='result'>
    <div className='result-header'>Your Result</div>
    <div className='result-title'>{response[location.state.result].title}</div>
    <div className='result-content'>{response[location.state.result].description}</div>
    <div className='button-wrapper'>
      <Button label='Retake test' onClick={retakeTest} className='next' />
    </div>
  </div>
}

export default Result
