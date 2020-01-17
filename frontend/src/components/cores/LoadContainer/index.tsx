import React from 'react'
import {LoadSpinner} from 'components/cores/LoadSpinner'

interface ILoadContainer {
  isLoading: boolean,
  children: React.ReactNode,
}

export const LoadContainer = ({isLoading, children}: ILoadContainer) => {
  const output = isLoading ? <LoadSpinner /> : <>{children}</>

  return (
    <>
      {output}
    </>
  )
}

export default LoadContainer
