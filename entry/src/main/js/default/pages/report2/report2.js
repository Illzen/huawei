import router from '@system.router';
export default {
    data: {
        maxmin: [{
                iconName: 'max',
                mValue: '0'
            },
            {
                iconName: 'min',
                mValue: '0'
            }
        ],
        average: 0,
        options: {
            xAxis: {},
            yAxis: {
                min: 0,
                max: 160
            }
        },
        datasets: [{
            gradient: true,
            data: []
        }]
    },
    onInit() {
        let heartRates = [];
        for (let i = 0; i < 100; i++) {
            heartRates.push(this.getRandomInt(73, 159));
        }
        this.datasets[0].data = heartRates;
        this.countMaxMinAverage(heartRates);
    },
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    countMaxMinAverage(heartRates) {
        this.maxmin[0].mValue = Math.max.apply(null, heartRates);
        this.maxmin[1].mValue = Math.max.apply(null, heartRates);

        let sum = 0;
        for (let index = 0; index < heartRates.length; index++) {
            sum += heartRates[index];
        }
        this.average = Math.round(sum / heartRates.length);

    },
    toNextPage(e) {
        switch (e.direction) {
            case 'left':
                router.replace({
                    uri: 'pages/index/index'
                });
                break;
            case 'top':
                router.replace({
                    uri: 'pages/report3/report3'
                })
                break;
            case 'bottom':
                router.replace({
                    uri: 'pages/report1/report1'
                });
        }
    },
}
