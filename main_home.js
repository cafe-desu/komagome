function loading_ipad_HTML() {
    document.getElementById('css').innerHTML = '<link rel="stylesheet" href="Ipad.css" type="text/css">';
  }
  function loading_smartphone_HTML() {
    document.getElementById('css').innerHTML = '<link rel="stylesheet" href="smartphone.css" type="text/css">';
  }

  function front_over() {
    document.getElementById("shoukai1").innerHTML = '<div class ="shoukai1"><p>高校教師ｼﾏﾀﾞｶｽﾞｷは白の組織の取引を見つけ謎のくすりによって高校生に戻ってしまった。米粉町の駒込高校に編入して、高校生探偵として働き始めた彼の前である事件が・・・コンナンはこの事件を解決できるのか</p></div>'
    document.getElementById("img3-2").innerHTML = "<div></div>"
    document.getElementById("img4-2").innerHTML = '<div></div>'
    document.getElementById("front").innerHTML = '<h1 class = "front"><a href= "https://www.komagome.ed.jp/" class = "komagome" >駒込高校</a></h1><h1 class = "front1">1-8 公式ホームページ 玉蘭祭   企画特設サイト<div class = "sen"></div></h1>';
 }
function isSmartPhone() {
    if (window.matchMedia && window.matchMedia('(min-device-width: 600px)').matches) {
      if(window.matchMedia && window.matchMedia('(max-device-width: 950px)').matches){
        console.log("screen2")
        loading_ipad_HTML();
        
      }else{
        console.log("screen1")
      }
    } else {
      console.log("toosmall");
      loading_smartphone_HTML()
      front_over()
    }
  }
  isSmartPhone();
 
