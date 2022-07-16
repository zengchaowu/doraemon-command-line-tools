export default function (payload, origin = false) {
  const that = this;
  return new Promise(function (resolve) {
    const { headers, method, path, data } = payload;
    that
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
          that.$message.error(msg ?? resultMsg);
          resolve(undefined);
        }
      })
      .catch(() => {});
  });
}
