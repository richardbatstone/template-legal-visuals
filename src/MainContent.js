import React from 'react'

import {FlexGrid, FlexGridItem} from 'baseui/flex-grid'
import {Paragraph3, Label3} from 'baseui/typography'

import NAPlogo from './notaproduct2.png'
import Introduction from './Introduction'
import SliderInput from './SliderInput'
import DragVisual from './DragVisual'
import Discussion from './Discussion'
import Footer from './Footer'


export default function MainContent() {

  const itemProps = {
    alignItems: 'center',
    justifyContent: 'center',
  }

  const [sliderValue, setSliderValue] = React.useState({
    propHolding: [70],
    dragTrigger: [35],
    svguri: ""
  })

  return(
    <FlexGrid
      flexGridColumnCount={1}
      flexGridColumnGap="scale800"
      flexGridRowGap="scale800"
      margin="auto"
      width="60%"
    >
      <FlexGridItem justifyContent="center" display="flex">
        <img src={NAPlogo} alt="This is not a product"/>
      </FlexGridItem>
      <FlexGridItem {...itemProps}>
        <Introduction />
      </FlexGridItem>
      <FlexGridItem {...itemProps}>
        <FlexGrid
          flexGridColumnCount={2}
          alignSelf="center"
          alignItems="center"
          width="100%">
          <FlexGridItem {...itemProps}>
            <Label3>PE Fund's Holding</Label3>
            <Paragraph3>         
               Use the slider to set the size (%) of the PE Fund's stake. For simplicity, 
               all other shareholders are lumped together as 'other' and we ignore things 
               like A and B shares.
          </Paragraph3>
          </FlexGridItem>
          <FlexGridItem {...itemProps}>
            <SliderInput sliderName="propHolding" data={sliderValue.propHolding} setSliderValue={setSliderValue} />
          </FlexGridItem>
        </FlexGrid>
      </FlexGridItem>
      <FlexGridItem {...itemProps}>
        <FlexGrid
          flexGridColumnCount={2}
          alignSelf="center"
          alignItems="center"
          width="100%">
          <FlexGridItem {...itemProps}>
            <Label3>Drag trigger</Label3>
            <Paragraph3>         
              Use the slider to set the proportion of shares that the Fund would need to sell 
              before its 'drag rights' apply.
          </Paragraph3>
          </FlexGridItem>
          <FlexGridItem {...itemProps}>
            <SliderInput sliderName="dragTrigger" data={sliderValue.dragTrigger} setSliderValue={setSliderValue} />
          </FlexGridItem>
        </FlexGrid>   
      </FlexGridItem>
      <FlexGridItem>
        <DragVisual data={sliderValue} setSliderValue={setSliderValue}/>
      </FlexGridItem>
      <FlexGridItem>
        <Discussion />
      </FlexGridItem>
      <FlexGridItem backgroundColor= 'mono300' display="flex" justifyContent="center">
        <Footer />
      </FlexGridItem>
    </FlexGrid>
  )
}