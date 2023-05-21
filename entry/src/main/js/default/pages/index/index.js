import router from '@system.router';

export default {
    data: {
        picker1range: ["1", "2", "3"],
        picker1range: ["Slow", "Moderate", "Fast"]
        // title: "World"
    },
    clickAction() {
        router.replace({
            uri: 'pages/training/training'
        });
    },
    onInit() {
        console.log("index.js/onInit() is evoked");
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
    },
    changeAction2(pv) {
        console.log("selected item on the right: " + pv.newValue);
    }
}
