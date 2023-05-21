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
        console.log("Accepted left selector: " + this.data1);
        console.log("Accepted right selector: " + this.data2);
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
