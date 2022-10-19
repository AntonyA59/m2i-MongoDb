const result = db.ArrayEntity.find({

    "values": { "$gte": 0 }
});

printjson(result);