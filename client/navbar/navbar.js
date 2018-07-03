import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './navbar.html';

Template.navbar.events({
  'click .js-logout'(event){
    event.preventDefault();
    Meteor.logout();
  }
});
