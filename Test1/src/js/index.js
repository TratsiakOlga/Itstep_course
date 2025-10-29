import _ from 'lodash';
import '../scss/index.scss';
//import showAlert from './alert';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());

  showAlert('Hello!!!');