import React from 'react'

class Forward extends React.Component {
  render(){
    const { width, height, color} = this.props;

    return(<svg width={width || "2.5vmin"} height={height || "2.5vmin"} viewBox="0 0 200 200" fill="none">
    <rect width="200" height="200" fill="none"/>
    <path d="M192.703 102.007C195.357 104.008 195.357 107.992 192.703 109.993L98.0096 181.369C94.715 183.852 90 181.502 90 177.376V34.6237C90 30.498 94.715 28.1476 98.0096 30.631L192.703 102.007Z" fill={color || "#C4C4C4"}/>
    <path d="M141.703 102.007C144.357 104.008 144.357 107.992 141.703 109.993L47.0096 181.369C43.715 183.852 39 181.502 39 177.376V34.6237C39 30.498 43.715 28.1476 47.0096 30.631L141.703 102.007Z" fill={color || "#C4C4C4"}/>
    </svg>
    );
  }
}

class Play extends React.Component {
  render(){
    const { width, height, color} = this.props;

    return(<svg width={width || "2.5vmin"} height={height || "2.5vmin"} viewBox="0 0 200 200" fill="none">
    <rect width="200" height="200" fill="none"/>
    <path d="M166.853 100.038C169.453 102.039 169.453 105.961 166.853 107.962L72.05 180.942C68.7621 183.473 64 181.129 64 176.98V31.0205C64 26.8713 68.7621 24.5275 72.05 27.0584L166.853 100.038Z" fill={color || "#C4C4C4"}/>
    </svg>
    );
  }
}

class Pause extends React.Component {
  render(){
    const { width, height, color} = this.props;

    return(<svg width={width || "2.5vmin"} height={height || "2.5vmin"} viewBox="0 0 200 200" fill="none">
    <rect width="200" height="200" fill="none"/>
    <rect x="115" y="24" width="38" height="153" rx="5" fill={color || "#C4C4C4"}/>
    <rect x="47" y="24" width="38" height="153" rx="5" fill={color || "#C4C4C4"}/>
    </svg>
    );

  }
}



class Login extends React.Component {
  render(){
    const { width, height, color} = this.props;
    return(<svg width={width || "2.5vmin"} height={height || "2.5vmin"} viewBox="0 0 200 200" fill="none">
    <g clip-path="url(#clip0)">
    <rect width="200" height="200" fill="none"/>
    <path d="M165 189C165 171.761 158.152 155.228 145.962 143.038C133.772 130.848 117.239 124 100 124C82.7609 124 66.2279 130.848 54.0381 143.038C41.8482 155.228 35 171.761 35 189L100 189H165Z" fill={color ||"#C4C4C4"}/>
    <circle cx="100" cy="76" r="55" stroke={color ||"#C4C4C4"} stroke-width="20"/>
    </g>
    <defs>
    <clipPath id="clip0">
    <rect width="200" height="200" fill="none"/>
    </clipPath>
    </defs>
    </svg>
    );
  }
}

class Logout extends React.Component {
  render(){
    const { width, height, color} = this.props;
    return(<svg width={width || "2.5vmin"} height={height || "2.5vmin"} viewBox="0 0 200 200" fill="none">
    <rect width="200" height="200" fill="none"/>
    <path d="M90.5611 56.4368C88.6509 54.5857 88.5108 51.5473 90.3972 49.672C98.7338 41.3842 109.024 35.5456 120.239 32.7897C132.956 29.6645 146.272 30.6485 158.451 35.6135C170.63 40.5785 181.108 49.2942 188.518 60.625C195.929 71.9558 199.93 85.3764 199.999 99.1378C200.068 112.899 196.202 126.364 188.906 137.776C181.609 149.189 171.219 158.021 159.091 163.122C146.962 168.222 133.657 169.354 120.909 166.371C109.668 163.74 99.3202 158.017 90.9013 149.824C88.9952 147.969 89.1032 144.929 90.9935 143.058L99.5429 134.596C101.578 132.581 104.872 132.709 107.016 134.607C112.355 139.333 118.714 142.655 125.568 144.259C134.101 146.256 143.007 145.498 151.125 142.085C159.243 138.671 166.197 132.759 171.081 125.12C175.965 117.481 178.553 108.469 178.507 99.2576C178.46 90.0465 175.783 81.0636 170.822 73.4794C165.862 65.8952 158.849 60.0614 150.697 56.7382C142.545 53.4149 133.632 52.7563 125.12 54.8481C118.28 56.5289 111.954 59.9226 106.663 64.7086C104.539 66.6298 101.248 66.7925 99.1909 64.7995L90.5611 56.4368Z" fill={color || "#C4C4C4"}/>
    <path d="M5.78072 95.7589C1.9595 99.7553 2.09398 106.086 6.08109 109.898L71.0547 172.022C75.0418 175.834 81.3716 175.685 85.1929 171.688C89.0141 167.692 88.8796 161.362 84.8925 157.549L27.1382 102.328L82.4895 44.4379C86.3107 40.4414 86.1763 34.1112 82.1892 30.299C78.2021 26.4867 71.8722 26.6361 68.051 30.6325L5.78072 95.7589ZM146.788 89.5023L77.2751 91.1423L77.6999 111.138L147.212 109.498L146.788 89.5023ZM77.2751 91.1423L12.7876 92.6638L13.2124 112.659L77.6999 111.138L77.2751 91.1423Z" fill={color || "#C4C4C4"}/>
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

