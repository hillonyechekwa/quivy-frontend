import React from 'react'

type ErrorPageProps = {
    content: string
}

const ErrorPage = ({content}: ErrorPageProps) => {
  return (
    <div className='w-screen min-h-screen flex justify-center items-center'>
        {content}
    </div>
  )
}

export default ErrorPage