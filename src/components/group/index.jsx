import React from 'react'
import './group.css'

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const Group = (props) => {
  const { question, length, setSelectedAnswer, selectedAnswer } = props
  const onAnswerClick = (e) => {
    setSelectedAnswer(parseInt(e.target.id))
  }

  return <div className='group-wrapper'>
    <div className='question-id'>Question { question.id }/{length}</div>
    <div className='question-name'>{ question.question }</div>
    <div>
      { question.answers?.map((val, index) => {
        return <label
          className={`answers ${selectedAnswer === index ? 'selected' : ''}`}
          key={index}
          id={index}
          onClick={onAnswerClick}
          data-test="question-group"
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
