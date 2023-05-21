import router from '@system.router';

export default {
    data: {
        // title: 'World'
    },
    clickAction() {
        router.replace({
            uri: 'pages/index/index'
        });
    },
    onInit() {
        console.log("training.js/onInit() is evoked");
    },
    onReady() {
        console.log("training.js/onReady() is evoked");
    },
    onShow() {
        console.log("training.js/onShow() is evoked");
    },
    onDestroy() {
        console.log("training.js/onDestroy() is evoked");
    },

}
