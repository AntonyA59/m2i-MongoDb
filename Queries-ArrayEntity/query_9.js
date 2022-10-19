const result = db.ArrayEntity.find({
    "$or": [
        { "name": "Array 2" },
        { "values": { "$in": [2] } }
    ]
})
printjson(result)