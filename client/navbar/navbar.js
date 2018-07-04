import { Template } from 'meteor/templating';

Template.navbar.events({
  'click .js-logout'(event){
    event.preventDefault();
    Meteor.logout();
  }
});
