# MongoDB $in operator with ObjectId
This repository demonstrates an uncommon error related to the usage of the `$in` operator with ObjectIds in MongoDB queries.  Improperly using this operator can lead to incorrect query results.  The example illustrates the problem and provides the correct solution.

## Bug Description
The original code attempts to use the `$in` operator to query documents based on their ObjectIds. However, it passes the ObjectIds as strings instead of the actual ObjectId objects. This will result in no matching documents being found.

## Solution
The solution converts the string ObjectIds to proper ObjectId objects before using them in the query.  This ensures that the query correctly matches the documents.
