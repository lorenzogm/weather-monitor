angular.module('auth').directive('login', function() {
    return {
        restrict: 'E',
        templateUrl: 'auth/client/components/login/login.html',
        controllerAs: 'login',
        controller: function($scope, $reactive, $state) {
            $reactive(this).attach($scope);

            this.credentials = {
                email: '',
                password: ''
            };

            this.error = '';

            this.login = () => {
                Meteor.loginWithPassword(this.credentials.email, this.credentials.password, (error) => {
                    if (error) {
                        $state.go('login');
                    } else {
                        $state.go('home');
                    }
                });
            };
        }
    }
});
