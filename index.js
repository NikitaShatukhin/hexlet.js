import _ from 'lodash';
function myFunction() {
    console.log("hello, Hexlet!");
    console.log(_.last(['one','two']));
}

export default myFunction;

import myFunction from './src/index.js';

myFunction();
