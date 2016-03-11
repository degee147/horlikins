myApp.controller('BookingController', ['$scope','$rootScope','$stateParams','$http', function($scope, $rootScope, $stateParams, $http) {

    angular.element(document).ready(function () {

        angular.element(document.querySelector( '.hidden-print' )).hide();
        angular.element(document.querySelector( '.pay_now' )).hide();


        var FormWizard = function () {

            return {
                //main function to initiate the module
                init: function () {
                    if (!jQuery().bootstrapWizard) {
                        return;
                    }

                    //                    function format(state) {
                    //                        if (!state.id) return state.text; // optgroup
                    //                        return "<img class='flag' src='../../assets/global/img/flags/" + state.id.toLowerCase() + ".png'/>&nbsp;&nbsp;" + state.text;
                    //                    }
                    ////
                    //                    $("#country_list").select2({
                    //                        placeholder: "Select",
                    //                        allowClear: true,
                    //                        formatResult: format,
                    //                        formatSelection: format,
                    //                        escapeMarkup: function (m) {
                    //                            return m;
                    //                        }
                    //                    });

                    var form = $('#submit_form');
                    var error = $('.alert-danger', form);
                    var success = $('.alert-success', form);

                    form.validate({
                        doNotHideMessage: true, //this option enables to show the error/success messages on tab switch.
                        errorElement: 'span', //default input error message container
                        errorClass: 'help-block help-block-error', // default input error message class
                        focusInvalid: false, // do not focus the last invalid input
                        rules: {
                            firstname: {
                                minlength: 3,
                                required: true
                            },
                            lastname: {
                                minlength: 3,
                                required: true
                            },
                            email: {
                                required: true,
                                email: true
                            },
                            phone: {
                                digits: true,
                                minlength: 11,
                                maxlength: 11,
                                required: true
                            },
                            addr: {
                                minlength: 3,
                                required: true
                            },
                            booking_for: {
                                minlength: 3,
                                required: true
                            },

                        },

                        messages: { // custom messages for radio buttons and checkboxes
                            'payment[]': {
                                required: "Please select at least one option",
                                minlength: jQuery.validator.format("Please select at least one option")
                            },
                            phone: {
                                required: "Please enter only digits"
                            },
                        },

                        errorPlacement: function (error, element) { // render error placement for each input type
                            if (element.attr("name") == "gender") { // for uniform radio buttons, insert the after the given container
                                error.insertAfter("#form_gender_error");
                            } else if (element.attr("name") == "payment[]") { // for uniform radio buttons, insert the after the given container
                                error.insertAfter("#form_payment_error");
                            } else {
                                error.insertAfter(element); // for other inputs, just perform default behavior
                            }
                        },

                        invalidHandler: function (event, validator) { //display error alert on form submit
                            success.hide();
                            error.show();
                            //    Metronic.scrollTo(error, -200);

                            $('html, body').animate({
                                scrollTop: $(error).offset().top
                                //                                scrollTop: $(error).offset().top
                            }, 200);

                        },

                        highlight: function (element) { // hightlight error inputs
                            $(element)
                                .closest('.form-group').removeClass('has-success').addClass('has-error'); // set error class to the control group
                        },

                        unhighlight: function (element) { // revert the change done by hightlight
                            $(element)
                                .closest('.form-group').removeClass('has-error'); // set error class to the control group
                        },

                        success: function (label) {
                            if (label.attr("for") == "gender" || label.attr("for") == "payment[]") { // for checkboxes and radio buttons, no need to show OK icon
                                label
                                    .closest('.form-group').removeClass('has-error').addClass('has-success');
                                label.remove(); // remove error label here
                            } else { // display success icon for other inputs
                                label
                                    .addClass('valid') // mark the current input as valid and display OK icon
                                    .closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
                            }
                        },

                        submitHandler: function (form) {
                            success.show();
                            error.hide();
                            //add here some ajax code to submit your form or just call form.submit() if you want to submit the form without ajax
                        }

                    });

                    var displayConfirm = function() {
                        $('#tab4 .form-control-static', form).each(function(){
                            var input = $('[name="'+$(this).attr("data-display")+'"]', form);
                            if (input.is(":radio")) {
                                input = $('[name="'+$(this).attr("data-display")+'"]:checked', form);
                            }
                            if (input.is(":text") || input.is("textarea")) {
                                $(this).html(input.val());
                            } else if (input.is("select")) {
                                $(this).html(input.find('option:selected').text());
                            } else if (input.is(":radio") && input.is(":checked")) {
                                $(this).html(input.attr("data-title"));
                            } else if ($(this).attr("data-display") == 'payment') {
                                var payment = [];
                                $('[name="payment[]"]:checked').each(function(){
                                    payment.push($(this).attr('data-title'));
                                });
                                $(this).html(payment.join("<br>"));
                            }
                        });
                    }

                    var handleTitle = function(tab, navigation, index) {
                        var total = navigation.find('li').length;
                        var current = index + 1;
                        // set wizard title
                        $('.step-title', $('#form_wizard_1')).text('Step ' + (index + 1) + ' of ' + total);
                        // set done steps
                        jQuery('li', $('#form_wizard_1')).removeClass("done");
                        var li_list = navigation.find('li');
                        for (var i = 0; i < index; i++) {
                            jQuery(li_list[i]).addClass("done");
                        }

                        if (current == 1) {
                            $('#form_wizard_1').find('.button-previous').hide();
                        } else {
                            $('#form_wizard_1').find('.button-previous').show();
                        }

                        if (current >= total) {
                            $('#form_wizard_1').find('.button-next').hide();
                            $('#form_wizard_1').find('.button-submit').show();
                            displayConfirm();
                        } else {
                            $('#form_wizard_1').find('.button-next').show();
                            $('#form_wizard_1').find('.button-submit').hide();
                            $('#form_wizard_1').find('.hidden-print').hide();
                        }
                        //  Metronic.scrollTo($('.page-title'));
                        $('html, body').animate({
                            scrollTop: $("#HeadBoxTitle").offset().top
                            //                            scrollTop: $(".page-title").offset().top
                        }, 500);


                    }

                    // default form wizard
                    $('#form_wizard_1').bootstrapWizard({
                        'nextSelector': '.button-next',
                        'previousSelector': '.button-previous',
                        onTabClick: function (tab, navigation, index, clickedIndex) {
                            success.hide();
                            error.hide();
                            if (form.valid() == false) {
                                return false;
                            }
                            handleTitle(tab, navigation, clickedIndex);
                        },
                        onNext: function (tab, navigation, index) {
                            success.hide();
                            error.hide();

                            if (form.valid() == false) {
                                return false;
                            }

                            handleTitle(tab, navigation, index);
                        },
                        onPrevious: function (tab, navigation, index) {
                            success.hide();
                            error.hide();

                            handleTitle(tab, navigation, index);
                        },
                        onTabShow: function (tab, navigation, index) {
                            var total = navigation.find('li').length;
                            var current = index + 1;
                            var $percent = (current / total) * 100;
                            $('#form_wizard_1').find('.progress-bar').css({
                                width: $percent + '%'
                            });
                        }
                    });

                    $('#form_wizard_1').find('.button-previous').hide();
                    $('#form_wizard_1 .button-submit').click(function () {
                        //  alert('Finished! Hope you like it :)');
                    }).hide();
                }

            };

        }();
        FormWizard.init();


    });

    jQuery('html,body').animate({scrollTop:0},200);
    $("#main-menu ul li").removeClass("active");

    var myEl1 = angular.element( document.querySelector( '#DisplayedCheckList1' ) );
    var myEl2 = angular.element( document.querySelector( '#DisplayedCheckList2' ) );

    var sd1 = angular.element( document.querySelector( '#startDateValue1' ) );
    var sd2 = angular.element( document.querySelector( '#startDateValue2' ) );


    var ed1 = angular.element( document.querySelector( '#endDateValue1' ) );
    var ed2 = angular.element( document.querySelector( '#endDateValue2' ) );


    $scope.totalCost;
    $scope.displayCost;
    $scope.chkinRawDate;
    $scope.chkoutRawDate;
    $scope.displayStartDate;
    $scope.displayEndDate;
    $scope.chkinMysqlDate;
    $scope.chkoutMysqlDate;
    $scope.Facilities;
    $scope.SelectedFacilitiesToDisplay;
    $scope.SelectedFacilitiesIdMySQL;
    $scope.SelectedFacilitiesCostMySQL;
    $scope.sumTotalArray;
    $scope.DisplayedCheckedList2wayDataBind;



    $scope.in_fname;
    $scope.in_lname;
    $scope.in_email;
    $scope.in_phone;
    $scope.in_addr;
    $scope.spec_req;





    $scope.facId = $stateParams.facId;
    $scope.facName = $stateParams.facName;

    // console.log($rootScope.facId);


    Array.prototype.sum = function (prop) {
        var total = 0;
        for ( var i = 0, _len = this.length; i < _len; i++ ) {
            total += this[i][prop];
        }
        return total;
    };




    $scope.BookingData = [];

    $http.get("http://fm.academy.cinfores.com/includes/api.php?Action=getFacility&ownerid=horlikins")
        .then(function(result) {

        if(result.data.resp.length >= 1){
            $scope.BookingData = result.data.resp;
        }else{
            $("#FacilitiesBlock").html("");
            $("#FacilitiesBlock").html('<h2 class="blink_me" style="text-align:center; color:#50ACE7;">Could not load the requested content.</h2>');
            setInterval(blinker, 2000);

        }

    }, function errorCallback(result) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        $("#FacilitiesBlock").html("");
        $("#FacilitiesBlock").html('<h2 class="blink_me" style="text-align:center; color:#50ACE7;">Could not load the requested content.</h2>');
        setInterval(blinker, 2000);
    });




    $scope.doSomethings = function(){

        $scope.chkinRawDate = $('#chkIndate').datepicker('getDate');
        $scope.chkoutRawDate = $('#chkOutdate').datepicker('getDate');
        //   console.log($scope.chkinRawDate);



        $scope.Facilities={};
        $scope.Facilities.checked=[];
        $scope.Facilities.unchecked=[];

        $("input:checkbox").each(function(){
            var $this = $(this);

            if($this.is(":checked")){
                $scope.Facilities.checked.push($this.attr("id"));
            }else{
                $scope.Facilities.unchecked.push($this.attr("id"));
            }
        });



        $scope.SelectedFacilitiesToDisplay = [];
        $scope.SelectedFacilitiesIdMySQL = [];
        $scope.SelectedFacilitiesCostMySQL = [];

        $.each( $scope.BookingData, function(i,resp){
            if(jQuery.inArray(resp.fid,  $scope.Facilities.checked) !== -1){
                //console.log(resp.name);
                $scope.SelectedFacilitiesToDisplay.push({
                    name: resp.facility,
                    costdays: resp.costdays
                });
                $scope.SelectedFacilitiesIdMySQL.push(resp.fid);
                $scope.SelectedFacilitiesCostMySQL.push(resp.costdays);
            }

        });

        $scope.sumTotalArray = [];
        $scope.sumTotalArray2 = [];

        $.each( $scope.SelectedFacilitiesToDisplay, function(i,resp){
            $scope.sumTotalArray.push(resp.costdays);

        });

        $.each( $scope.SelectedFacilitiesToDisplay, function(i,resp){
            $scope.sumTotalArray2.push({
                num: parseInt(resp.costdays)
            });

        });

        $scope.displayCost = $scope.sumTotalArray2.sum("num");

    };

    $scope.payNow = function(){


    };

    $scope.CheckAvailabilty = function(){


        $('#response').block({
            message: '<p style="margin-bottom:0;"><img src="images/loading.gif" />Checking..</p>',
            css: { border: '3px solid #90C3D4' },
            cursorReset: 'default'
        });


        $scope.doSomethings();


        var jsonString = JSON.stringify($scope.sumTotalArray);

        if ($scope.sumTotalArray.length < 1){
            angular.element( document.querySelector( '#response' ) ).html('<h2 style="text-align: center" class="blink_me">You haven\'t selected any facility</h2>');
            setInterval(blinker, 1500);
        }else if ($scope.chkinRawDate == null){
            angular.element( document.querySelector( '#response' ) ).html('<h2 style="text-align: center" class="blink_me">You haven\'t selected your check-in date</h2>');
            setInterval(blinker, 1500);
        } else if ($scope.chkoutRawDate == null){
            angular.element( document.querySelector( '#response' ) ).html('<h2 style="text-align: center">You haven\'t selected your check-out date</h2>');
        }else{

            $.ajax({
                type: "POST",
                url: "includes/process.php",
                data: {
                    data : jsonString,
                    startDate :  $scope.chkinRawDate,
                    endDate :  $scope.chkoutRawDate
                },
                cache: false,

                success: function(data){

                    //  console.log(data);
                    //  console.log("in success of ajax call "+data);
                    var json = JSON.parse(data);

                    $scope.totalCost = json.total;

                    $scope.chkinMysqlDate = json.msDate;
                    $scope.chkoutMysqlDate = json.meDate;

                    $scope.displayStartDate = json.startDate;
                    $scope.displayEndDate = json.endDate;


                    if($scope.chkoutMysqlDate < $scope.chkinMysqlDate){
                        angular.element( document.querySelector( '#response' ) ).html('<h2 style="text-align: center" class="">Check-out date cannot be earlier than check-in date</h2>');
                        setInterval(blinker, 1500);

                    }else{

                        var url = 'http://fm.academy.cinfores.com/includes/api.php?Action=chkAvailability&fid='+$scope.SelectedFacilitiesIdMySQL.toString()+'&sdate='+ $scope.chkinMysqlDate+'&edate='+ $scope.chkoutMysqlDate+'&ownerid=horlikins';

                        //console.log(url);
                        $.ajax({
                            url: url,
                            cache: false,
                            success: function (data) {
                                $('#response').unblock();
                                var json = JSON.parse(data);
                                // console.log(json.resp);

                                var available;
                                var arr = [];

                                $.each( json.resp, function(i){
                                    arr.push(json.resp[i][0].status);
                                });

                                if(jQuery.inArray("Not_Available", arr) !== -1){//item is in the array
                                    available = false;
                                }

                                if(available == false){
                                    angular.element( document.querySelector('#response') ).html('<h2 style="text-align: center">Not Available</h2>');
                                }else{
                                    angular.element( document.querySelector('#response') ).html('<h2 style="text-align: center">Available</h2>');
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

                }
            });


        }
    };

    $scope.GetCheckedItems = function () {
        // $scope.Message = "Button clicked.";
        // console.log("button clicked");

        $scope.in_fname = angular.element( document.querySelector( '#in_fname' ) ).val();
        $scope.in_lname = angular.element( document.querySelector( '#in_lname' ) ).val();
        $scope.in_email = angular.element( document.querySelector( '#in_email' ) ).val();
        $scope.in_phone = angular.element( document.querySelector( '#in_phone' ) ).val();
        $scope.in_addr = angular.element( document.querySelector( '#in_addr' ) ).val();
        $scope.spec_req = angular.element( document.querySelector( '#message-field' ) ).val();


        $scope.doSomethings();

        //$scope.SelectedFacilitiesIdMySQL.toString();
        //console.log("about to do ajax php addition");
        var jsonString = JSON.stringify($scope.sumTotalArray);
        $.ajax({
            type: "POST",
            url: "includes/process.php",
            data: {
                data : jsonString,
                startDate :  $scope.chkinRawDate,
                endDate :  $scope.chkoutRawDate
            },
            cache: false,

            success: function(data){
                //  console.log("in success of ajax call "+data);
                var json = JSON.parse(data);


                $scope.totalCost = json.total;

                $scope.chkinMysqlDate = json.msDate;
                $scope.chkoutMysqlDate = json.meDate;

                $scope.displayStartDate = json.startDate;
                $scope.displayEndDate = json.endDate;

                sd1.html("");
                sd2.html("");
                ed1.html("");
                ed2.html("");

                sd1.html($scope.displayStartDate);
                sd2.html($scope.displayStartDate);
                ed1.html($scope.displayEndDate);
                ed2.html($scope.displayEndDate);



            }
        });


    };

    $scope.SubmitBooking = function () {



        $('#CompleteBookingResponse').block({
            message: '<p style="margin-bottom:0;"><img src="images/loading.gif" />Processing..</p>',
            //  css: { border: '3px solid #90C3D4' },
            cursorReset: 'default'
        });


        $scope.in_fname = angular.element( document.querySelector( '#in_fname' ) ).val();
        $scope.in_lname = angular.element( document.querySelector( '#in_lname' ) ).val();
        $scope.in_email = angular.element( document.querySelector( '#in_email' ) ).val();
        $scope.in_phone = angular.element( document.querySelector( '#in_phone' ) ).val();
        $scope.in_addr = angular.element( document.querySelector( '#in_addr' ) ).val();
        $scope.spec_req = angular.element( document.querySelector( '#message-field' ) ).val();


        if(($scope.in_fname === "") || ($scope.in_lname === "") || ($scope.in_email === "") || ($scope.in_phone === "") || ($scope.in_addr === "") || ($scope.SelectedFacilitiesToDisplay.length === 0) || ($scope.chkinMysqlDate === "") || ($scope.chkinMysqlDate == "1970-01-01" ) || ($scope.chkoutMysqlDate === "1970-01-01") || ($scope.chkoutMysqlDate === "")){

            angular.element( document.querySelector( '#CompleteBookingResponse' ) ).html('<h2 style="text-align: center; color: red;">One or more required reservation information have not been provided. Please provide all required information and try again.</h2>');

        }else{

            if($scope.chkoutMysqlDate < $scope.chkinMysqlDate){
                angular.element( document.querySelector( '#CompleteBookingResponse' ) ).html('<h2 style="text-align: center; color: red;">Check-out date cannot be earlier than check-in date</h2>');

            }else{

                var url = 'http://fm.academy.cinfores.com/includes/api.php?Action=chkAvailability&fid='+$scope.SelectedFacilitiesIdMySQL.toString()+'&sdate='+ $scope.chkinMysqlDate+'&edate='+ $scope.chkoutMysqlDate+'&ownerid=horlikins';

                //console.log(url);
                $.ajax({
                    url: url,
                    cache: false,
                    success: function (data) {
                        var json = JSON.parse(data);
                        var available;
                        var arr = [];

                        $.each( json.resp, function(i){
                            arr.push(json.resp[i][0].status);
                        });

                        if(jQuery.inArray("Not_Available", arr) !== -1){//item is in the array
                            available = false;
                        }

                        if(available == false){
                            $('#CompleteBookingResponse').unblock();
                            $('#CompleteBookingResponse').html("");
                            $('#CompleteBookingResponse').html('<h2 class="blink_me" style="text-align:center; color:#f50404;">Facility or Facilities not available at this time. Please try a different date.</h2>');
                            setInterval(blinker, 2000);

                        }else{


                            //var url = 'http://paago.eventcalender.develop.cinfores.com/includes/api.php';
                            var url = 'http://fm.academy.cinfores.com/includes/api.php?Action=facilitybooking&ownerid=horlikins&fid='+$scope.SelectedFacilitiesIdMySQL.toString()+'&cost='+$scope.SelectedFacilitiesCostMySQL.toString()+'&sdate='+ $scope.chkinMysqlDate+'&edate='+ $scope.chkoutMysqlDate +'&custid=cid&surname='+ $scope.in_fname +'&firstname='+ $scope.in_lname +'&email=' + $scope.in_email +'&phone='+ $scope.in_phone +'&address='+ $scope.in_addr +'&spec_req='+ $scope.spec_req;

                            console.log(url);

                            $.ajax({
                                url: url,
                                cache: false,
                                //data: {
                                //    "Action": "facilitybooking",
                                //    "ownerid": "horlikins",
                                //    "fid": $scope.SelectedFacilitiesIdMySQL.toString(),
                                //    "cost": $scope.totalCost,
                                //    "sdate": $scope.chkinMysqlDate,
                                //    "edate": $scope.chkoutMysqlDate,
                                //    "custid": "cid",
                                //    "surname": $scope.in_fname,
                                //    "firstname": $scope.in_lname,
                                //    "email": $scope.in_email,
                                //    "phone": $scope.in_phone,
                                //    "address": $scope.in_addr,
                                //    "spec_req": $scope.spec_req
                                //},
                                success: function (data) {
                                    $('#CompleteBookingResponse').unblock();
                                    var json = JSON.parse(data);

                                    var success = [];
                                    var fail = [];
                                    //  console.log(json.resp.allresp);
                                    for(var i in json.resp.allresp){
                                        if(json.resp.allresp[i] == "ok"){
                                            success.push(i);
                                        }else if(json.resp.allresp[i] == "error"){
                                            fail.push(i);
                                        }
                                    }


                                    //function getAllIndexes(arr, val) {
                                    //    var indexes = [], i;
                                    //    for(i = 0; i < arr.length; i++)
                                    //        if (arr[i] === val)
                                    //            indexes.push(i);
                                    //    return indexes;
                                    //}
                                    //
                                    //var indexes = getAllIndexes(json.resp.allresp, "ok");

                                    var successful = [];
                                    $.each( success, function(i){
                                        successful.push($scope.SelectedFacilitiesToDisplay[i].name);
                                    });

                                    var failed = [];
                                    $.each( fail, function(i){
                                        failed.push($scope.SelectedFacilitiesToDisplay[i].name);
                                    });

                                    angular.element( document.querySelector( '#CompleteBookingResponse' ) ).html('');
                                    if (fail.length === 0) {//all was successful
                                        angular.element( document.querySelector( '#CompleteBookingResponse' ) ).html('<h3 style="text-align: center; color: green;">Your reservation has been made successfully!</h3><h2 style="text-align: center; color: green;">Transaction ID: '+json.resp.transaction_id+'</h2>');
                                        angular.element( document.querySelector( '.hidden-print' ) ).show();
                                        angular.element( document.querySelector( '.pay_now' ) ).show();
                                        angular.element( document.querySelector( '.button-submit') ).hide();
                                    }else{
                                        angular.element( document.querySelector( '#CompleteBookingResponse' ) ).html('<h2 style="text-align: center;">Your reservation(s) have been made, however the reservation(s) for '+ failed.toString() +' was not successful</h2>');
                                    }

                                },
                                error: function (resp) {
                                    $('#CompleteBookingResponse').unblock();
                                    $('#CompleteBookingResponse').html("");
                                    $('#CompleteBookingResponse').html('<h2 class="blink_me" style="text-align:center; color:#f50404;">Could not complete reservation at this time. </h2>');
                                    setInterval(blinker, 2000);
                                }
                            });

                        }

                    },
                    error: function (resp) {
                        $('#CompleteBookingResponse').unblock();
                        $('#CompleteBookingResponse').html("");
                        $('#CompleteBookingResponse').html('<h2 class="blink_me" style="text-align:center; color:#f50404;">Could not complete reservation at this time. </h2>');
                        setInterval(blinker, 2000);
                    }
                });
            }
        }
    };

    jQuery(document).on('click', '.goToConfirm', function (e) {
        e.preventDefault();
        $( "#booking-tabs" ).children().removeClass('active');
        $( "#BookingConfirm" ).addClass('active');
        $('html, body').animate({
            scrollTop: $("#HeadBoxTitle").offset().top
            // scrollTop: $(".page-title").offset().top
        }, 500);

    });


}]); // Controller
