// File:    page.js
// Description: Page and Object classes for MVSIM.
// License: MIT
// Please see the LICENSE file in the root directory for details.

// ボタンなどのオブジェクトの定義

class Button extends Object {
    constructor() {
        super();
    }

    create(name, width, height, x, y, size = fontsize.medium, color = colors.btnGray) {
        this.element = document.createElement("button");
        this.element.innerText = name;
        this.element.style.width = width;
        this.element.style.height = height;
        this.element.style.backgroundColor = color;
        this.element.style.color = colors.btnWhite;
        this.element.style.fontSize = size;
        this.element.style.display = "block";
        this.element.style.position = "absolute";
        this.element.style.top = y;
        this.element.style.left = x;
        this.element.style.borderRadius = "7px";
        this.element.style.fontWeight = "1000";

        return display.appendChild(this.element);
    }

    onclick(func) {
        this.element.addEventListener("click", func);
    }
}

class Text extends Object {
    constructor() {
        super();
    }

    create(name, x, y, size = fontsize.medium, color = colors.textWhite) {
        this.element = document.createElement("p");
        this.element.innerText = name;
        this.element.style.color = color;
        this.element.style.fontSize = size;
        this.element.style.display = "block";
        this.element.style.position = "absolute";
        this.element.style.top = y;
        this.element.style.left = x;

        return display.appendChild(this.element);
    }

    update() {
        this.element.innerText = this.text;
    }
}

class Time extends Object {
    constructor() {
        super();
        this.textDate = new Text();
        this.textTime = new Text();
        this.idinterval = null;
    }

    create() {
        this.textDate.create("月日", "580px", "465px", fontsize.small, colors.btnGray);
        this.textTime.create("時分", "580px", "480px", fontsize.small, colors.btnGray);
        this.idinterval = setInterval(() => {
            const date = new Date();
            this.textDate.text = date.getMonth() + 1 + "月" + date.getDate() + "日";
            this.textTime.text = date.getHours() + "時" + date.getMinutes() + "分";
            this.textDate.update();
            this.textTime.update();
        }, 1000);
    }

    destroy() {
        this.textDate.destroy();
        this.textTime.destroy();
        clearInterval(this.idinterval);
    }
}

// ページ内容の定義

class PageMain extends Page {
    constructor() {
        super();
        this.name = "top";
        this.textTitle1 = new Text();
        this.textTitle2 = new Text();
        this.button1 = new Button();
        this.button2 = new Button();
        this.button3 = new Button();
        this.button4 = new Button();
        this.button5 = new Button();
        this.button6 = new Button();
        this.button7 = new Button();
        this.button8 = new Button();
    }

    create() {
        this.textTitle1.create("きっぷの種類", "50px", "0px", fontsize.large, colors.yellow);
        this.textTitle2.create("をお選びください", "230px", "23px", fontsize.medium, colors.textWhite);
        this.button1.create("指定席", "250px", "95px", "60px", "105px", fontsize.large);
        this.button2.create("乗換案内から購入", "250px", "95px", "330px", "105px", fontsize.medium);
        this.button3.create("自由席", "250px", "95px", "60px", "215px", fontsize.large);
        this.button4.create("乗車券", "250px", "95px", "330px", "215px", fontsize.large);
        this.button5.create("定期券", "250px", "50px", "60px", "325px", fontsize.medium, colors.pink);
        this.button6.create("インターネット予約の受取り", "250px", "50px", "330px", "325px", fontsize.small, colors.green);
        this.button7.create("払いもどし", "250px", "50px", "60px", "385px", fontsize.medium, colors.purple);
        this.button8.create("QRコード読取り", "250px", "50px", "330px", "385px", fontsize.medium, colors.blue);

        this.button1.onclick(() => {
            pageman.changePageByName("sub1");
        });
        this.button2.onclick(() => {unsupport();});
        this.button3.onclick(() => {unsupport();});
        this.button4.onclick(() => {unsupport();});
        this.button5.onclick(() => {unsupport();});
        this.button6.onclick(() => {unsupport();});
        this.button7.onclick(() => {unsupport();});
        this.button8.onclick(() => {unsupport();});
    }

    destroy() {
        this.textTitle1.destroy();
        this.textTitle2.destroy();
        this.button1.destroy();
        this.button2.destroy();
        this.button3.destroy();
        this.button4.destroy();
        this.button5.destroy();
        this.button6.destroy();
        this.button7.destroy();
        this.button8.destroy();
    }
}

class Page1 extends Page {
    constructor() {
        super();
        this.name = "sub1";
        this.textTitle1 = new Text();
        this.textTitle2 = new Text();
        this.button1 = new Button();
        this.button2 = new Button();
        this.buttonBack = new Button();
    }

    create() {
        this.textTitle1.create("きっぷの種類", "50px", "0px", fontsize.large, colors.yellow);
        this.textTitle2.create("をお選びください", "230px", "23px", fontsize.medium, colors.textWhite);
        this.button1.create("新幹線 指定席", "250px", "70px", "60px", "110px", fontsize.large);
        this.button2.create("在来線 指定席", "250px", "70px", "330px", "110px", fontsize.large);
        this.buttonBack.create("前画面に戻る", "90px", "30px", "100px", "478px", fontsize.small, colors.orange);

        this.button1.onclick(() => {
            pageman.changePageByName("sub1-1");
        });

        this.button2.onclick(() => {
            unsupport();
        });

        this.buttonBack.onclick(() => {
            pageman.changePageByName("top");
        });
    }

    destroy() {
        this.textTitle1.destroy();
        this.textTitle2.destroy();
        this.button1.destroy();
        this.button2.destroy();
        this.buttonBack.destroy();
    }
}

class Page1_1 extends Page {
    constructor() {
        super();
        this.name = "sub1-1";
        this.textTitle1 = new Text();
        this.textTitle2 = new Text();
        this.button1 = new Button();
        this.button2 = new Button();
        this.button3 = new Button();
        this.buttonBack = new Button();
    }

    create() {
        this.textTitle1.create("お乗りになる新幹線", "50px", "0px", fontsize.large, colors.yellow);
        this.textTitle2.create("をお選びください", "320px", "23px", fontsize.medium, colors.textWhite);
        this.button1.create("東海道・山陽／九州", "200px", "70px", "10px", "230px", fontsize.medium);
        this.button2.create("東北・山形・秋田・北海道", "200px", "70px", "220px", "230px", fontsize.medium);
        this.button3.create("上越・北陸", "200px", "70px", "430px", "230px", fontsize.medium);
        this.buttonBack.create("前画面に戻る", "90px", "30px", "100px", "478px", fontsize.small, colors.orange);

        this.button1.onclick(() => {
            pageman.changePageByName("sub1-1-1");
        });

        this.button2.onclick(() => {
            unsupport();
        });

        this.button3.onclick(() => {
            unsupport();
        });

        this.buttonBack.onclick(() => {
            pageman.changePageByName("sub1");
        });
    }

    destroy() {
        this.textTitle1.destroy();
        this.textTitle2.destroy();
        this.button1.destroy();
        this.button2.destroy();
        this.button3.destroy();
        this.buttonBack.destroy();
    }
}

class Page1_1_1 extends Page {
    constructor() {
        super();
        this.name = "sub1-1-1";
        this.textTitle1 = new Text();
        this.textTitle2 = new Text();
        this.textTitle3 = new Text();
        this.button1 = new Button();
        this.button2 = new Button();
        this.buttonBack = new Button();
    }

    create() {
        this.textTitle1.create("新幹線に", "50px", "23px", fontsize.medium, colors.textWhite);
        this.textTitle2.create("お乗りになる駅", "130px", "0px", fontsize.large, colors.yellow);
        this.textTitle3.create("をお選びください", "340px", "23px", fontsize.medium, colors.textWhite);
        this.button1.create("東京 から", "560px", "100px", "40px", "200px", fontsize.large);
        this.button2.create("他の駅から", "200px", "40px", "40px", "340px", fontsize.medium);
        this.buttonBack.create("前画面に戻る", "90px", "30px", "100px", "478px", fontsize.small, colors.orange);

        this.button1.onclick(() => {
            unsupport();
        });

        this.button2.onclick(() => {
            unsupport();
        });

        this.buttonBack.onclick(() => {
            pageman.changePageByName("sub1-1");
        });
    }

    destroy() {
        this.textTitle1.destroy();
        this.textTitle2.destroy();
        this.textTitle3.destroy();
        this.button1.destroy();
        this.button2.destroy();
        this.buttonBack.destroy();
    }
}