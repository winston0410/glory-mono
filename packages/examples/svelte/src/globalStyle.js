import glory from './cssRenderer'

const baseSize = 20

const textStyle = glory.virtual({
  lineHeight: '1.5',
  marginTop: '0px',
  marginBottom: '1rem',
  fontSize: `${baseSize}px`,
  color: 'hsl(220, 14%, 71%)'
})

const h2Style = glory.virtual({
  lineHeight: '1.5',
  marginTop: '0px',
  fontSize: `${baseSize * 1.618}px`,
  color: 'hsl(207, 82%, 66%)'
})

const h1Style = glory.virtual({
  lineHeight: '1.5',
  marginTop: '0px',
  fontSize: `${baseSize * 1.618 * 1.618}px`,
  color: 'hsl(39, 67%, 69%)'
})

const anchorStyle = glory.virtual({
  lineHeight: '1.5',
  marginTop: '0px',
  marginBottom: '1rem',
  fontSize: `${baseSize}px`,
  color: 'hsl(286, 60%, 67%)'
})

const codeStyle = glory.virtual({
  lineHeight: '1.5',
  marginTop: '0px',
  marginBottom: '1rem',
  fontSize: `${baseSize}px`,
  color: 'hsl( 95, 38%, 62%)',
  textDecoration: 'none',
  display: 'inline-block'
})

const containerStyle = glory.virtual({
  display: 'grid',
  alignItems: 'start',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  backgroundColor: 'hsl(220, 13%, 18%)',
  padding: '0px 20px',
  gridColumnGap: '30px'
})

export {
  textStyle,
  h2Style,
  h1Style,
  anchorStyle,
  codeStyle,
  containerStyle,
  baseSize
}
