const ObjectId = require('mongodb').ObjectId;

module.exports = {
    db: null,

    setDb: function(db) {
        this.db = db;
    },

    getAll: async function(sort, asc) {

        if(["album", "artist"].includes(sort) === false) {
            sort = "artist";
        }

        let direction = 1;
        if(asc === false) {
            direction = -1;
        }

        let result = await db.collection("levyt").find({})
            .sort(sort, direction).toArray();
        return result;
    },

    getSingle: async function(id) {
        let query = {_id: ObjectId(id)};
        let result = await db.collection("levyt").find(query).toArray();
        return result;
    },

    search: async function(q) {
        let re = new RegExp(q);
        let query = { $or: [
            {artist: {$regex: re, $options: 'i'}},
            {composer: {$regex: re, $options: 'i'}},
            {album: {$regex: re, $options: 'i'}}]};
        return await db.collection("levyt").find(query).toArray();
    },

    postNew: async function(album) {
        return await db.collection("levyt").insertOne(album.getData());
    },

    delete: async function(id) {
        return await db.collection("levyt").deleteOne({_id: ObjectId(id)});
    }
}
