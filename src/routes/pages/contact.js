import React from 'react';
  
const Contact = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <div
        style={{
          width: '50%'
        }}
      >
        <h1>Fala conosco</h1>
      </div>
      <div style={{
        width: '50%'
      }}>
      <h1>EGSTecnologia</h1>
      <iframe width="770" height="510" id="gmap_canvas" src="https://maps.google.com/maps?q=São Paulo, Avenida Angelina 389&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
    </div>
  );
};
  
export default Contact;