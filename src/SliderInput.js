import React from "react"
import { Slider } from "baseui/slider"

export default function SliderInput(props) {
  const sliderName = props.sliderName
  return (
    <Slider
      value={props.data}
      onChange={({ value }) => value && props.setSliderValue(prevState => { return {
        ...prevState, [sliderName]: value}})}
      onFinalChange={({ value }) => console.log(value)}
    />
  )
}