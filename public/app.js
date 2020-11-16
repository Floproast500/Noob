'use strict'

// This is my first single line comment.

/*Here's my first
multi-line
comment. */

// console.log('This code is no longer active')

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date')
selectElement.innerHTML = formatDate;

console.log('Here\'s my first hidden message');
