(function() {
  'use strict';
  let stopButton = document.getElementById('stopButton');
  let stopLight = document.getElementById('stopLight');

  let slowButton = document.getElementById('slowButton');
  let slowLight = document.getElementById('slowLight');

  let goButton = document.getElementById('goButton');
  let goLight = document.getElementById('goLight');

  function logEventEnter() {
    console.log(`Entered ${event.target.textContent} button`);
  }

  function logEventLeave() {
    console.log(`Left ${event.target.textContent} button`);
  }

  // Stop red light
  function stopButFunc() {
    // console.log('button clicked');
    stopLight.classList.toggle("stop");
  }
  stopButton.addEventListener("click", stopButFunc);
  stopButton.addEventListener("mouseenter",logEventEnter);
  stopButton.addEventListener("mouseleave",logEventLeave);


  // Slow yellow light
  function slowButFunc() {
    // console.log('button clicked');
    slowLight.classList.toggle("slow");
  }
  slowButton.addEventListener("click", slowButFunc);
  slowButton.addEventListener("mouseenter",logEventEnter);
  slowButton.addEventListener("mouseleave",logEventLeave);


  // Go green light
  function goButFunc() {
    // console.log('button clicked');
    goLight.classList.toggle("go");
  }
  goButton.addEventListener("click", goButFunc);
  goButton.addEventListener("mouseenter",logEventEnter);
  goButton.addEventListener("mouseleave",logEventLeave);



})();
