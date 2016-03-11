//var myApp = angular.module('myApp', [
//    'ngRoute',
//    'ui.router'
//]);

var myApp = angular.module('myApp', [
    "ui.router",
    "angularUtils.directives.dirPagination",
    // "ngRoute",
    // "ui.bootstrap",
    // "oc.lazyLoad"
    //  "ngSanitize"
]);

myApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', registerRoutes]);



myApp.run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$location = $location;
}]);

function registerRoutes($stateProvider, $urlRouterProvider, $locationProvider) {


    // root authenticated state
    $stateProvider
        .state('index', {
        url: '/index',
        templateUrl: 'views/main.php',
        controller: 'IndexController'
    }).
    state('about', {
        url: '/about',
        templateUrl: 'views/about.php',
        controller: 'AboutController'
    }).
    state('facilities', {
        url: '/facilities',
        params: {
            facId: null,
        },
        templateUrl: 'views/facilities.php',
        controller: 'FacilitiesController'
    }).
    state('booking', {
        // url: '/booking/:facId',
        url: '/booking',
        params: {
            facId: null,
            facName: null,
        },
        templateUrl: 'views/booking.php',
        controller: 'BookingController',
        // resolve: function($stateParams){
        //            element.removeClass('hide');
        //            return $stateParams.facId;
        //  }
    }).
    //    state('booking', {
    //        // url: '/booking/:facId',
    //        url: '/booking/:facId/:facName',
    //        templateUrl: 'views/booking.php',
    //        controller: 'BookingController'
    //    }).
    state('gallery', {
        url: '/gallery',
        templateUrl: 'views/gallery.php',
        controller: 'GalleryController'
    }).
    state('podcast', {
        url: '/podcast',
        templateUrl: 'views/podcast.php',
        controller: 'PodcastController'
    }).
    state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.php',
        controller: 'ContactController'
    });

    //$locationProvider.html5Mode(true).hashPrefix('!');
    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/index');



}




/*

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/index', {
        templateUrl: 'views/main.php',
        controller: 'IndexController'
    }).
    when('/about', {
        templateUrl: 'views/about.php',
        controller: 'AboutController',
        resolve: function() {
            alert("about to load partial");
            $location.path('/about');

        }
    }).
    when('/facilities', {
        templateUrl: 'views/facilities.php',
        controller: 'FacilitiesController'
    }).
    when('/gallery', {
        templateUrl: 'views/gallery.php',
        controller: 'GalleryController'
    }).
    //when('/guest', {
    //    templateUrl: 'views/guest-book.php',
    //    controller: 'GuestController'
    //}).
    when('/contact', {
        templateUrl: 'views/contact.php',
        controller: 'ContactController'
    }).
    when('/booking', {
        templateUrl: 'views/booking.php',
        controller: 'BookingController',
        params: {
            facId: 3,
        }
    }).
    when('/success', {
        templateUrl: 'views/success.html',
        controller: 'SuccessController',
        //resolve: {
        //    currentAuth: function(Authentication) {
        //        return Authentication.requireAuth();
        //    } //current Auth
        //} //resolve
    }).
    otherwise({
        redirectTo: '/index'
    });


}]);

*/
