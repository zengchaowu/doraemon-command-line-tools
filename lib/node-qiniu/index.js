const qiniu = require("qiniu");

const getUploadToken = async () => {
  const pkg = await import("read-pkg-up");
  const content = await pkg.readPackageUpAsync();
  const { accessKey, secretKey, bucket } = content.packageJson?.secrets?.qiniu;
  const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
  const options = {
    scope: bucket,
  };
  const putPolicy = new qiniu.rs.PutPolicy(options);
  const uploadToken = putPolicy.uploadToken(mac);
  return uploadToken;
};

module.exports = {
  main: getUploadToken,
};
