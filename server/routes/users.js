import express from "express";
import conn from "../db/index.js";
import bcrypt from "bcrypt";
var router = express.Router();

/* GET users listing. */
router.post("/", async function (req, res, next) {
  console.log(req.body);
  const { user_name, password, name } = req.body;
  const query = `SELECT id FROM user WHERE user_name = '${user_name}'; `;
  const [rows] = await conn.query(query);

  if (rows.length) {
    return res.status(409).send({
      success: false,
      message: "중복되는 아이디가 존재합니다.",
    });
  }

  const salt = await bcrypt.genSalt(); // salt 생성  비밀번호 암호화
  const hashedPW = await bcrypt.hash(password, salt); // slat , password 섞기

  const query2 = `
    INSERT INTO user(user_name, password, salt, name)
    VALUES('${user_name}', '${hashedPW}', '${salt}', '${name}')
  `;

  await conn.query(query2);

  res.send({ success: true });
});

export default router;
