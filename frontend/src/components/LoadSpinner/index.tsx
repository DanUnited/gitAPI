import React from 'react'

import './styles.css'

export const LoadSpinner = () => {
  return (
    <div className='loadSpinner'>
      <img src={'/img/load-spinner.svg'} className="spinnerImg" alt="loading..." />
    </div>
  )
}

export default LoadSpinner
