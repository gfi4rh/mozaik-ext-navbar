import React from 'react'

class Forward extends React.Component {
  render(){
    const { width, height, color} = this.props;

    return(<svg width={width || "215"} height={height || "216"} viewBox="0 0 215 216" fill="none">
      <path d="M139.173 103.967C141.485 105.961 141.485 109.544 139.173 111.539L44.1563 193.506C40.9161 196.301 35.8903 193.999 35.8903 189.72V25.7859C35.8903 21.5066 40.9161 19.2047 44.1563 21.9999L139.173 103.967Z" fill={color || "#C4C4C4"}/>
      <path d="M210.611 104.461C212.923 106.456 212.923 110.039 210.611 112.033L115.595 194C112.355 196.795 107.329 194.493 107.329 190.214V26.2801C107.329 22.0009 112.355 19.699 115.595 22.4942L210.611 104.461Z" fill={color || "#C4C4C4"}/>
      </svg>);
  }
}

class Play extends React.Component {
  render(){
    const { width, height, color} = this.props;

    return(<svg width={width || "106"} height={height || "175"} viewBox="0 0 106 175" fill="none">
    <path d="M104.173 83.4669C106.485 85.4614 106.485 89.0443 104.173 91.0388L9.15628 173.006C5.9161 175.801 0.890305 173.499 0.890305 169.22V5.28585C0.890305 1.00662 5.91611 -1.29526 9.15629 1.49993L104.173 83.4669Z" fill={color || "#C4C4C4"}/>
    </svg>
    );
  }
}

class Pause extends React.Component {
  render(){
    const { width, height, color} = this.props;

    return(<svg width={width || "101"} height={height || "183"} viewBox="0 0 101 183" fill="none">
      <rect x="63" width="38" height="183" rx="5" fill={color || "#C4C4C4"}/>
      <rect width="38" height="183" rx="5" fill={color || "#C4C4C4"}/>
      </svg>);

  }
}

class Login extends React.Component {
  render(){
    const { width, height, color} = this.props;
    return(<svg width={width || "130"} height={height || "252"} viewBox="0 0 130 252" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M130 187C130 169.761 123.152 153.228 110.962 141.038C98.7721 128.848 82.2391 122 65 122C47.7609 122 31.2279 128.848 19.0381 141.038C6.8482 153.228 2.60303e-06 169.761 0 187L65 187H130Z" fill={color || "#C4C4C4"}/>
    <circle cx="65" cy="65" r="60" stroke={color || "#C4C4C4"} stroke-width="10"/>
    </svg>
    );
  }
}

class Logout extends React.Component {
  render(){
    const { width, height, color} = this.props;
    return(<svg width={width || "199"} height={height || "151"} viewBox="0 0 199 151" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M89.8338 33.3879C87.8011 31.5187 87.6561 28.3397 89.6758 26.4566C97.9626 18.7308 108.149 13.2843 119.239 10.6983C131.956 7.73276 145.272 8.66647 157.451 13.3778C169.63 18.089 180.108 26.3594 187.518 37.1113C194.929 47.8632 198.93 60.598 198.999 73.6563C199.068 86.7147 195.202 99.4911 187.906 110.321C180.609 121.15 170.219 129.531 158.091 134.371C145.962 139.211 132.657 140.285 119.909 137.454C108.792 134.986 98.549 129.647 90.181 122.009C88.1415 120.148 88.2529 116.967 90.2657 115.077L98.6429 107.209C100.656 105.318 103.803 105.443 105.912 107.226C111.272 111.757 117.669 114.94 124.568 116.473C133.101 118.367 142.007 117.648 150.125 114.409C158.243 111.169 165.197 105.56 170.081 98.3109C174.965 91.0622 177.553 82.5105 177.507 73.77C177.46 65.0295 174.783 56.5056 169.822 49.3089C164.862 42.1122 157.849 36.5765 149.697 33.4231C141.545 30.2696 132.632 29.6446 124.12 31.6296C117.237 33.2346 110.874 36.4858 105.562 41.0731C103.473 42.8781 100.326 43.0361 98.2937 41.167L89.8338 33.3879Z" fill={color || "#C4C4C4"}/>
    <path d="M4.77243 70.089C0.955573 74.0806 1.09729 80.4107 5.08896 84.2276L70.137 146.427C74.1287 150.244 80.4588 150.102 84.2756 146.11C88.0925 142.119 87.9508 135.789 83.9591 131.972L26.1386 76.6835L81.4268 18.863C85.2437 14.8713 85.102 8.54121 81.1103 4.72436C77.1186 0.907502 70.7885 1.04922 66.9717 5.04089L4.77243 70.089ZM145.776 64.0025L76.2637 65.5588L76.7113 85.5537L146.224 83.9975L145.776 64.0025ZM76.2637 65.5588L11.7762 67.0025L12.2238 86.9975L76.7113 85.5537L76.2637 65.5588Z" fill={color || "#C4C4C4"}/>
    </svg>
    );
  }
}

export {
  Forward,
  Pause,
  Play,
  Login,
  Logout,
}

