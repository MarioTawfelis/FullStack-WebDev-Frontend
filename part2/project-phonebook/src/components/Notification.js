import React from '../../../../part0/anecdotes/node_modules/@types/react/ts5.0'

const Notification = ({ message, type }) => {
    if(message === null){
      return null
    }
  
    if(type === 'success'){
      return (
        <div className='success'>
          {message}
        </div>
      )
    } else if (type === 'error') {
      return (
        <div className='error'>
          {message}
        </div>
      )
    }

  
  }

  export default Notification