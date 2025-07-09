import { MongoClient } from 'mongodb';

const conn = async () => {
  let database = new MongoClient(process.env.MONGO_URI)
  await database.connect(error => error)
  let db = database.db(process.env.MONGO_DB)
  let collections = await db.listCollections().toArray((error, collections) => collections)
  if (collections.length < 1) {
    console.log(`[ERROR!]: Required Database not found!`)
    database.close()
    return process.exit(1)
  }
  let [required, exists] = [process.env.MONGO_COLLECTIONS.split(','), collections.map(coll => coll.name)]
  for (let require of required) {
    if (!exists.includes(require)) {
      console.log(`[ISSUE!]: Collection [${require}] was not found`)
      db.createCollection(require, error => {
        if (error) console.log(`[ERROR!]: Collection [${require}] failed to create: ${error}`)
        else console.log(`[PASSED]: Collection [${require}] was successfully created`)
      })
    }
  }
  collections.forEach(collection => db[collection.name] = db.collection(collection.name))
  return db;
}


export default conn;