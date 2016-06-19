class HomeCtrl {
  constructor($scope, $reactive, WeatherChartsService) {
    $reactive(this).attach($scope);

    this.horizons = Horizons.nodes;
    this.horizon = settings.default.horizon;

    this.helpers({
      statistics: () => {
        return Statistics.find({ horizon: this.getReactively('horizon') }, {
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
      },
    });

    this.subscribe('statistics', () => [this.getReactively('horizon'), this.getReactively('statistics')], {
      onReady: function() {
        this.charts = WeatherChartsService.buildCharts(this.horizon, this.statistics);

        this.temperatureApi.refresh();
        this.humidityApi.refresh();
        this.pressureApi.refresh();
        this.visibleLightApi.refresh();
        this.iRLightApi.refresh();
        this.uVIndexApi.refresh();
      }
    });
  }

}

angular.module('app').directive('home', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/client/components/home/home.html',
    controllerAs: 'vm',
    controller: HomeCtrl
  }
});
