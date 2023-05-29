import router from '@system.router';
export default {
    data: {
        timeRange: ["07:00", "12:00", "17:00", "22:00"],
        activityData: [{
                iconName: "red",
                text: "activity",
                percent: 0
            },
            {
                iconName: "gray",
                text: "still",
                percent: 0
            }
        ]
    },
    onInit() {
        let activities = [];
        let activitiesStatic = [];
        for (let i = 0; i < 20; i++) {
            let rand = this.getRandomZeroOrOne();
            activities.push(rand);
            activitiesStatic.push(Math.abs(rand - 1));
        }
        let heartRates = [];
        // TODO page 4 lab26
        // for (let i = 0; i < 100; i++) {
        //     heartRates.push(this.getRandomInt(73, 159));
        // }
        this.datasets[0].data = heartRates;
        this.countMaxMinAverage(heartRates);
    },
    getRandomZeroOrOne() {
        return Math.floor(Math.random() + 0.5);
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
            case 'bottom':
                router.replace({
                    uri: 'pages/report2/report2'
                });
        }
    },
}
