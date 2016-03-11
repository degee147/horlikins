<link href=assets/css/components.css rel=stylesheet type=text/css><style>

    #booking-tab-contents {
        padding: 0;
        margin-bottom: 0;
    }
    .form .form-body {
        padding: 0;
    }
    #booking-tabs li a {
        /* border: 0; */
        border-bottom: 0;
        /*    border-bottom: 3px solid #333333;*/

    }
    .portlet.box > .portlet-title {
        border-bottom: 10px solid #eee;
    }

    .portlet.box.blue > .portlet-title {
        background-color: #4b8df8;
    }

    .help-block {
        color: red;
    }

    td.active{
        background: #50ACE7 !important;
    }

</style><div class="internal-page-title about-page" data-parallax=scroll data-image-src=assets/img/booking-header.jpg><h1>Book <span>Facility</span></h1><ol class=breadcrumb><li><a ng-href=#/index>Home</a></li><li class=active>Book Facility</li></ol></div><div id=booking-page-content><div class="booking-container container"><div class=heading-box><h2 id=HeadBoxTitle>Book <span>Now</span></h2><h3 id=HeadBoxTitle ng-show="facName != null">You selected <span>{{facName}}</span></h3></div><div class=main-booking-description id=facDesc></div><div class=row><div class=col-md-12><div class="portlet box blue" id=form_wizard_1><div class=portlet-title><div class=caption><i class="fa fa-gift"></i> Facility Booking - <span class=step-title>Step 1 of 3</span></div></div><div class="portlet-body form"><form action=# class=form-horizontal id=submit_form method=POST><div class=form-wizard><div class=form-body><ul class="nav nav-pills nav-justified steps" id=booking-tabs><li><a href=#booking-choose-date data-toggle=tab onclick="return false;" class=step><span class=number>1</span> <span class=title>Choose <b>Date</b> and <b>Facilities</b></span></a></li><li><a href=#booking-reservation data-toggle=tab onclick="return false;" class=step ng-click=GetCheckedItems()><span class=number>2</span><span class=title>Reservation</span></a></li><li><a href=#booking-confirmation data-toggle=tab onclick="return false;" class=step ng-click=GetCheckedItems()><span class=number>3</span><span class=title>Confirmation</span></a></li></ul><div id=bar class="progress progress-striped" role=progressbar><div class="progress-bar progress-bar-success"></div></div><div id=booking-tab-contents class=tab-content><div class="alert alert-danger display-none"><button class=close data-dismiss=alert></button> You have some form errors. Please check below.</div><div class="alert alert-success display-none"><button class=close data-dismiss=alert></button> Your form validation is successful!</div><script>
                                            $(function() {
                                                $( "#chkIndate, #chkOutdate" ).datepicker({
                                                    format : "yyyy-mm-dd",
                                                    autoclose : true,
                                                    startDate : new Date()
                                                });
                                            });
                                        </script><div class="tab-pane fadeInUp in active clearfix" id=booking-choose-date><div><div class="input-daterange booking-dates col-xs-12 col-lg-8"><div class="col-xs-12 col-sm-6" id=chkIndate><h4><b>Start</b> date</h4></div><div class="col-xs-12 col-sm-6" id=chkOutdate><h4><b>End</b> date</h4></div></div><div class="more-details-container col-xs-12 col-lg-4"><h4><b>Other</b> details</h4><div class="room-box col-xs-12"><a class="btn btn-default btn-block checkAvail" ng-click=CheckAvailabilty()>Check Availability</a><div id=response style="margin-top: 20px;"></div></div></div></div><div class=heading-box><h2>Select preferred facilities ... then "Check Availablity"</h2></div><div class="room-container room-grid clearfix" id=FacilitiesBlock><div class=pagination-box style="margin-top: -80px"><dir-pagination-controls></dir-pagination-controls></div><div class="room-box col-xs-6" dir-paginate="resp in BookingData | itemsPerPage: 4"><div class=img-container><div class=check-box-container><input type=checkbox value=1 id={{resp.fid}} ng-checked="{{facId == resp.fid}}"> <label for={{resp.fid}}><span></span> Select This <b>Facility</b></label></div><img src=http://paago.eventcalender.develop.cinfores.com/uploads/{{resp.image1}} alt={{resp.facility}}></div><div class=details><div class=title><a href=#><span>{{resp.facility}}</span></a></div><div class=desc>{{resp.fdesc}}</div><div class=price><span>&#8358;{{resp.costdays | number:0}}</span> Only</div></div></div></div></div><div class="tab-pane fadeInUp clearfix" id=booking-reservation><div class="reservation-summary col-md-6"><h4>Reservation <b>Summary</b></h4><div class=info-boxes><div class=title><span>Date <b>Info</b></span></div><ul><li><div class=info>Start date :</div><div class=value id=startDateValue1></div></li><li><div class=info>End date :</div><div class=value id=endDateValue1></div></li></ul><div class=title><span>Facilities <b>Info</b></span></div><ul id=DisplayedCheckList1><li ng-repeat="val in SelectedFacilitiesToDisplay"><div class=info>{{val.name}}</div><div class=value>&#8358;{{val.costdays | number:0}}</div></li></ul><div class=total-cost><div class=info>Total Cost :</div><div class=value><span>&#8358;</span>{{displayCost | number:0}}</div></div></div></div><div class="reservation-info col-md-6"><h4>Reservation <b>Info</b></h4><p ng-show=message>{{ message }}</p><p>Fields marked with astericks (*) in placeholder are cumpulsory</p><form id=resInfoForm name=myform method=post class=form-horizontal ng-submit=register() novalidate><div class=col-md-6><div class=field-container><input type=text class=form-control placeholder="First Name *" id=in_fname name=firstname ng-model=user.firstname></div><div class=field-container><input type=text placeholder="Last Name *" id=in_lname name=lastname ng-model=user.lastname></div><div class=field-container><input type=email placeholder="Email *" id=in_email name=email ng-model=user.email></div><div class=field-container><input type=number placeholder="Phone *" id=in_phone name=phone ng-model=user.phone></div><div class=field-container><input type=text placeholder="Address *" id=in_addr name=addr ng-model=user.addr></div><div class=field-container><input type=text placeholder="Who are you booking for? *" id=booking_for name=booking_for ng-model=user.booking_for></div></div><div class=col-md-6><div class="field-container message-field"><textarea id=message-field placeholder="Special Requirements" name=spec_req ng-model=user.spec></textarea></div></div></form></div></div><div class="tab-pane fadeInUp clearfix" id=booking-confirmation><div id=printableArea><img src=assets/img/horlikins/logo.png alt=Logo style="float: right; margin-top: -20px; margin-right: 50px;"><h3>Confirmation!</h3><div class=description>Please review your booking information. Go back and make modifications if you have to.</div><div class="reservation-summary col-md-6 left"><h4>Reservation <b>Summary</b></h4><div class=info-boxes><div class=title><span>Date <b>Info</b></span></div><ul><li><div class=info>Check in :</div><div class=value id=startDateValue2></div></li><li><div class=info>Check out :</div><div class=value id=endDateValue2></div></li></ul><div class=title><span>Facilities <b>Info</b></span></div><ul id=DisplayedCheckList2><li ng-repeat="val in SelectedFacilitiesToDisplay"><div class=info>{{val.name}}</div><div class=value>&#8358;{{val.costdays | number:0}}</div></li></ul><div class=total-cost><div class=info>Total Cost :</div><div class=value><span>&#8358;</span>{{displayCost | number:0}}</div></div></div></div><div class="reservation-info col-md-6 right"><h4>Reservation <b>Info</b></h4><div class=col-md-12><ul><li><div class=info>First Name :</div><div class="value firstname_display">{{ user.firstname }}</div></li><li><div class=info>Last Name :</div><div class="value lastname_display">{{ user.lastname }}</div></li><li><div class=info>Email :</div><div class="value email_display">{{ user.email }}</div></li><li><div class=info>Phone :</div><div class="value phone_display">{{ user.phone }}</div></li><li><div class=info>Address :</div><div class="value add_display">{{ user.addr }}</div></li><li><div class=info>Who you are booking for :</div><div class="value booking_for">{{ user.booking_for }}</div></li></ul><ul><li><div class=info>Special Requirements :</div><div class="value spec_req_display">{{ user.spec }}</div></li></ul></div></div><div class=col-md-12><hr></div><div class=col-md-12 style="text-align: center"><div id=CompleteBookingResponse style="text-align:center; margin-bottom: 40px;"></div></div></div></div></div></div><div class="form-actions fluid"><div class=row><div class=col-md-12><div class="col-md-offset-4 col-md-8"><a href=javascript:; class="btn default button-previous"><i class=m-icon-swapleft></i> Back</a> <a href=javascript:; class="btn blue button-next" ng-click=GetCheckedItems()>Continue <i class="m-icon-swapright m-icon-white"></i></a> <a href=javascript:; class="btn green button-submit" ng-click=SubmitBooking()>Complete Booking <i class="m-icon-swapright m-icon-white"></i></a> <a class="btn blue hidden-print" onclick=printDiv()>Print Confirmation <i class="fa fa-print"></i></a><form action=https://stageserv.interswitchng.com/test_paydirect/pay class="btn btn-danger pay_now"><input name=product_id type=hidden value=XX> <input name=amount type=hidden value={{displayCost}}> <input name=currency type=hidden value=566> <input name=site_redirect_url type=hidden value=http://horlikins.com/receipt.php> <input name=site_name type=hidden value=http://www.horlikins.com> <input name=cust_name type=hidden value="{{user.firstname}} {{user.lastname}}"> <input name=txn_ref type=hidden value=XXXAFTXXX> <input name=pay_item_id type=hidden value=XXXXX> <input name=hash type=hidden value=BB292DF9268F05CB9CBBC5E0C13CC1B13ACA34DC> <button class="btn btn-danger" style="padding: 0">Pay Now</button></form></div></div></div></div></div></form></div></div></div></div></div></div><script type=text/javascript src=assets/js/bootstrap/tab.js></script><script type=text/javascript src=assets/js/template.js></script><script type=text/javascript src=assets/js/jquery.validate.min.js></script><script type=text/javascript src=assets/js/additional-methods.min.js></script><script type=text/javascript src=assets/js/jquery.bootstrap.wizard.min.js></script><script>


    function printDiv() {
        var contents = $("#printableArea").html();
        var frame1 = $('<iframe />');
        frame1[0].name = "frame1";
        frame1.css({ "position": "absolute", "top": "-1000000px" });
        $("body").append(frame1);
        var frameDoc = frame1[0].contentWindow ? frame1[0].contentWindow : frame1[0].contentDocument.document ? frame1[0].contentDocument.document : frame1[0].contentDocument;
        frameDoc.document.open();
        //Create a new HTML document.
        frameDoc.document.write('<html><head><title>DIV Contents</title>');
        frameDoc.document.write('</head><body>');
        //Append the external CSS file.
        //  frameDoc.document.write('<link href="assets/print.css" rel="stylesheet" type="text/css" />');
        frameDoc.document.write('<style>.left{float: left;}.right{float: right;}</style>');
        //Append the DIV contents.
        frameDoc.document.write(contents);
        frameDoc.document.write('</body></html>');
        frameDoc.document.close();
        setTimeout(function () {
            window.frames["frame1"].focus();
            window.frames["frame1"].print();
            frame1.remove();
        }, 500);
    }


    //    function printDiv(divName) {
    //        var printContents = document.getElementById(divName).innerHTML;
    //        var originalContents = document.body.innerHTML;
    //
    //        document.body.innerHTML = printContents;
    //
    //        window.print();
    //
    //        document.body.innerHTML = originalContents;
    //    }

</script>
