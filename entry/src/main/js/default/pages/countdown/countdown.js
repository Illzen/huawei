var counter = 3;
var timer = null;

export default {
    data: {
        imgsrc: "",
        seconds: "",
    },
    run() {
        counter = counter - 1;
        if (counter != 0) {
            this.imgsrc = "/common/" + "n" + counter.toString() + ".png";
            this.seconds = counter.toString();
        } else {
            this.imgsrc = "";
            this.seconds = "";

            clearInterval(timer);
            timer = null;
        }
    },
    onInit() {
        this.imgsrc = "/common/" + "n" + counter.toString() + ".png";
        this.seconds = counter.toString();
    },
    onShow() {
        timer = setInterval(this.run, 1000);
    },
}
