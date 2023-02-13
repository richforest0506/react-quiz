import React, { useState } from 'react'
import Group from '../group'
// import Buttons from '../buttons'
import { useNavigate } from 'react-router-dom'
import Button from '../button'
import questions from './questions'

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(-1)
  const [answerList, setAnswerList] = useState([])
  const navigate = useNavigate()

  const mostFrequent = (arr) => {
    const n = arr.length
    // Insert all elements in hash.
    const hash = new Map()
    for (let i = 0; i < n; i++) {
      if (hash.has(arr[i])) { hash.set(arr[i], hash.get(arr[i]) + 1) } else { hash.set(arr[i], 1) }
    }

    // find the max frequency
    let maxCount = 0; let res = -1
    hash.forEach((value, key) => {
      if (maxCount < value) {
        res = key
        maxCount = value
      }
    })

    return res
  }

  const calculateResult = () => {
    // implement calculation logic
    const result = mostFrequent(answerList)
    navigate('/result', { state: { result } })
  }

  const onClickNext = () => {
    // when user reached the last question, then go to calculation page
    if (activeQuestion === questions.length - 1) {
      calculateResult()
    } else {
      const currentList = answerList
      currentList[activeQuestion] = selectedAnswer
      // if user already answered, then recover it
      if (currentList[activeQuestion + 1]) setSelectedAnswer(currentList[activeQuestion + 1])
      // else, set it as -1
      else setSelectedAnswer(-1)
      // save answer
      setAnswerList(currentList)
      // show next question
      setActiveQuestion(activeQuestion + 1)
    }
  }
  const onClickPrev = () => {
    // doing nothing when there is no previous question
    if (activeQuestion > 0) {
      // show saved answer
      setSelectedAnswer(answerList[activeQuestion - 1])
      // show prev question
      setActiveQuestion(activeQuestion - 1)
    }
  }

  return <div>
    <Group question={questions[activeQuestion]} length={questions.length} setSelectedAnswer={setSelectedAnswer} selectedAnswer={selectedAnswer} ></Group>
    <div className='button-wrapper'>
      {!(activeQuestion === 0) && <Button className='prev' onClick={onClickPrev} label='&lt; Previous' disabled={false} />}
      <Button className={`next ${selectedAnswer < 0 ? 'disabled' : ''} ${activeQuestion === questions.length - 1 ? 'end' : ''}`} disabled={selectedAnswer < 0} onClick={onClickNext} label={`${activeQuestion === questions.length - 1 ? 'Finish test' : 'Next'} >`} />
    </div>
  </div>
}

export default Quiz
