import Mock from "mockjs";
export async function loadMockData() {
	await import("./services/auth");
	await import("./services/user");
	await import("./services/manage");
	await import("./services/other");
	await import("./services/tagCloud");
	await import("./services/article");

	Mock.setup({ timeout: 800 });
}
