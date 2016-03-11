function blinker() {
    $('.blink_me').fadeOut(500).fadeIn(500);
}

angular.element(document).ready(function () {

    // console.log("READY");

});

myApp.controller('IndexController', ['$scope','$rootScope','$stateParams','$http', function($scope, $rootScope, $stateParams, $http) {


    $rootScope.facId = $stateParams.facId;
    $rootScope.facId = $stateParams.facId;



    $("#main-menu ul li").removeClass("active");
    $("#index_li").addClass( "active" );
    jQuery('html,body').animate({scrollTop:0},200);

    "use strict";
    // Init the Wow plugin
    new WOW({mobile: false}).init();

    $scope.chkinRawDate;
    $scope.chkoutRawDate;
    $scope.chkinMysqlDate;
    $scope.chkoutMysqlDate;
    //  $scope.facilitiesArray = facilitiesArray;

    $scope.indexData = [];

    $http.get("http://fm.academy.cinfores.com/includes/api.php?Action=getFacility&ownerid=horlikins")
        .then(function(result) {

        if(result.data.resp.length >= 1){
            $scope.indexData = result.data.resp;
        }else{
            $("#facilityDiv").html("");
            $("#facilityDiv").html('<h2 class="blink_me" style="text-align:center; color:#50ACE7;">Could not load the requested content.</h2>');
            setInterval(blinker, 2000);
            console.log("error");
        }

    }, function errorCallback(result) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        $("#facilityDiv").html("");
        $("#facilityDiv").html('<h2 class="blink_me" style="text-align:center; color:#50ACE7;">Could not load the requested content.</h2>');
        setInterval(blinker, 2000);
    });

    $scope.showLoad = function(element){
        angular.element( document.querySelector( '.page-spinner-bar' ) ).removeClass('hide');
    };
    $scope.CheckAvailabilty = function(){


        $('#response').block({
            message: '<p style="margin-bottom:0;"><img src="images/loading.gif" />Checking..</p>',
            css: { border: '3px solid #90C3D4' },
            cursorReset: 'default'
        });

        $scope.chkinRawDate = $('#chkIndate').datepicker('getDate');
        $scope.chkoutRawDate = $('#chkOutdate').datepicker('getDate');

        //  console.log($( "#SelectFacilities" ).val() );
        if( $( "#SelectFacilities" ).val() == ''){
            angular.element( document.querySelector( '#response' ) ).html('<p style="text-align: center; background:black;color:white;" class="blink_me">Please select a facility to check.</p>');
            setInterval(blinker, 2000);
        } else if ($scope.chkinRawDate == null){
            angular.element( document.querySelector( '#response' ) ).html('<p style="text-align: center; background:black;color:white;" class="blink_me">Please choose your check-in date</p>');
            setInterval(blinker, 2000);
        } else if ($scope.chkoutRawDate == null){
            angular.element( document.querySelector( '#response' ) ).html('<p style="text-align: center;background:black; color:white;" class="blink_me">Please choose your check-out date</p>');
            setInterval(blinker, 2000);
        }else{
            //    var jsonString = JSON.stringify($scope.sumTotalArray);
            $.ajax({
                type: "POST",
                url: "includes/process_index.php",
                data: {
                    main : "main",
                    startDate :  $scope.chkinRawDate,
                    endDate :  $scope.chkoutRawDate
                },
                cache: false,

                success: function(data){

                    //  console.log(data);
                    //  console.log("in success of ajax call "+data);
                    var json = JSON.parse(data);

                    $scope.chkinMysqlDate = json.msDate;
                    $scope.chkoutMysqlDate = json.meDate;
                    var facID = $( "#SelectFacilities" ).val();



                    var url = 'http://fm.academy.cinfores.com/includes/api.php?Action=chkAvailability&fid='+$( "#SelectFacilities" ).val() +'&sdate='+ $scope.chkinMysqlDate+'&edate='+ $scope.chkoutMysqlDate +'&ownerid=horlikins';

                    //  console.log(url);
                    $.ajax({
                        url: url,
                        cache: false,
                        success: function (data) {
                            $('#response').unblock();
                            var json = JSON.parse(data);
                            //console.log(json.resp);
                            var available;
                            for(var i in json.resp){
                                if(json.resp[i][0].status == "Not_Available"){
                                    available = false;
                                    //if(jQuery.inArray("Not_Available", json.resp) == -1){
                                }
                            }

                            if(available == false){
                                angular.element( document.querySelector( '#response' ) ).html('<h2 style="text-align: center; background:black;" class="">Not Available</h2>');
                            }else{
                                angular.element( document.querySelector( '#response' ) ).html('<h2 style="text-align: center;background:black;color:white;" class="">Available</h2>');
                            }

                        },
                        error: function (resp) {
                            $('#response').unblock();
                            $('#response').html("");
                            $('#response').html('<h2 class="blink_me" style="text-align:center; color:#50ACE7;">Could not check availability of facility at this time. </h2>');
                            setInterval(blinker, 2000);
                        }
                    });


                }
            });

        }

    };

}]); // Controller
