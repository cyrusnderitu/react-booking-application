import React from 'react'
import Header from '../../components/Header/Header'
import Featured from '../../components/Featured/Featured'
import Property from '../../components/Property/Property'
import Rated from '../../components/Rated/Rated'
import Mail from '../../components/Mail/Mail'
import Footer from '../../components/Footer/Footer'
import './home.css'

const Home = () => {
  return (
    <div>
        <Header />
        <div className="featuredSection">
          <Featured />
        </div>
        <div className="propertySection">
            <Property />
        </div>
        <div className="ratedSection">
            <Rated />
        </div>
        <div className="mailSection">
            <Mail />
        </div>
        <Footer />
    </div>
  )
}

export default Home
