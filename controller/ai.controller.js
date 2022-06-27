const { uploadImage } = require("../tools/uploadTools");
const { exec } = require("child_process");

const aiController = (req, res) => {
  const upload = uploadImage.single("image");

  upload(req, res, (err) => {
    if (err) {
      return res.status(err.statusCode).json({
        status: false,
        result: {},
        message: err.message,
      });
    }
    try {
      if (!req.file) {
        return res.status(400).json({
          status: false,
          result: {},
          message: "invalid inputs",
        });
      }

      exec("node -v", (error, stdout, stderr) => {
        if (error) {
          return res.status(400).json({
            status: false,
            result: {},
            message: `error: ${error.message}`,
          });
        }
        if (stderr) {
          return res.status(400).json({
            status: false,
            result: {},
            message: `stderr: ${stderr}`,
          });
        }
        return res.status(200).json({
          status: true,
          result: { outpout: `stdout: ${stdout}` },
          message: "done",
        });
      });
    } catch (err) {
      console.log("[-] unhandled error > " + err.message);

      return res.status(500).json({
        status: false,
        result: {},
        message: "something went wrong",
      });
    }
  });
};

module.exports = { aiController };
