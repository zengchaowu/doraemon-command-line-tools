const cos = require("./cos");
const fs = require("fs");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

function upload(path) {
  cos.putObject(
    {
      Bucket: process.env.BUCKET,
      Region: process.env.REGION,
      Key: "1exampleobject.jpg",
      Body: fs.createReadStream(path),
      ContentLength: fs.statSync(path).size,
      onProgress: function (progressData) {
        console.log("progressData", JSON.stringify(progressData));
      },
    },
    function (err, data) {
      console.log("err", err || data);
    }
  );
}

upload("/Users/doraemon/Desktop/1.jpg");
