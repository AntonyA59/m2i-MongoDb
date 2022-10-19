const result = db.EmbeddedEntity.find({
    "embedded.value": 0.2
})
printjson(result)