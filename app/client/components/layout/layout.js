angular.module('app').directive('layout', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/client/components/layout/layout.html',
    controllerAs: 'vm',
    controller: function($scope, $reactive, $state) {
      $reactive(this).attach($scope);

      this.helpers({
        currentUser: () => {
          return Meteor.user();
        }
      });

      this.logout = () => {
        Accounts.logout(function(err) {
          $state.go('login');
        });
      }
    }
  }
});
