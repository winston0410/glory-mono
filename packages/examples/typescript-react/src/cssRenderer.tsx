import React from 'react'
import { create } from 'glory'
import virtualAddon from 'glory/virtual'
import prefixerAddon from 'glory/prefixer'
import jsxAddon from 'glory/jsx'

const glory = create({
  h: React.createElement
})
virtualAddon(glory)
jsxAddon(glory)
prefixerAddon(glory)

export default glory
