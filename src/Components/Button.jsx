import React from 'react'

const Button = ({text}) => {
  return (
     <div className="hidden md:block">
            <button className="bg-mcdonaliz-yellow p-2.5 rounded-[10px] text-black font-medium">
              {text}
            </button>
          </div>
  )
}

export default Button
