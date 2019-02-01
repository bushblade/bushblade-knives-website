import Typography from 'typography'
import moraga from 'typography-theme-moraga'
// kirkham.headerFontFamily = ['Philosopher', 'sans-serif']
moraga.scaleRatio = 1.6
moraga.headerWeight = '500'
moraga.overrideStyles = ({ adjustFontSizeTo, rhythm }, options, styles) => ({
  a: {
    color: 'rgb(51, 51, 51)',
    textDecoration: 'none',
    backgroundImage: 'none',
    borderBottom: '1px solid rgba(73, 75, 70, 0.95)',
    boxShadow: 'inset 0 -2px 0px 0px rgba(73, 75, 70, 0.95)',
  },
  'a:hover': {
    background: '#c2c2a3',
  },
  blockQuote: {
    borderRadius: '5px',
    borderLeft: '5px solid #c2c2a3',
    padding: '1rem',
    background: '#e9e9e9',
    fontStyle: 'italic',
  },
})

const typography = new Typography(moraga)

export default typography
