import router from '@system.router';

var picker1value = null;
var picker2value = null;

var picker1seconds = null;
var picker2seconds = null;

var timer1 = null;
var timer2 = null;
var timer3 = null;

var counter = 0;

export default {
    data: {
        seconds: 0,
        isShow: true,
        breath: "Breathe in",
        percent: "0",
        duration: "",
        count: "",
    },
    clickAction() {
        clearInterval(timer1);
        timer1 = null;

        clearInterval(timer2);
        timer2 = null;

        clearInterval(timer3);
        timer3 = null;

        router.replace({
            uri: 'pages/index/index'
        });
    },
    onInit() {
        console.log("training.js/onInit() is evoked");
        console.log("Accepted left selector: " + this.key1);
        console.log("Accepted right selector: " + this.key2);


        // To breathe in
        // Why the fuck is it key, at least like when
        picker1value = this.key1;
        picker2value = this.key2;
//        console.log("Picker1value: " + picker1value)
//        console.log("Picker2value: " + picker2value)
        if (picker2value == '+') {
            picker2seconds = 60;
        } else if (picker2value == '++') {
            picker2seconds = 120;
        } else if (picker2value == '+++') {
            picker2seconds = 180;
        }
//        console.log("Picker1value: " + picker1value)
        picker1seconds = picker1value * 60;
//        console.log("Picker1seconds: " + picker1seconds)
        this.seconds = picker1seconds;
        this.duration = picker2seconds + "s";
        this.count = (picker1seconds / picker2seconds).toString();


        this.seconds = picker1seconds;
        this.duration = picker2seconds + "s";
        this.count = (picker1seconds / picker2seconds).toString();

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
        timer2 = setInterval(this.run2, picker2seconds * 1000);
        timer3 = setInterval(this.run3, picker2seconds / 100 * 1000);
    },
    onDestroy() {
        console.log("training.js/onDestroy() is evoked");
    },

    run2() {
        counter++;
        console.log(picker1seconds)
        console.log(picker2seconds)
        console.log(counter)
        if (counter == picker1seconds / picker2seconds) {
            clearInterval(timer2);
            timer2 = null;
            this.breath = 'Done';
        } else {
            if (this.breath == 'Breathe in') {
                this.breath = 'Breathe out';
            } else if (this.breath == 'Breathe out') {
                this.breath = 'Breathe in'
            }
        }
    },
    run3() {
        this.percent = (parseInt(this.percent) + 1).toString();
        if (parseInt(this.percent) < 10) {
            this.percent = "0" + this.percent;
        }
        if (parseInt(this.percent) == 100) {
            this.percent = "0";
        }
        if (timer2 == null) {
            clearInterval(timer3);
            timer3 = null;
            this.percent = '100';
        }
    },
    toReport1Page(e) {
        if (e.direction == 'right') {
            router.replace({
                uri: 'pages/report1/report1'
            });
        }
    }
}
