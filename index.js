(function () {
  'use strict';
  // Set variables to get HTML elements by Id
  let stopButton = document.getElementById('stopButton');
  let stopLight = document.getElementById('stopLight');

  let slowButton = document.getElementById('slowButton');
  let slowLight = document.getElementById('slowLight');

  let goButton = document.getElementById('goButton');
  let goLight = document.getElementById('goLight');


  // Event functions to log message when entering/leaving buttons
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
    if (stopLight.classList.contains('stop')) {
      console.log(`${event.target.textContent} bulb on`);
    } else  {
      console.log(`${event.target.textContent} bulb off`);
    }
  }
  stopButton.addEventListener("click", stopButFunc);
  stopButton.addEventListener("mouseenter",logEventEnter);
  stopButton.addEventListener("mouseleave",logEventLeave);


  // Slow yellow light
  function slowButFunc() {
    // console.log('button clicked');
    slowLight.classList.toggle("slow");
    if (slowLight.classList.contains('slow')) {
      console.log(`${event.target.textContent} bulb on`);
    } else {
      console.log(`${event.target.textContent} bulb off`);
    }
  }
  slowButton.addEventListener("click", slowButFunc);
  slowButton.addEventListener("mouseenter",logEventEnter);
  slowButton.addEventListener("mouseleave",logEventLeave);


  // Go green light
  function goButFunc() {
    // console.log('button clicked');
    goLight.classList.toggle("go");
    if (goLight.classList.contains('go')) {
      console.log(`${event.target.textContent} bulb on`);
    } else {
      console.log(`${event.target.textContent} bulb off`);
    }
  }
  goButton.addEventListener("click", goButFunc);
  goButton.addEventListener("mouseenter",logEventEnter);
  goButton.addEventListener("mouseleave",logEventLeave);


})();
