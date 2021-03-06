import _ from 'lodash';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = 'Second Div';
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());