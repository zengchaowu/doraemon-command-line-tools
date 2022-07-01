export default (data) => {
  return {
    path: undefined, // 请求路径
    headers: undefined, // 额外的头信息
    data, // 在这里对数据进行额外处理
  };
};
