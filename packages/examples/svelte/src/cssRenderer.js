import { create } from 'glory'
import virtualAddon from 'glory/virtual'
import prefixerAddon from 'glory/prefixer'

const glory = create({})
virtualAddon(glory)
prefixerAddon(glory)

export default glory
