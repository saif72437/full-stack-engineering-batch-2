import React from 'react'
import Card from '../components/Card'

function Home() {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <h2 className='text-4xl font-bold mb-6 mt-4'>Latest Blogs</h2>
      <p className='text-gray-600 mb-8'>Stay updated with the latest trends and insights from our blog.</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto p-4 py-8'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </div>
    </div>
  )
}

export default Home
