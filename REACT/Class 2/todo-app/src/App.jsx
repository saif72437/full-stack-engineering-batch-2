import React, { useEffect, useState } from 'react'
import useApiCall from './hooks/useApiCall';

function App() {

const {todo, loading} =  useApiCall()

console.log(todo);

if (loading) {
  return <div>loading</div>
}


  
  return (
    <div>
        {data.username}
    </div>
  )
}

export default App


