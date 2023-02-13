import React from 'react'
import './buttons.css'

const Buttons = ({ onClickNext, onClickPrev, nextDisabled, prevDisabled, endReached }) => {
  return <div className='button-wrapper'>
    {!prevDisabled && <button className='prev' onClick={onClickPrev}>&lt; Previous</button>}
    <button
      onClick={onClickNext}
      disabled={nextDisabled}
      className={`next ${nextDisabled ? 'disabled' : ''} ${endReached ? 'end' : ''}`}
    >
      { `${endReached ? 'Finish test' : 'Next'} >` }
    </button>
  </div>
}

export default Buttons
