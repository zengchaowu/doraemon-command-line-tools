import { Strophe } from "strophe.js";
import isNil from "lodash.isnil";
import createConnection from "./createConnection";

const onConnect = (status) => {
  if (status === Strophe.Status.CONNECTING) {
    console.log("连接中");
  } else if (status === Strophe.Status.CONNFAIL) {
    console.log("连接失败");
  } else if (status === Strophe.Status.DISCONNECTING) {
    console.log("断开中");
  } else if (status === Strophe.Status.DISCONNECTED) {
    console.log("已断开");
    // 断开自动重连
    setTimeout(() => {
      connect();
    }, 3000);
  } else if (status === Strophe.Status.CONNECTED) {
    console.log("已连接");
    // socket.addHandler(onMessage, null, "message", null, null, null);
    // socket.send(globalThis.$pres().tree());
  } else {
    console.log("其他状态-" + status);
  }
};

const connect = (host, id, password) => {
  const connection = createConnection(host);
  if (isNil(connection.onConnect)) {
    connection.onConnect = onConnect;
    connection.ws.connect(id, password, onConnect);
  }
};

export default connect;
