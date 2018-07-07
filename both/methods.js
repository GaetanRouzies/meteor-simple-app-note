import { Notes, NoteUpsertSchema } from './collections.js';
import { check } from 'meteor/check';

Meteor.methods({
  insertNote(note){
    NoteUpsertSchema.validate(note);

    Notes.insert({
      ownerId: this.userId,
      title: note.title,
      description: note.description,
      createdAt: new Date(),
    });

  },
  updateNote(note){
    NoteUpsertSchema.validate(note);

    Notes.update({_id: note.id},
    {
      $set:
      {
        title: note.title,
        description: note.description
      }
    });
  },
  removeNote(noteId){
    check(noteId, String);

    Notes.remove({_id: noteId});
  }
});
