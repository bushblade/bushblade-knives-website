import React from 'react'
import { useSpring, animated, config } from 'react-spring'

const SVG = () => {
  const pathSpring = useSpring({
    opacity: 1,
    strokeDashoffset: 0,
    from: { strokeDashoffset: 100, opacity: 0 },
    config: config.molasses,
  })

  const boltSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
    config: config.molasses,
  })

  return (
    <svg xmlns="http://www.w3.svg" id="svg913" viewBox="0 0 209.46542 29.52039">
      <g
        transform="translate(293.057 -112.735)"
        id="layer1"
        fill="none"
        stroke="#333"
        strokeWidth="0.529"
      >
        <animated.path
          style={{ strokeDasharray: 100, ...pathSpring }}
          pathLength="100"
          d="m -284.44435,141.83932 c -9.01175,-7.97612 -13.48416,-23.90814 1.06336,-26.48587 21.12181,-2.44303 7.72969,0.57022 52.25469,-1.90774 13.89591,-0.53762 25.68737,-0.50434 38.44341,-0.33975 12.35275,0.17214 24.71247,0.33787 37.04802,1.01155 10.8676,0.59351 21.74268,1.31633 32.54214,2.66855 6.55334,0.82056 13.08689,1.87924 19.53689,3.29952 4.581071,1.00876 9.148203,2.15557 13.576921,3.70165 1.986129,0.69335 5.799042,2.48999 5.799042,2.48999 0,0 -4.610802,2.47715 -7.023044,3.48108 -4.220094,1.75635 -8.555138,3.27604 -12.979299,4.42525 -3.72805,0.96839 -7.5428,1.62424 -11.36924,2.06529 -5.56951,0.64197 -11.19492,0.65355 -16.79829,0.83759 -6.68198,0.21947 -20.05423,0.31778 -20.05423,0.31778 l -22.76937,-0.38641 -9.2159,-0.11766 -2.71018,0.0214 c -3.17717,0.006 -5.38461,1.64909 -7.10336,3.30095 0,0 -2.12145,-0.71582 -3.78829,-1.31528 -0.92525,-0.33372 -1.85633,-0.62133 -2.78922,-0.86688 -0.93288,-0.24557 -1.86755,-0.44908 -2.79993,-0.61463 -0.9324,-0.16553 -1.86252,-0.2931 -2.7863,-0.38675 -0.92378,-0.0936 -1.84123,-0.15341 -2.74826,-0.18332 -0.90705,-0.0299 -1.8037,-0.03 -2.68588,-0.004 -0.88218,0.0257 -1.74991,0.0772 -2.5991,0.15033 -0.8492,0.0731 -1.68133,0.15804 -2.48796,0.28053 -1.88066,0.28559 -3.16657,0.44935 -4.65341,0.61404 -0.76735,0.085 -1.53498,0.17635 -2.30286,0.26395 -0.76789,0.0876 -1.536,0.1716 -2.30425,0.24237 -0.76827,0.0708 -1.53666,0.12835 -2.30511,0.16306 -3.36987,0.15223 -6.74356,0.235 -10.11684,0.24985 -2.65068,0.0116 -5.30248,-0.0221 -7.95115,-0.12634 -2.59408,-0.10215 -5.17803,-0.0663 -7.77092,-0.1953 -2.76969,-0.13782 -5.54527,-0.47777 -8.31575,-0.59816 -2.10944,-0.0917 -5.09987,0.0888 -7.21125,0.077 -4.20122,0.36007 -9.53395,1.49115 -14.62508,3.86675 z"
          id="outline"
        />
        <animated.path
          style={{ strokeDasharray: 100, ...pathSpring }}
          pathLength="100"
          d="m -189.26897,137.19738 -0.0147,-24.04382"
          id="guard"
        />
        <animated.path
          style={boltSpring}
          pathLength="100"
          d="m -201.86907,124.97658 c -0.007,0.9128 -0.75255,1.64713 -1.66534,1.64018 -0.9128,-0.007 -1.64713,-0.75255 -1.64019,-1.66534 0.007,-0.9128 0.75255,-1.64714 1.66535,-1.64019 0.9128,0.007 1.64713,0.75256 1.64018,1.66535 z"
          id="path2997"
          opacity="0.96"
        />
        <animated.path
          style={boltSpring}
          pathLength="100"
          d="m -199.99412,124.99086 c -0.0148,1.94829 -1.60627,3.51568 -3.55457,3.50085 -1.9483,-0.0148 -3.51568,-1.60627 -3.50085,-3.55457 0.0148,-1.9483 1.60626,-3.51569 3.55457,-3.50085 1.9483,0.0148 3.51568,1.60626 3.50085,3.55457 z"
          id="bolt-front"
          opacity="0.96"
        />
        <animated.path
          style={boltSpring}
          pathLength="100"
          d="m -253.44031,125.60816 c -0.007,0.9128 -0.75255,1.64713 -1.66534,1.64018 -0.9128,-0.007 -1.64713,-0.75255 -1.64019,-1.66534 0.007,-0.9128 0.75255,-1.64714 1.66535,-1.64019 0.9128,0.007 1.64713,0.75256 1.64018,1.66535 z"
          id="path2997-7"
          opacity="0.96"
        />
        <animated.path
          style={boltSpring}
          pathLength="100"
          d="m -251.56536,125.62244 c -0.0148,1.94829 -1.60627,3.51568 -3.55457,3.50085 -1.9483,-0.0148 -3.51568,-1.60627 -3.50085,-3.55457 0.0148,-1.9483 1.60626,-3.51569 3.55457,-3.50085 1.9483,0.0148 3.51568,1.60626 3.50085,3.55457 z"
          id="bolt-rear"
          opacity="0.96"
        />
        <animated.path
          style={boltSpring}
          pathLength="100"
          d="m -276.73778,125.9914 c -0.0148,1.9483 -1.60627,3.51569 -3.55457,3.50085 -1.9483,-0.0148 -3.51568,-1.60627 -3.50085,-3.55456 0.0148,-1.9483 1.60626,-3.51569 3.55456,-3.50086 1.94831,0.0148 3.5157,1.60627 3.50086,3.55457 z"
          id="thong-tube"
          opacity="0.96"
        />
        <animated.path
          style={{ strokeDasharray: 100, ...pathSpring }}
          pathLength="100"
          d="m -92.077223,122.97798 c -4.220093,1.75635 -6.98596,2.77736 -10.610687,3.73863 -3.72307,0.98734 -7.54281,1.62423 -11.36924,2.06529 -5.56951,0.64197 -11.19492,0.65355 -16.79829,0.83758 -6.68197,0.21947 -20.05422,0.31779 -20.05422,0.31779 l -22.76937,-0.38642 -9.21591,-0.11768 c -0.70088,-0.009 -2.4937,0.0517 -2.82256,1.39633 l -1.15336,6.34354"
          id="bevel"
        />
      </g>
    </svg>
  )
}
export default SVG
