import React, { Component } from 'react'

class Header extends Component {
  render() {
    return ( 
      
      <div className="fixed z-20 w-screen h-12 top-0 left-0 shadow bg-white">
        <div className="text-center h-full w-28 float-right mr-60">
        <button 
          className="mt-2 h-8 w-20 border-2 border-blue-400 rounded-xl cursor-pointer focus:bg-blue-100"
          onClick={this.handleLogin}
        >
          登 录
        </button>
        </div>
      </div>
    )
  }
}

export default Header