angular.module('app').service('DateService', function() {
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  this.graphText = function(date) {
    return monthNames[(date.getMonth()).toString()] + ' ' + date.getFullYear().toString();
  }
});
