Meteor.publish('statistics', function(horizon) {
  var limit = 0;

  if (horizon === 'hour') {
    return Statistics.find({}, {
      limit: 60,
      sort: { date: -1 },
      fields: {
        date: true,
        horizon: true,
        temperature: true,
        humidity: true,
        pressure: true,
        visibleLight: true,
        iRLight: true,
        uVIndex: true
      }
    });
  } else {
    return Statistics.find({ horizon: horizon }, {
      limit: 60,
      sort: { date: -1 },
      fields: {
        date: true,
        horizon: true,
        temperature: true,
        humidity: true,
        pressure: true,
        visibleLight: true,
        iRLight: true,
        uVIndex: true
      }
    });
  }

});
