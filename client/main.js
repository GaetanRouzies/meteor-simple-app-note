import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Notes } from '../both/collections.js';

import './main.html';
import './navbar/navbar.html';

Template.form_create_note.events({
  'submit .js-new-note'(event) {
    event.preventDefault();

    const title = event.target.title.value;
    const description = event.target.description.value;

    Meteor.call('insertNote', title, description);

    event.target.title.value = '';
    event.target.description.value = '';
  },
});

Template.list_note.helpers({
  notes(){
    return Notes.find({ownerId: Meteor.userId()}).fetch();
  },
});

Template.single_note.events({
  'click .js-note'(event, instance) {
    Modal.show('modal_edit_note', instance.data);
  }
});

Template.modal_edit_note.events({
  'submit .js-edit-note'(event, instance) {
    event.preventDefault();

    let title = event.target.title.value;
    let description = event.target.description.value;

    Meteor.call('updateNote', instance.data.note._id, title, description);
    Modal.hide();
  },
  'click .js-delete-note'(event, instance) {
    Meteor.call('removeNote', instance.data.note._id);
    Modal.hide();
  }
});
