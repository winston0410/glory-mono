import React from 'react'
import {
  Code
} from './StyledCode'
import glory from './cssRenderer'
import {
  textStyle,
  h2Style,
  anchorStyle,
  codeStyle,
  containerStyle
} from './globalStyle'

function Download (){
  return (
    <div className={containerStyle}>
    <h2 className={`${h2Style} ${glory.virtual({
      gridColumn: '1/-1'
    })}`}>Download</h2>
    <section>
      <p className={textStyle}>To install Glory, use the following command:</p>
      <Code className={codeStyle}>npm install glory</Code>
      <p className={textStyle}>If you are using Yarn:</p>
      <Code className={codeStyle}>yarn add glory</Code>
    </section>
    <section>
      <div>
      <div className={textStyle}>
      This section uses <Code className={codeStyle}>glory.virtual()</Code> for styling.
      </div>
      <p className={textStyle}>
      Open devtool and inspect the generated class name and styling to experience the power of Glory.
      </p>
      </div>
    </section>
    </div>
  )
}

export default Download
