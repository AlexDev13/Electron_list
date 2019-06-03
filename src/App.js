import React from 'react';
import logo from './logo.svg';
import './App.css';
import Swal from 'sweetalert2'

function App() {
    function handleClick(e){
      Swal.fire({
       
        type: 'info',
        html:
          '<p> Go through registration</p> ' +
          '<div class="group">' +
          '<input type="text" required/>'+
          '<span class="bar"></span>'+
          '<label>Record book</label>'+
          '</div>'+
          '<div class="group">' +
          '<input type="text" required/>'+
          '<span class="bar"></span>'+
          '<label>Password</label>'+
          '</div>',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i> Cancel',
        cancelButtonAriaLabel: 'Thumbs down',
      })
    }
    
  return (
    <div className="App">
      <header className="App-header">
       
        <img src={logo} className="App-logo" alt="logo" />
     <form>
     <label>Electron book of attendance @PC IUK</label>

         <div class="group">
              <input type="text" required/>
              <span class="bar"></span>
              <label>Record book</label>
          </div>
          <div class="group">
          <input type="text" required/>
              <span class="bar"></span>
              <label>Password</label>
         </div>
         <a href="#" class="glo">Sign in</a>
         <div id="registration">
         {/* onClick={} */}
        <a href="#" onClick={handleClick} class="reg">Sign up</a>
      </div>
      </form>
       
      </header>
    </div>
  );
}

export default App;
