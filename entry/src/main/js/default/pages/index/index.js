import router from '@system.router';

var picker1value = "2";
var picker2value = "+";

export default {
    data: {
        picker1range: ["1", "2", "3"],
        picker2range: ["+", "++", "+++"]
        // title: "World"
    },
    clickAction() {
        console.log("Button is clicked !")
        router.replace({
            uri: 'pages/countdown1/countdown1',
            //            uri: 'pages/training/training',
            params: {
                "data1": picker1value,
                "data2": picker2value
            }
        });
    },
    onInit() {
        console.log("index.js/onInit() is evoked");
        router.replace({
            uri: "pages/report2/report2",
        });
    },
    onReady() {
        console.log("index.js/onReady() is evoked");
    },
    onShow() {
        console.log("index.js/onShow() is evoked");
    },
    onDestroy() {
        console.log("index.js/onDestroy() is evoked");
    },
    changeAction1(pv) {
        console.log("selected item on the left: " + pv.newValue);
        picker1value = pv.newValue;
    },
    changeAction2(pv) {
        console.log("selected item on the right: " + pv.newValue);
        picker2value = pv.newValue;
    }
}
