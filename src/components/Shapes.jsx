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

export {
  Forward,
  Pause,
  Play
}