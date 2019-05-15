import Typography from 'typography'
import moraga from 'typography-theme-moraga'

moraga.headerWeight = '500'
moraga.overrideStyles = ({ adjustFontSizeTo, rhythm }, options, styles) => ({
  '*': {
    boxSizing: 'border-box',
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
  'h1,h2,h3,h4,h5,h6': { color: 'rgb(51, 51, 51)' },
})

const typography = new Typography(moraga)

export default typography
