const _ = require ('lodash'); //- если используется Nodejs
const $ = require ('jquery'); //- если используется Nodejs
const alertModule = require('./alert.js');

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());

  // $("body").css({backgroundColor: 'blue'});

  alertModule.myFunction('Это алерт!!!')