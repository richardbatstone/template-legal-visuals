import React from 'react'

import {FlexGrid, FlexGridItem} from 'baseui/flex-grid'
import {Paragraph3, Label3, H3} from 'baseui/typography'

import NAPlogo from './notaproduct2.png'
import Introduction from './Introduction'
import SliderInput from './SliderInput'
import DragVisual from './DragVisual'
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
      <FlexGridItem>
        <DragVisual data={sliderValue} setSliderValue={setSliderValue}/>
      </FlexGridItem>
      <FlexGridItem {...itemProps}>
      <H3>Yes and...</H3>
        <Paragraph3>
          You could:
          <ul>
              <li>Create a whole 'exit provisions' pack to inform deal sign-off</li>
              <li>Hook it up to your doc auto system so you get the visuals automatically</li>
              <li>Hook it up to your smart contract system to create a little legal dashboard</li>
              <li>Record the meta data using Akoma Ntoso</li>
              <li>Embed the meta data in a QR code so it is preserved on conversion to pdf</li>
          </ul>
        </Paragraph3>
        </FlexGridItem>
      <FlexGridItem {...itemProps}>
      <H3>Yes but...</H3>
        <Paragraph3>
            Hang on:
            <ul>
                <li>What's the actual user need that this is meeting? Will different circumstances be similar enough
                    to be addressed with a template?
                </li>
                <li>What happens when people start manipulating the image in paint?</li>
                <li>What happens when people export their Word doc to pdf?</li>
                <li>There's not enough consistency in the way meta data is parsed by different systems to make recording
                    semantic meta data viable.
                </li>
            </ul>
        </Paragraph3>
      </FlexGridItem>
      <FlexGridItem backgroundColor= 'mono300' display="flex" justifyContent="center">
        <Footer />
      </FlexGridItem>
    </FlexGrid>
  )
}