// File: main.js
// Description: Entry point for MVSIM.
// License: MIT
// Please see the LICENSE file in the root directory for details.

// バージョン
const VERSION = "dev";

// ページマネージャのインスタンスはpage.jsで使うためグローバルにする
let pageman;

// リファクタリング後削除予定
function createBackground(color, width, height, x, y) {
    const background = document.createElement("div");
    background.style.backgroundColor = color;
    background.style.width = width;
    background.style.height = height;
    background.style.position = "absolute";
    background.style.top = y;
    background.style.left = x;

    return display.appendChild(background);
}

function init() {
    pageman = new PageManager();

    display.style.backgroundColor = colors.bgGray;
    display.style.width = 640 + "px";
    display.style.height = 512 + "px";
    display.style.border = "2px inset" + colors.bgGray;
    display.style.position = "relative";

    let pageAll = {};
    pageAll.headbg = createBackground(colors.black, "640px", "90px", "0px", "0px");
    pageAll.botombg = createBackground(colors.bgGray2, "640px", "40px", "0px", "472px");
}

function main() {
    init();

    const toppage = new PageMain();
    const subpage1 = new Page1();
    const subpage1_1 = new Page1_1();
    const time = new Time();

    pageman.addPage(toppage);
    pageman.addPage(subpage1);
    pageman.addPage(subpage1_1);
    time.create();

    pageman.changePageByName("top");
}

document.getElementById("btn_reset").addEventListener("click", () => {
    window.location.reload();
});

window.addEventListener("load", main);

document.getElementById("version").innerText = "Version: " + VERSION;