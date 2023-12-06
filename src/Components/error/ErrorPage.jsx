import React from 'react'
export default function ErrorPage({ error }) {
  return (
    <>
      <div className='text-center mt-5'>
        <h1 className='text-danger fw-bold' style={{ fontSize: '50px' }}>
          ! Error
        </h1>
        <h2 className='notFoundText'>
          {error}
        </h2>
      </div>

    </>
  )
}
