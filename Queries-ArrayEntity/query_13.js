const result = db.ArrayEntity.find({
    values: { $size: 4 }
});

printjson(result);