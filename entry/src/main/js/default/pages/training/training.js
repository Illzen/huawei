import router from '@system.router';

var picker1value = null;
var picker2value = null;

var picker1seconds = null;

var timer1 = null;

export default {
    data: {
        // title: 'World'
        seconds: 0,
        isShow: true
    },
    clickAction() {
        clearInterval(timer1);
        timer1 = null;

        router.replace({
            uri: 'pages/index/index'
        });
    },
    onInit() {
        console.log("training.js/onInit() is evoked");
        console.log("Accepted left selector: " + this.data1);
        console.log("Accepted right selector: " + this.data2);

        picker1value = this.data1;
        picker1value = this.data2;

        if (picker1value == '1') {
            picker1seconds = 60;
        } else if (picker1value == '2') {
            picker1seconds = 120;
        } else if (picker1value == '3') {
            picker1seconds = 180;
        }
        picker1seconds = picker1value * 60;
        this.seconds = picker1seconds;

    },
    run1() {
        this.seconds--;
        if (this.seconds == 0) {
            clearInterval(timer1);
            timer1 = null;

            this.isShow = false;
        }
    },
    onReady() {
        console.log("training.js/onReady() is evoked");
    },
    onShow() {
        console.log("training.js/onShow() is evoked");

        timer1 = setInterval(this.run1, 1000);
    },
    onDestroy() {
        console.log("training.js/onDestroy() is evoked");
    },

}
