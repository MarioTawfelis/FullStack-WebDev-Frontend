import React from '../../../../part0/anecdotes/node_modules/@types/react/ts5.0'

const Notification = ({ message }) => {
    if(message === null){
      return null
    }
  
    return (
      <div className='error'>
        {message}
      </div>
    )
  
  }

  export default Notification