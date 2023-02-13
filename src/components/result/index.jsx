import React from 'react'
import response from './response'

const Result = () => {
  return <div>
    <div>Your Result</div>
    <div>{response[0].title}</div>
    <div>{response[0].description}</div>
  </div>
}

export default Result
