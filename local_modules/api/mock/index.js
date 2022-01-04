import Mock from "mockjs";
import("./services/auth");
import("./services/user");
import("./services/manage");
import("./services/other");
import("./services/tagCloud");
import("./services/article");

Mock.setup({ timeout: 800 });