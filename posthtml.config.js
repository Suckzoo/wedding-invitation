const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  plugins: {
    "posthtml-expressions": {
      locals: {
        KAKAO_KEY: process.env.KAKAO_KEY,
      },
    },
  },
};
