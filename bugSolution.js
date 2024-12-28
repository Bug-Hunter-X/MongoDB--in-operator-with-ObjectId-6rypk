```javascript
//Correct usage of $in operator with ObjectId
const { ObjectId } = require('mongodb');

db.collection('myCollection').find({ _id: { $in: [new ObjectId("654321"), new ObjectId("123456")] } });
```