import React from 'react'
import './button.css'

const Button = ({ label, className, onClick, disabled = false }) => {
  return <button onClick={onClick} className={className} disabled={disabled}>
    { label }
  </button>
}

export default Button
