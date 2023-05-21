import router from '@system.router';

var picker1value = null;
var picker2value = null;

var picker1seconds = null;
var picker2seconds = null;

var timer1 = null;
var timer2 = null;

var counter = 0;

export default {
    data: {
        seconds: 0,
        isShow: true,
        breath: "breath in",
    },
    clickAction() {
        clearInterval(timer1);
        timer1 = null;

        clearInterval(timer2);
        timer2 = null;

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

        picker1seconds = picker1value * 60;
        this.seconds = picker1seconds;

        if (picker2value == 'S') {

        }

        // if (picker1value == '1') {
        //     picker1seconds = 60;
        // } else if (picker1value == '2') {
        //     picker1seconds = 120;
        // } else if (picker1value == '3') {
        //     picker1seconds = 180;
        // }


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

    run2() {
        counter++;
        if (counter = picker1seconds / picker2seconds) {
            clearInterval(timer2);
            timer2 = null;
            this.breath = 'Done';
        } else {
            if (this.breath == 'breath in') {
                this.breath = 'breath out';
            } else if (this.breath == 'breath out') {
                this.breath = 'breath in'
            }
        }
    }

}
