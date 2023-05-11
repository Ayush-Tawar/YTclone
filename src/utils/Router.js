import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAuth } from './AuthProvider'
import Login from '../components/Login'
import { ChannelDetail, Feed, SearchFeed, VideoDetail } from '../components'
function Router() {

  const { isLoggedIn } = useAuth()

  const publicRoutes = (
    <>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/login" element={<Login />} />
    </>
  )
  const privateRoutes = (
    <>
      <Route exact path="/" element={<Feed />} />
      <Route exact path="/video/:id" element={<VideoDetail />} />
      <Route exact path="/channel/:id" element={<ChannelDetail />} />
      <Route exact path="/search/:searchTerm" element={<SearchFeed />} />
    </>
  )

  console.log(isLoggedIn)
  return (
    
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? privateRoutes : publicRoutes}
      </Routes>
    </BrowserRouter>



  )
}

export default Router