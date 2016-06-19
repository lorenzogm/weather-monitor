angular.module('auth').filter('displayName', function() {
    return function(user) {
        if (!user) {
            return '';
        }

        if (user.profile && user.profile.first_name && user.profile.last_name) {
            return user.profile.first_name + ' ' + user.profile.last_name;
        } else if (user.profile && user.profile.first_name) {
            return user.profile.first_name;
        } else if (user.emails) {
            return user.emails[0].address;
        } else {
            return user;
        }
    }
});
