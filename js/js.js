var topmargin = 41;
var left = 21.5;
var sec = 9;
var ms = 99;
var timer;

function instructions() {
  document.getElementById('starIMGId').src = "imgs/instructions.jpg";
  document.getElementsByClassName('startButton')[0].hidden = true;
  document.getElementsByClassName('startButton2')[0].hidden = false;
}

function startGameButton() {
  document.getElementsByClassName('startButton2')[0].hidden = true;
  document.getElementById('starIMGId').src = "assets/forest.png" ;
  document.getElementById('idTruck').hidden = false;
  document.getElementById('idRanger').hidden = false;
  document.getElementById('idHealth').hidden = false;
  // 18 - 4
  var x = 41;
  var interval = setInterval(function () {
    x = forward(x);
    if (x < 18) {
      clearInterval(interval);
      document.getElementById('idTruck').src = "assets/truck-right.gif";
      x = 58;
      var interval2 = setInterval(function () {
        x = right(x);
        if (x > 67) {
          clearInterval(interval2);
          document.getElementById('idTruck').src = "assets/truck-up.gif";
          x = 18;
          var interval3 = setInterval(function () {
            x = forward(x);
            if (x < 4) {
              clearInterval(interval3);
              document.getElementById('idTruck').src = "assets/truck-right.gif";
              x = 67;
              var interval4 = setInterval(function () {
                x = right(x);
                if (x > 72) {
                  clearInterval(interval4);
                  document.getElementById("idTimer").hidden = false;
                  var health = document.getElementById("idHealth");
                  timer =  setInterval(function() {
                    if (ms === 0)
                    { ms = 99;
                      sec = sec - 1;
                    }else ms = ms - 1;
                    document.getElementById("idTimer").innerText = "" + sec + ":" + ms;
                    if (sec === 0 && ms === 0) {
                      health.value = 80;
                      clearInterval(timer);
                      checkLocation(1);
                    }
                  }, 10);
                }
              }, 100);
            }
          }, 100);
        }
      }, 100);

    };
  }, 100);

  document.addEventListener('keypress', logKey);

}

function forward(x) {
  var y = x - 0.5;
  document.getElementById('idTruck').style.marginTop = y + "%";
  return y;
}

function right(x) {
  var y = x + 0.5;
  document.getElementById('idTruck').style.marginLeft = y + "%";
  return y;
}

function logKey(e) {
  var ranger = document.getElementById('idRanger');
  if (e.code === "KeyA") {
    if (ranger.src.indexOf('assets/ranger-movingLeft.gif') == -1) {
      ranger.src = 'assets/ranger-movingLeft.gif';
    }
    left = left - 0.25;
    if(left > 6.5 && left < 88.5)
      ranger.style.marginLeft = left + "%";
  } else if (e.code === "KeyW") {
    if (ranger.src.indexOf('assets/ranger-upward.gif') == -1) {
      ranger.src = 'assets/ranger-upward.gif';
    }
    topmargin = topmargin - 0.25;
    if(topmargin <42.35 && topmargin > 0.35 )
      ranger.style.marginTop = topmargin + "%";
  } else if (e.code === "KeyD") {
    if (ranger.src.indexOf('assets/ranger-movingRight.gif') == -1) {
      ranger.src = 'assets/ranger-movingRight.gif';
    }
    left = left + 0.25;
    if(left > 6.5 && left < 88.5)
      ranger.style.marginLeft = left + "%";
  } else if (e.code === "KeyS") {
    if (ranger.src.indexOf('assets/ranger-forward.gif') == -1) {
      ranger.src = 'assets/ranger-forward.gif';
    }
    topmargin = topmargin + 0.25;
    if(topmargin <42.35 && topmargin > 0.35 )
      ranger.style.marginTop = topmargin + "%";
  }
  checkLocation(2);
}

function checkLocation(x) {
  if (x === 1) {
    document.getElementById('starIMGId').src = "assets/forestAfter.png";
    document.getElementById('idTruck').hidden = true;
    document.getElementById('idTimer').hidden = true;
  }
  if(x===2)
    if(topmargin < 6 && topmargin > 2 && left > 69 && left < 73) {
      clearInterval(timer);
      document.getElementById('idTruck').hidden = true;
      document.getElementById('idTimer').hidden = true;
    }

}
