import './home/home.html';
import './navbar/navbar.html';

import  './home/home.js';
import  './navbar/navbar.js';

import { Notes } from '../both';

if (Meteor.isDevelopment) {
  window.Notes = Notes;
}
