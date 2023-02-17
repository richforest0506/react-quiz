import React from 'react'

const Button = (props) => {
  const { label, className, onClick, disabled = false, testId } = props
  return <button onClick={onClick} className={className} disabled={disabled} data-test={testId}>
    { label }
  </button>
}

export default Button
