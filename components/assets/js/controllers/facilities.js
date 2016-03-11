function blinker() {
    $('.blink_me').fadeOut(500).fadeIn(500);
}

myApp.controller('FacilitiesController', ['$scope','$rootScope','$stateParams','$http', function($scope, $rootScope, $stateParams, $http) {

    $rootScope.facId = $stateParams.facId;

    jQuery('html,body').animate({scrollTop:0},200);

    $("#main-menu ul li").removeClass("active");
    $("#fac_li").addClass( "active" );

    $scope.documents = [];

    /*$http.get("http://paago.eventcalender.develop.cinfores.com/includes/api.php?Action=getFacility&ownerid=horlikins")*/
    $http.get("http://fm.academy.cinfores.com/includes/api.php?Action=getFacility&ownerid=horlikins")
        .then(function(result) {

        if(result.data.resp.length >= 1){
            $scope.documents = result.data.resp;
        }else{
            $("#facilityDiv2").html("");
            $("#facilityDiv2").html('<h2 class="blink_me" style="text-align:center; color:#50ACE7;">Could not load the requested content.</h2>');
            setInterval(blinker, 2000);
            // console.log("error");
        }

    }, function errorCallback(result) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        $("#facilityDiv2").html("");
        $("#facilityDiv2").html('<h2 class="blink_me" style="text-align:center; color:#50ACE7;">Could not load the requested content.</h2>');
        setInterval(blinker, 2000);
    });

    $scope.showLoad = function(element){
        angular.element( document.querySelector( '.page-spinner-bar' ) ).removeClass('hide');
    };
}]); // Controller
