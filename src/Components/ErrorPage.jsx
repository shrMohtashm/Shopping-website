import React from 'react'
export default function ErrorPage({ error }) {
  return (
    <>
      <div>Something went wrong</div>
      <div>{error.message}</div>
    </>
  )
}
