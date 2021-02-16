import React, { useState, useEffect } from 'react';
import glory from './cssRenderer'
import {
  Code
} from './StyledCode'
import {
  textStyle,
  h2Style,
  codeStyle,
  anchorStyle,
  containerStyle
} from './globalStyle'

const StyledText = ({children}) => {
  return (
    <p className={textStyle}>
    {children}
    </p>
  )
}

const StyledCode = ({children}) => {
  return (
    <Code className={codeStyle}>
    {children}
    </Code>
  )
}

const StyledAnchor = ({children, ...attrs}) => {
  return (
    <a className={anchorStyle} {...attrs}>
    {children}
    </a>
  )
}

const StyledImage = ({children, ...attrs}) => {
  return (
    <img className={glory.virtual({
      maxWidth: '300px',
      width: "100%",
      display: "block"
    })} {...attrs} />
  )
}

function Sponser(props) {
  return (
    <div className={containerStyle}>
    <h2 className={`${h2Style} ${glory.virtual({
      gridColumn: '1/-1'
    })}`}>Sponser</h2>
    <div>
    <StyledText>This application is sponsered by <StyledAnchor href="https://tecky.io/en/">Tecky Academy</StyledAnchor>.</StyledText>
    <a href="https://tecky.io/en/">
    <StyledImage src="/logo_title.png"/>
    </a>
    </div>
    <StyledText>This section uses <StyledCode>glory.jsx()</StyledCode> for styling.</StyledText>
    </div>
  )
}

export default Sponser;
