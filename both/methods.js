import { Notes } from './collections.js';

Meteor.methods({
  insertNote(title, description){
    Notes.insert({
      ownerId: this.userId,
      title: title,
      description: description,
      createdAt: new Date(),
    });

  },
  updateNote(noteId, title, description){
    Notes.update({_id: noteId},
    {
      $set:
      {
        title: title,
        description: description
      }
    });

    if(Meteor.isServer){
      console.log('Ceci est spécial server');
    }
    if (Meteor.isClient) {
      console.log('Ceci est spécial client');
    }
  },
  removeNote(noteId){
    Notes.remove({_id: noteId});
  }
});
