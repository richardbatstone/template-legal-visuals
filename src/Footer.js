import React from 'react'
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid'
import {Paragraph3} from 'baseui/typography'
import { StyledLink } from "baseui/link";

export default function Footer() {
    const itemProps = {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
      }

    return (
        <>
        <FlexGrid
          flexGridColumnCount={3}
          alignSelf="center"
          alignItems="center"
          width="60%"
          >
          <FlexGridItem {...itemProps}>
            <Paragraph3>         
               <StyledLink href="https://github.com/richardbatstone">GitHub</StyledLink>
          </Paragraph3>
          </FlexGridItem>
          <FlexGridItem {...itemProps}>
            <Paragraph3>         
               <StyledLink href="https://www.twitter.com/richardbatston1">Twitter</StyledLink>
          </Paragraph3>
          </FlexGridItem>
          <FlexGridItem {...itemProps}>
            <Paragraph3>         
               <StyledLink href="https://richardbatstone.github.io/">Blog</StyledLink>
          </Paragraph3>
          </FlexGridItem>
        </FlexGrid>
        </>
    )
}