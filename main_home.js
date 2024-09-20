isSmartPhone();
function isSmartPhone() {
    if (window.matchMedia && window.matchMedia('(min-device-width: 600px)').matches) {
      if(window.matchMedia && window.matchMedia('(max-device-width: 950px)').matches){
        console.log("screen2")
        loadingHTML();
      }
      else{
        console.log("screen1")
          document.getElementById('css').innerHTML = '<p>aaaaaaaa</p>';
      }
    } else {
      console.log("toosmall");
        document.getElementById('css').innerHTML = '<p>jhsdfkjdsf</p>';
    }
  }
  function loadingHTML() {
    document.getElementById('css').innerHTML = '<link rel="stylesheet" href="smartphone.css" type="text/css">';
  }
