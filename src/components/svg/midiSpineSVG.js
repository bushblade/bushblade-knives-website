import React from 'react'
import { animated } from 'react-spring'

import PathAnimation from './pathAnimation'

const SVG = () => {
  return (
    <PathAnimation>
      {styles => (
        <animated.svg
          xmlns="http://www.w3.org/2000/svg"
          id="svg909"
          viewBox="0 0 196.10811 23.490253"
          style={styles}
        >
          <g transform="translate(-22.606 -214.798)" id="layer1">
            <g id="g1548" fill="none" strokeWidth="0.529">
              <path
                pathLength="100"
                id="path1538"
                d="M 22.870486,225.04288 H 210.76897 l 7.8956,1.5"
                stroke="#333"
              />
              <path
                pathLength="100"
                id="path1540"
                d="m 124.11854,224.66481 -6.00098,-7.21934 c -8.98301,-0.60032 -26.167296,-2.30614 -44.130904,-2.03042 -29.406233,0.45133 -29.720006,2.02649 -50.332942,-0.33631 -0.655893,-0.0957 -0.78622,0.21833 -0.783228,0.62121 v 9.34293"
                stroke="#333"
                strokeLinecap="square"
              />
              <path
                pathLength="100"
                d="M 22.870487,228.04288 H 210.76897 l 7.8956,-1.5"
                id="path1556"
                stroke="#333"
              />
              <path
                pathLength="100"
                d="m 124.11854,228.42095 -6.00098,7.21934 c -8.98301,0.60032 -26.167295,2.30614 -44.130903,2.03042 -29.406233,-0.45133 -29.720006,-2.02649 -50.332942,0.33631 -0.655893,0.0957 -0.78622,-0.21833 -0.783228,-0.62121 v -9.34293"
                id="path1558"
                stroke="#333"
                strokeLinecap="square"
              />
              <path
                pathLength="100"
                id="path1562"
                d="m 22.870486,225.04288 1e-6,3"
                stroke="#000"
              />
            </g>
          </g>
        </animated.svg>
      )}
    </PathAnimation>
  )
}
export default SVG
