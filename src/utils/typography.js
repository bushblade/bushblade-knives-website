import Typography from 'typography'
import moraga from 'typography-theme-moraga'
// kirkham.headerFontFamily = ['Philosopher', 'sans-serif']
moraga.scaleRatio = 1.6
moraga.headerWeight = '500'
moraga.overrideStyles = ({ adjustFontSizeTo, rhythm }, options, styles) => ({
  a: {
    textDecoration: 'none',
    backgroundImage: 'none',
  },
})

const typography = new Typography(moraga)

export default typography
