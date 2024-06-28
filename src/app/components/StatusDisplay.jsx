import React from 'react'

const StatusDisplay = ({status}) => {
  const getColor = (status) => {
    let color = 'bg-slate-700'
    switch(status.toLowerCase()){
      case 'fixed':
        color = 'bg-green-600'
        return color
      case 'in progress':
        color = 'bg-yellow-600'
        return color
      case 'not started':
        color = 'bg-red-400'
        return color
        }
      return color;
  }
  return (
    <div>
       <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-white ${getColor(status)}`}>
            {status}
        </span> 
    </div>
  )
}

export default StatusDisplay