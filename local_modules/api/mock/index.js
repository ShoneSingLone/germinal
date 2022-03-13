import Mock from "mockjs";
export async function loadMockData() {
	await import("./services/auth");

	Mock.setup({ timeout: 300 });
}
