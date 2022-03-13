import { M as Mock } from "./index-f34bf941.js";
import "./vendor-cb3a9242.js";
import "./index-796d3f42.js";
const MOCK_MAP = [["https://www.singlone.work/https/book/v1/login", "post", {
  msg: "ok",
  data: {
    id: 8,
    username: "ShoneSingLone",
    nickname: "ShoneSingLone",
    email: "SingLone@foxmail.com",
    avatar: "https://avatars.githubusercontent.com/u/15919400?s=40&v=4",
    phone: null,
    sex: "",
    status: 1,
    sign: "",
    area: "",
    token: "mock"
  }
}], ["https://www.singlone.work/https/book/auth/v1/user", "post", {
  msg: "ok",
  data: {
    id: 8,
    username: "ShoneSingLone",
    nickname: "ShoneSingLone",
    email: "SingLone@foxmail.com",
    avatar: "https://avatars.githubusercontent.com/u/15919400?s=40&v=4",
    phone: null,
    sex: "",
    status: 1,
    sign: "",
    area: "",
    created_at: "2022-03-13T10:46:38.000Z",
    updated_at: "2022-03-13T10:46:38.000Z",
    token: "token"
  }
}], ["https://www.singlone.work/https/book/auth/v1/logout", "post", {
  msg: "ok",
  data: "\u9000\u51FA\u6210\u529F"
}], ["https://www.singlone.work/https/book/auth/v1/logout", "post", {
  msg: "ok",
  data: "\u9000\u51FA\u6210\u529F"
}]];
Mock.mock(/https/, "post", ({
  url
}) => {
  return MOCK_MAP[url] || url;
});
