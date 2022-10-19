const result = db.SimpleEntity.find({
    "$or": [
        { "name": "Simple 2" },
        { "name": "Simple 3" }
    ],
    "price": { "$gt": 10 }
})
printjson(result)
