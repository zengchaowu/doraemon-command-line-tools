import { Strophe } from "strophe.js";
import isNil from "lodash.isnil";

const connectionMap = new Map();

export default (host) => {
  let connection = connectionMap.get(host);
  if (isNil(connection)) {
    connection = {
      ws: new Strophe.Connection(host, {
        protocol: "ws",
      }),
    };
    connectionMap.set(host, connection);
  }
  return connection;
};
