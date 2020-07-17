import React from 'react'
import {Paragraph3, H1, H2} from 'baseui/typography'

export default function Introduction() {
    return (
        <>
        <H1>What this is</H1>
        <Paragraph3>
          This is an attempt to illustrate two ideas that I seem to be forever 
          writing on post-it notes to be stuck on the 'ideas car park' board. 
          </Paragraph3>  
          <Paragraph3>
          The two ideas are: 
          <ul>
            <li>Help people communicate common legal provisions by 
          giving them templates for visualisations</li>
            <li>Make those visuals 'machine readable' to avoid ambiguity and drive knowledge capture</li>
          </ul>
          (No claim that these are original ideas - they're just things I struggle to get out of my head)
        </Paragraph3>
        <H2>Example</H2>
        <Paragraph3>
          So, below is a simplistic visualisation of a common exit provision (the 'drag right') found 
          in private equity (PE) deals. 
          </Paragraph3>
          <Paragraph3>
          You tailor the template by inputting the parameters of 
          your deal. When you are done, you download the image and stick it in 
          whatever document you want. 
          </Paragraph3>
          <Paragraph3>
          The image 'meta data' includes a semantic 
          description and the parameters that you chose so they can be recovered 
          later if needed.
        </Paragraph3>
        </>
    )
}