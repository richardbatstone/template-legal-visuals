import React from 'react'
import {Paragraph3, H3} from 'baseui/typography'
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid'

export default function Discussion() {
    return (
        <>
        <FlexGrid
          flexGridColumnCount={2}
          width="100%"
          >
        <FlexGridItem>
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
        <FlexGridItem>
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
        </FlexGrid>
        </>
    )
}