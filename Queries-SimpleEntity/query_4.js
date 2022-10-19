const result = db.SimpleEntity.find({
    "price": { "$gt": 10 }
})
printjson(result)
