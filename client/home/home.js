import { Template } from 'meteor/templating';
import { Notes } from '../../both';

Template.form_create_note.events({
  'submit .js-new-note'(event) {
    event.preventDefault();

    const title = event.target.title.value;
    const description = event.target.description.value;

    Meteor.call('insertNote', {title: title, description: description});

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

    Meteor.call('updateNote', {id: instance.data.note._id, title: title, description: description});
    Modal.hide();
  },
  'click .js-delete-note'(event, instance) {
    Meteor.call('removeNote', instance.data.note._id);
    Modal.hide();
  }
});
