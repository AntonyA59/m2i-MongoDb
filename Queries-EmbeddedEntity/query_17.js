const result = db.EmbeddedEntity.find({
    "embedded.value": 0.5,
    "name": { "$exists": true }
})
printjson(result)