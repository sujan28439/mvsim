// File: framework.js
// Description: Framework for MVSIM.
// License: MIT
// Please see the LICENSE file in the root directory for details.

// 表示先の定義
const display = document.getElementById("display");

// 使用する色の定義
const colors = {
    bgGray: "#ddd",
    bgGray2: "#aaa",
    btnGray: "#555",
    btnWhite: "#ffffff",
    textWhite: "#ffffff",
    yellow: "#ffff00",
    red: "#ff0000",
    orange: "#ff8000",
    green: "#080",
    blue: "#0000ff",
    black: "#000000",
    pink: "#ff1080",
    purple: "#c244fc"
}

// フォントサイズの定義
const fontsize = {
    small: "12px",
    medium: "20px",
    large: "30px"
}

// サポートされていない機能の挙動の定義
function unsupport() {
    alert("この機能はサポートされていません。");
}

// ページ基底クラス
// page.jsに派生クラスを定義
class Page {
    constructor() {
        this.name = null;
    }
}

// ページオブジェクト基底クラス
// page.jsに派生クラスを定義
class Object {
    constructor() {
        this.element = null;
        this.text = null;
    }

    destroy() {
        display.removeChild(this.element);
    }
}

// ページマネージャ
class PageManager {
    constructor() {
        this.pages = [];
        this.currentPage = -1;
        this.pathPage = [];
        this.isAddPath = true;
    }

    addPage(page) {
        this.pages.push(page);
    }

    getIndex(pagename) {
        return this.pages.findIndex((element) => element.name === pagename);
    }

    changePageByIndex(index) {
        if (this.currentPage < 0) {
            if (this.pages.length < 1) return;
        } else this.pages[this.currentPage].destroy();
        if (this.isAddPath) this.pathPage.push(this.currentPage);
        this.currentPage = index;
        this.pages[this.currentPage].create();
    }

    changePageByName(pagename) {
        this.changePageByIndex(this.getIndex(pagename));
    }

    changesPreviousPage() {
        this.isAddPath = false;
        this.changePageByIndex(this.pathPage.pop());
        this.isAddPath = true;
    }
}

let pageman = new PageManager();