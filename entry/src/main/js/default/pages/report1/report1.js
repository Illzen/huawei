export default {
    data: {
        states: [
            'Desperate 80-99',
            'Tense 60-79',
            'Normal 30-59',
            'Relax 1-29',
        ]

    },
    toIndexPage(e) {
        if (e.direction == 'left') {
            router.replace({
                uri: 'pages/index/index'
            });
        }
    }
}
