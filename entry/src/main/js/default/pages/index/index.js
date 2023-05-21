import router from '@system.router';

export default {
    data: {
        title: "World"
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
}
