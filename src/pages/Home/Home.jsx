import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeatureProducts from '../../components/FeaturedProducts/FeatureProducts'

const Home = () => {
  return (
    <div className='max-w-[100vw overflow-hidden] '>
      <Slider/>
      <FeatureProducts type="featured"/>
      <FeatureProducts type="trending"/>

    </div>
  )
}

export default Home