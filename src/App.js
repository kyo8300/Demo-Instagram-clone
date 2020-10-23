import React from 'react'
import './App.css'
import Profile from './components/Profile'
import PostNav from './components/PostNav'
import Posts from './components/Posts'

function App() {
  return (
    <div className="container">
      <Profile />
      <PostNav />
      <Posts />
    </div>
  )
}

export default App
