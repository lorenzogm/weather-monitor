var statistic = {
  date: {
    type: String,
    unique: true,
  },
  horizon: {
    type: String
  },
  temperature: {
    type: Number,
    decimal: true,
  },
  humidity: {
    type: Number,
    decimal: true,
  },
  pressure: {
    type: Number,
    decimal: true,
  },
  visibleLight: {
    type: Number,
    decimal: true,
  },
  iRLight: {
    type: Number,
    decimal: true,
  },
  uVIndex: {
    type: Number,
    decimal: true,
  },
};

Statistics = new Mongo.Collection('statistics');
Statistics.attachSchema(new SimpleSchema(statistic));

Statistics.allow({
  insert: function(userId, statistic) {
    return userId;
  },
  update: function(userId, statistic, fields, modifier) {
    return userId;
  },
  remove: function(userId, statistic) {
    return userId;
  }
});
