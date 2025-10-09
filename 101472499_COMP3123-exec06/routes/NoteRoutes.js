const noteModel = require('../models/NotesModel.js');
const express = require('express');
const noteRoutes = express.Router();

noteRoutes.post('/notes', (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({ message: "Note content can not be empty" });
    }

    const data = req.body.content;
    const note = new noteModel({
        noteTitle: data.noteTitle,
        noteDescription: data.noteDescription,
        priority: data.priority,
        dateAdded: data.dateAdded,
        dateUpdated: data.dateUpdated
    });

    note.save()
        .then(result => res.send(result))
        .catch(err => res.status(500).send({ message: err.message }));
});

noteRoutes.get('/notes', (req, res) => {
    noteModel.find()
        .then(notes => res.send(notes))
        .catch(err => res.status(500).send({ message: err.message }));
});

noteRoutes.get('/notes/:noteId', (req, res) => {
    noteModel.findById(req.params.noteId)
        .then(note => {
            if (!note) {
                return res.status(404).send({ message: "Note not found" });
            }
            res.send(note);
        })
        .catch(err => res.status(500).send({ message: err.message }));
});

noteRoutes.put('/notes/:noteId', (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({ message: "Note content can not be empty" });
    }

    const data = req.body.content;

    noteModel.findByIdAndUpdate(
        req.params.noteId,
        {
            noteTitle: data.noteTitle,
            noteDescription: data.noteDescription,
            priority: data.priority,
            dateUpdated: new Date()
        },
        { new: true } 
    )
        .then(note => {
            if (!note) {
                return res.status(404).send({ message: "Note not found" });
            }
            res.send(note);
        })
        .catch(err => res.status(500).send({ message: err.message }));
});

noteRoutes.delete('/notes/:noteId', (req, res) => {
    noteModel.findByIdAndDelete(req.params.noteId)
        .then(note => {
            if (!note) {
                return res.status(404).send({ message: "Note not found" });
            }
            res.send({ message: "Note deleted successfully!" });
        })
        .catch(err => res.status(500).send({ message: err.message }));
});

module.exports = noteRoutes;
