Meteor.startup(function() {
  if (Statistics.find().count() === 0) {

    var moment = Npm.require('moment');
    var statistics = [];

    for (var i = 0; i < 60 * 24 * 7 * 30; i++) {
      var date = moment().add(i, 'minutes').toDate();
      var horizon = 'hour';

      if (moment(date).minute() === 0 || moment(date).minute() === 30) {
        horizon = 'day';
      } else if (moment(date).minute() === 1 && (moment(date).hour() === 0 || moment(date).hour() === 6 || moment(date).hour() === 12 || moment(date).hour() === 18)) {
        horizon = 'week';
      } else if (moment(date).minute() === 2 && (moment(date).hour() === 0 || moment(date).hour() === 12)) {
        horizon = 'month';
      }

      statistics.push({
        date: date,
        horizon: horizon,
        temperature: Math.round((Math.random() * (30 - 25) + 25) * 10) / 10,
        humidity: Math.round((Math.random() * (50 - 40) + 40, 2) * 100) / 100,
        pressure: Math.round(Math.random() * (101350 - 101300) + 101300, 0),
        visibleLight: Math.random(),
        iRLight: Math.random(),
        uVIndex: Math.random()
      });
    }

    _.each(statistics, function(statistic) {
      Statistics.insert(statistic);
    });

  }
});
