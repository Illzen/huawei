export default {
    data: {
        title: "",
        btn: ""
    },
    onInit() {
        this.title = this.$t('strings.hello') + this.$t('strings.world');
        this.btn = "按钮";
    },
    btnClickAction(){
        console.log("按钮被点击");
    }
}
