angular.module('app').service('WeatherChartsService', function() {

  this.buildCharts = function(horizon, statistics) {

    var dateFormat = '%H:%M';
    if (horizon === 'hour' || horizon === 'day') {
      dateFormat = '%H:%M';
    } else {
      dateFormat = '%x %X';
    }

    var charts = {};
    _.each(Measures.keys(), function(measure) {
      charts[measure] = {
        data: {},
        options: {
          chart: {
            type: 'lineChart',
            height: 400,
            color: ['#2ca02c', 'darkred'],
            x: function(d, i) {
              return i
            },
            transitionDuration: 500,
            xAxis: {
              axisLabel: 'Tiempo',
              tickFormat: function(d) {
                var dx = charts[measure].data[0].values[d] && charts[measure].data[0].values[d].x || 0;
                // console.log(measure);
                // console.log(dx);
                return d3.time.format(dateFormat)(new Date(dx))
              },
              showMaxMin: false
            },
            yAxis: {
              axisLabel: Measures[measure].label,
              tickFormat: function(d) {
                return d + 'ºC';
              },
              showMaxMin: false
            }
          }
        },
        config: {
          extended: true
        }
      }

      var values = [];
      _.each(statistics, function(statistic) {
        if (values.length < Horizons[horizon].horizon) {
          values.push([statistic.date, statistic[measure]]);
        }
      });

      values.reverse();

      // Define the data object for the graphic
      charts[measure].data = [{
        key: Measures[measure].label,
        values: values
      }].map(function(series) {
        series.values = series.values.map(function(d) {
          return { x: d[0], y: d[1] }
        });
        return series;
      });
    }, this);

    return charts;

  }
});
