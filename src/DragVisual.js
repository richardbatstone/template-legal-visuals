import React, { Component } from 'react'
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid'
import { Button } from "baseui/button"
import { StyledLink } from "baseui/link";

export default class DemoSVG extends Component {
  constructor(props) {
      super(props)
      this.svgTotal = React.createRef()
      this.updateDataUrl = this.updateDataUrl.bind(this)
      }

  componentDidMount() {
    const svg = this.svgTotal.current
    let svgAsXML = new XMLSerializer().serializeToString(svg)
    const svguri = "data:image/svg+xml," + encodeURIComponent(svgAsXML)
    this.props.setSliderValue(prevData => {
       return {...prevData, svguri: svguri}
    })
  }

  updateDataUrl() {
    const svg = this.svgTotal.current
    let svgAsXML = new XMLSerializer().serializeToString(svg)
    const svguri = "data:image/svg+xml," + encodeURIComponent(svgAsXML)
    this.props.setSliderValue(prevData => {
      return {...prevData,  svguri: svguri}
    })
  }

  render () {

    const inputData = this.props.data

    const num_first = Number(inputData.propHolding)
    const num_second = 100 - Number(inputData.propHolding)
    const num_drag = Number(inputData.dragTrigger)

    const dim_prop = 38.365 + (num_first * 1.138)
    const dim_drag = 38.365 + (num_drag * 1.138)

    const dim_first = "M38.365 118.406H"+String(dim_prop)+"V127.66600000000001H38.365z"
    const dim_second = "M"+String(dim_prop)+" 118.406H152.135V127.66600000000001H"+String(dim_prop)+"z"
    const dim_third = "M38.365 132.958H"+String(dim_drag)+"V142.218H38.365z"

    const dim_text_first = 38.365/2 + dim_prop/2
    const dim_text_second = 152.135/2 +dim_prop/2
    const dim_text_third = dim_drag + 5

    const text_first = String(num_first)+"%"
    const text_second = String(num_second)+"%"
    const text_drag = String(num_drag)+"%"

    const description = "Visualisation of drag rights - proportion of shares that must be transferred before drag rights apply. Visualisation represents a fund shareholding of "+text_first+" with a drag right that applies on a transfer of "+text_drag+" of shares in the company."
    
    return (
      <FlexGrid
      flexGridColumnCount={1}
      flexGridColumnGap="scale800"
      flexGridRowGap="scale800"
      margin="auto"
      width="100%"
      >
      <FlexGridItem justifyContent="center" display="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="590.747" //547.747
        height="199.67"
        version="1.1"
        viewBox="0 0 170.925 52.829" //"0 0 144.925 52.829"
        ref={this.svgTotal}
      >
        <title>Exit provisions - drag rights</title>
        <desc>{description}</desc>
        <g fillOpacity="1" stroke="none" transform="translate(-7.21 -113.202)">
          <path
            fill="#6b7a8f"
            d={dim_second} //this is OO holdings
          ></path>
          <path
            fill="#f7c331"
            d={dim_first} //this is FO main
          ></path>
          <path
            fill="#f7882f"
            d={dim_third} //this is DT main
          ></path>
          <path
            fill="#f7882f"
            d="M75.406 162.063H79.375V166.03199999999998H75.406z" //this is DT key
          ></path>
          <path
            fill="#f7c331"
            d="M75.406 148.833H79.375V152.802H75.406z" //this is FO key
          ></path>
          <path
            fill="#6b7a8f"
            d="M75.406 155.448H79.375V159.417H75.406z" //this is OO key
          ></path>
          <text
            xmlSpace="preserve"
            style={{
              lineHeight: "1.25",
            }}
            x="16.583"
            y="124.36"
            fill="#000"
            strokeWidth="0.265"
            fontFamily="sans-serif"
            fontSize="4.233"
          >
            <tspan
              x="16.583"
              y="124.36"
              strokeWidth="0.265"
              fontSize="4.233"
            >
              Holding:
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              lineHeight: "1.25",
            }}
            x="6.797"
            y="138.329"
            fill="#000"
            strokeWidth="0.265"
            fontFamily="sans-serif"
            fontSize="4.233"
          >
            <tspan
              x="6.797"
              y="138.329"
              strokeWidth="0.265"
              fontSize="4.233"
            >
              Drag trigger:
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              lineHeight: "1.25",
            }}
            x={dim_text_second}
            y="116.395"
            fill="#000"
            strokeWidth="0.265"
            fontFamily="sans-serif"
            fontSize="4.233"
          >
            <tspan
              x={dim_text_second}
              y="116.395"
              strokeWidth="0.265"
              fontSize="4.233"
            >
              {text_second}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              lineHeight: "1.25",
            }}
            x={dim_text_third}
            y="138.486"
            fill="#000"
            strokeWidth="0.265"
            fontFamily="sans-serif"
            fontSize="4.233"
          >
            <tspan
              x={dim_text_third}
              y="138.486"
              strokeWidth="0.265"
              fontSize="4.233"
            >
              &gt;{text_drag}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              lineHeight: "1.25",
            }}
            x="50.386"
            y="151.58"
            fill="#000"
            strokeWidth="0.265"
            fontFamily="sans-serif"
            fontSize="2.822"
          >
            <tspan
              x="50.386"
              y="151.58"
              strokeWidth="0.265"
              fontSize="2.822"
            >
              Fund ownership
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              lineHeight: "1.25",
            }}
            x="49.21"
            y="158.228"
            fill="#000"
            strokeWidth="0.265"
            fontFamily="sans-serif"
            fontSize="2.822"
          >
            <tspan
              x="49.21"
              y="158.228"
              strokeWidth="0.265"
              fontSize="2.822"
            >
              Other ownership
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              lineHeight: "1.25",
            }}
            x="43.377"
            y="164.79"
            fill="#000"
            strokeWidth="0.265"
            fontFamily="sans-serif"
            fontSize="2.822"
          >
            <tspan
              x="43.377"
              y="164.79"
              strokeWidth="0.265"
              fontSize="2.822"
            >
              Drag transfer trigger
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              lineHeight: "1.25",
            }}
            x={dim_text_first}
            y="116.342"
            fill="#000"
            strokeWidth="0.265"
            fontFamily="sans-serif"
            fontSize="4.233"
          >
            <tspan
              x={dim_text_first}
              y="116.342"
              strokeWidth="0.265"
              fontSize="4.233"
            >
              {text_first}
            </tspan>
          </text>
        </g>
      </svg>
      </FlexGridItem>
      <FlexGridItem>
        <StyledLink href={this.props.data.svguri} download="Drag trigger.svg">
        <Button onClick={this.updateDataUrl}>
          Download
        </Button>
        </StyledLink>
      </FlexGridItem>
    </FlexGrid>
  )
}
}
