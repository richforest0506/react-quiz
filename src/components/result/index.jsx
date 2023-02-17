import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import response from './response'
import './result.css'
import Button from '../button'

const Result = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const retakeTest = () => {
    navigate('/quiz')
  }

  return <div className='result'>
    <div className='result-header' data-test='result-header'>Your Result</div>
    <div className='result-title' data-test='result-title'>{response[location.state.result].title}</div>
    <div className='result-content' data-test='result-content'>{response[location.state.result].description}</div>
    <div className='button-wrapper'>
      <Button label='Retake test' onClick={retakeTest} className='next' testId="retake-button" />
    </div>
  </div>
}

export default Result
