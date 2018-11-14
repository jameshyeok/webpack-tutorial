import _ from 'lodash';
import './style.css';
import Logo from './logo.png';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var logo = new Image();
  logo.src = Logo;

  element.appendChild(logo);

  return element;
}

document.body.appendChild(component());