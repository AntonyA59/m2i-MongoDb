const result = db.SimpleEntity.find({
    "$or": [
        {
            "price": {
                "$gt": 5,
                "$lt": 25
            }
        },
        {
            "$or": [
                { "name": "Simple 2" },
                { "name": "Simple 3" }
            ],
        }]
})
printjson(result)
