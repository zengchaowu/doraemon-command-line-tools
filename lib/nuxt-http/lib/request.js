export default (host, payload, origin = false) => {
  return new Promise(function (resolve, reject) {
    const { headers, method, path, data } = payload;
    host
      .$axios({
        headers,
        method: method ?? "POST",
        url: path,
        data,
      })
      .then((result) => {
        const { code, data, msg, resultCode, resultMsg } = result?.data;
        if ([0, 1].includes(code ?? resultCode)) {
          if (origin !== false) {
            resolve(result);
          } else {
            resolve(data);
          }
        } else {
          host.$message.error(msg ?? resultMsg);
          reject(new Error(msg ?? resultMsg));
        }
      })
      .catch(() => {});
  });
};
