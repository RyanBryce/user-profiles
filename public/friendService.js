angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( name, password ) {
      return $http({
        method: 'POST',
        url: '/api/login',
        data: {
          name,
          password
        }
      })
    };

    this.getFriends = function() {
    	return $http({
        method: 'GET',
        url: '/api/profiles'
      })
    };

});
