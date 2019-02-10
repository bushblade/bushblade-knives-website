import Typography from 'typography'
import moraga from 'typography-theme-moraga'
// kirkham.headerFontFamily = ['Philosopher', 'sans-serif']
// moraga.scaleRatio = 1.8
moraga.headerWeight = '500'
moraga.overrideStyles = ({ adjustFontSizeTo, rhythm }, options, styles) => ({
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: '#c2c2a3',
  },
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
    background: '#f1f1f1',
    fontStyle: 'italic',
    boxShadow: '0 3px 6px 1px rgba(0, 0, 0, 0.05)',
  },
  article: {
    borderRadius: '5px',
    borderTop: '5px solid #c2c2a3',
    padding: '1rem',
    background: '#f1f1f1',
    boxShadow: '0 3px 6px 1px rgba(0, 0, 0, 0.05)',
  },
  'h1,h2,h3,h4,h5,h6': { color: 'rgb(51, 51, 51)' },
})

const typography = new Typography(moraga)

export default typography
