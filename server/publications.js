import { Notes } from '../both';

Meteor.publish('notes.own', function() {
  return Notes.find({ownerId: this.userId});
});
