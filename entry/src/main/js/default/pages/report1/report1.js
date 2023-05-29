export default {
    data: {

    },
    toIndexPage(e){
        if(e.direction == 'left'){
            router.replace({
                uri:'pages/index/index'
            });
        }
    }
}
