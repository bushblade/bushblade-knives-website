import React from 'react'
import { animated } from 'react-spring'

import PathAnimation from './pathAnimation'

const SVG = () => {
  return (
    <PathAnimation>
      {styles => (
        <animated.svg
          xmlns="http://www.w3.org/2000/svg"
          id="svg842"
          viewBox="0 0 208.79437 23.714577"
          style={styles}
        >
          <g transform="translate(-33.004 -177.295)" id="layer1">
            <g id="g1429" stroke="#333">
              <g id="g1460">
                <g id="g1447" fill="none" strokeWidth="0.529">
                  <path
                    pathLength="100"
                    d="m 33.270244,188.15222 103.354146,-1 h 97.8378 l 7.26598,2"
                    id="path1413"
                  />
                  <path
                    pathLength="100"
                    d="m 33.270245,187.15222 v -8.25194 c -0.03477,-0.99417 0.470871,-1.34234 1.107298,-1.34076 29.93419,5.36127 40.50273,-1.97605 96.874687,2.17336 l 5.37216,7.41934"
                    id="path1425"
                  />
                </g>
              </g>
              <g transform="matrix(1 0 0 -1 0 378.304)" id="g1468">
                <g id="g1466" fill="none" strokeWidth="0.529">
                  <path
                    pathLength="100"
                    id="path1462"
                    d="m 33.270244,188.15222 103.354146,-1 h 97.8378 l 7.26598,2"
                  />
                  <path
                    pathLength="100"
                    id="path1464"
                    d="m 33.270245,187.15222 v -8.25194 c -0.03477,-0.99417 0.470871,-1.34234 1.107298,-1.34076 29.93419,5.36127 40.50273,-1.97605 96.874687,2.17336 l 5.37216,7.41934"
                  />
                </g>
              </g>
              <path
                pathLength="100"
                id="path1470"
                d="m 33.270245,187.15222 v 4"
                fill="none"
                strokeWidth="0.529"
              />
            </g>
          </g>
        </animated.svg>
      )}
    </PathAnimation>
  )
}
export default SVG
