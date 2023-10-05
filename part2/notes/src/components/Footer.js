import React from '../../../../part0/anecdotes/node_modules/@types/react/ts5.0'

const Footer = () => {
    const footerStyle = {
      color: 'green',
      fontStyle: 'italic',
      fontSize: 16
    }
    return (
      <div style={footerStyle}>
        <br />
        <em>Note app, Built by Mario Tawfelis </em>
      </div>
    )
  }

  export default Footer