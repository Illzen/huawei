import router from '@system.router';
export default {
    data: {
        title: ""
    },
    toNextPage(e) {
        switch (e.direction) {
            case 'left':
                router.replace({
                    uri: 'pages/index/index'
                });
                break;
            case 'bottom':
                router.replace({
                    uri: 'pages/report1/report1'
                });
        }
    }

    onInit() {
        this.title = "Hello World";
    }
}
