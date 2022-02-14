import React from 'react'
import Faq from '../components/Faq'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <NewsLetter/>
        <Faq/>
    </div>
  )
}

export default HomePage