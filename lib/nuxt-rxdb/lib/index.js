import { createRxDatabase, addRxPlugin } from "rxdb";
import idb from "pouchdb-adapter-idb";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";
import { getRxStoragePouch, addPouchPlugin } from "rxdb/plugins/pouchdb";
import { RxDBQueryBuilderPlugin } from "rxdb/plugins/query-builder";
import isNil from "lodash.isnil";

let database;

export const initDatabase = async () => {
  if (isNil(database)) {
    addRxPlugin(RxDBQueryBuilderPlugin);
    addRxPlugin(RxDBDevModePlugin);
    addPouchPlugin(idb);
    database = await createRxDatabase({
      name: "rxdb",
      storage: getRxStoragePouch("idb"),
    });
  }
};

export const getCollection = async (name, schema) => {
  const config = {};
  config[name] = { schema };
  let collection = database[name];
  if (isNil(collection)) {
    const collections = await database.addCollections(config);
    collection = collections[name];
  }
  return collection;
};
