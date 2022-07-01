import createConnection from "./createConnection";

export default (host) => {
  const connection = createConnection(host);
  connection.ws.disconnect();
};
