import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import glory from './cssRenderer'
import Sponser from './Sponser'

import Download from './Download'
import {
  textStyle,
  h1Style,
  anchorStyle
} from './globalStyle'

function App(props) {
  return (
    <main className={glory.virtual({
      backgroundColor: 'hsl(220, 13%, 18%)',
      '@media screen and (min-width: 910px)': {
        maxWidth: '910px',
        margin: 'auto'
      }
    })}>
      <section className={glory.virtual({
        padding: '0px 20px'
      })}>
      <h1 className={h1Style}>Example application styled with Glory</h1>
      <img className={glory.virtual({
        maxWidth: '300px',
        margin: '0 auto',
        width: "100%",
        display: "block"
      })} src="/logo.svg"/>
      <p className={textStyle}>
        This application demonstrated how Glory can be used. The source code of this example page can be found <a className={anchorStyle} href="https://github.com/winston0410/glory">here</a>.
      </p>
      </section>
    <Download />
    <Sponser />
    </main>
  )
}

export default App;
