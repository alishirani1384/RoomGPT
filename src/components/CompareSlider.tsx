"use client"
import React from 'react'
import { ReactCompareSlider,ReactCompareSliderImage } from 'react-compare-slider'

function CompareSlider() {
  return (
    <ReactCompareSlider 
    itemOne={<ReactCompareSliderImage src='/input.jpg'/>}
    itemTwo={<ReactCompareSliderImage src='/output.png'/>}    
    />
  )
}

export default CompareSlider