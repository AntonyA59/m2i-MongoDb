const result = db.EmbeddedEntity.find({
    "embedded.value": 0.5,

    "extra.name": { "$exists": true }
})
printjson(result)