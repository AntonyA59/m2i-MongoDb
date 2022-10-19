const result = db.ArrayEntity.find({

    "values": { "$gt": { "$all": [2, 2] } }
});

printjson(result);