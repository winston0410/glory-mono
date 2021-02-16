import React from 'react'
import glory from './cssRenderer'

function Code ({ children, ...attrs }){
  return (
    <pre {...attrs}>
      <code>
        {children}
      </code>
    </pre>
  )
}

// const StyledCode = glory.jsx(Code, (_) => ({
//   color: 'red'
// }))

// const StyledCode = Code

export {
  Code
}
