const { Application } = require("spectron");
const assert = require("assert");
const path = require("path");
const fs = require("fs"); // 引入文件系统模块

const app = new Application({
  path: "D:/Program Files (x86)/贝贝管理/贝贝管理.exe", // 直接使用绝对路径
});

(async () => {
  try {
    await app.start();
    assert.ok(app.isRunning());

    await app.client.waitUntilWindowLoaded();

    const count = await app.client.getWindowCount();
    assert.strictEqual(count, 1);

    // 替换为你要点击的元素的选择器
    await app.client.click("#your-button-id");

    // 捕获屏幕截图
    const imageBuffer = await app.browserWindow.capturePage(); 
    // 这里可以添加更多的交互和断言
  } catch (error) {
    console.error("Test failed:", error.message);
  } finally {
    if (app && app.isRunning()) {
      await app.stop();
    }
  }
})();
