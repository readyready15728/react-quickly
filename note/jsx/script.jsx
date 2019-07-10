/* global ReactDOM */

// Turning this into an IIFE to avoid polluting the namespace
(function () {
  let secondsLeft = 5;
  
  let interval = setInterval(() => {
    if (secondsLeft === 0) {
      ReactDOM.render(
        <div>Note was removed after {secondsLeft} seconds.</div>,
        document.getElementById('content')
      );
    } else {
      ReactDOM.render(
        <Note secondsLeft={secondsLeft}/>,
        document.getElementById('content')
      );
    }
  }, 1000);
})();