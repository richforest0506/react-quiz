import React from 'react'
import response from './response'
import './result.css'

const Result = () => {
  return <div className='result'>
    <div className='result-header'>Your Result</div>
    <div className='result-title'>{response[0].title}</div>
    <div className='result-content'>{response[0].description}</div>
  </div>
}

export default Result
