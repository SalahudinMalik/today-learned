use this loop :  for (let key in obj) {}
instead of :  _.forEach(newdata, async function (value, key) {})

// jsreport is just an api you have to design report and send data from node to it.

// wasted 2 hours on Date.now

// unix to date conversion 

        var dateString = new Date(connRenewal.createdAt*1000);
        var dateString =  moment.utc(connRenewal.createdAt).format('MM/DD/YYYY');
        console.log(connRenewal.createdAt);
        let dateString = moment(connRenewal.createdAt).format('L');
        console.log(dateString)
        const unixdate =  parseInt((new Date('2012.08.10').getTime() / 1000)); //.toFixed(0))
        var unixdate = moment('2012.08.10', 'YYYY.MM.DD').unix();
        var dateString = moment.unix(connRenewal.createdAt).format("MM/DD/YYYY");
        console.log(unixdate)
         dateString = moment(unixdate*1000).format('L');
         dateString =  moment.utc(unixdate).format('MM/DD/YYYY');
