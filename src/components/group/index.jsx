import React from 'react'
import './group.css'

const chars = ['A', 'B', 'C', 'D']

const Group = ({ question, length, setSelectedAnswer, selectedAnswer }) => {
  const onAnswerClick = (e) => {
    setSelectedAnswer(e.target.id)
    console.log('e.target.id', e.target.id)
  }

  return <div className='group-wrapper'>
    <div className='question-id'>Question { question.id }/{length}</div>
    <div className='question-name'>{ question.question }</div>
    <div>
      { question.answers?.map((val, index) => {
        return <label
          className={`answers ${selectedAnswer === index.toString() ? 'selected' : ''}`}
          key={index}
          id={index}
          onClick={onAnswerClick}
        >
          <span
            className='label'
          >
            {chars[index]}
          </span>
          <span
            className='content'
          >
            {val.content}
          </span>
        </label>
      }) }
    </div>
  </div>
}

export default Group
