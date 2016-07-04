<!--<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>-->
<script type="text/javascript" src="assets/js/bootstrap/bootstrap.min.js"></script>
<div angular-lazy-load>
    <!-- Top Slider and Booking form -->
    <div id="home-top-section">

        <!-- Main Slider -->
        <div id="main-slider">
            <div class="items">
                <img data-src="assets/img/slider/crystal-silver-chairs.jpg" alt="3"/><!-- Change the URL section based on your image\'s name -->
            </div>
            <div class="items">
                <img data-src="assets/img/slider/car-pack-new.jpg" alt="3"/><!-- Change the URL section based on your image\'s name -->
            </div>
            <div class="items">
                <img data-src="assets/img/slider/outside-view.jpg" alt="3"/>
            </div>
            <div class="items">
                <img data-src="assets/img/slider/interior-new.jpg" alt="3"/>
            </div>
            <!--    <div class="items">
<img data-src="images/horlikins/img3.jpg" alt="4"/>
</div>
<div class="items">
<img data-src="assets/img/slider/2.jpg" alt="2"/>
</div> -->
        </div>

        <!-- Booking Form -->
        <div class="booking-form-container container">
            <div id="main-booking-form" class="style-2">
                <h2>Book a <span>Facility</span></h2>
                <form class="booking-form clearfix" action="#"><!-- Do Not remove the classes -->
                    <div class="input-daterange clearfix">
                        <div class="booking-fields col-xs-6 col-md-12">
                            <input placeholder="Choose check in date" class="datepicker-fields check-in" type="text" name="start" id="chkIndate" /><!-- Date Picker field ( Do Not remove the "datepicker-fields" class ) -->
                            <i class="fa fa-calendar"></i><!-- Date Picker Icon -->
                        </div>
                        <div class="booking-fields col-xs-6 col-md-12">
                            <input placeholder="Choose check out date" class="datepicker-fields check-out" type="text" name="end"
                                   id="chkOutdate"/>
                            <i class="fa fa-calendar"></i>
                        </div>
                    </div>
                    <div class="booking-fields col-xs-6 col-md-12" id="divToPutSelect">
                        <select name="facSelect" id="SelectFacilities" ng-selected="resp.facility">
                            <option value="">Facilities</option>
                            <option ng-repeat="resp in indexData" value="{{resp.fid}}">{{resp.facility}}</option>
                        </select>

                    </div>
                    <div class="booking-button-container">
                        <!--                    <input class="btn btn-default" value="Check Availability" type="submit"/>-->
                        <!-- Submit button -->
                        <a class="btn btn-default btn-block checkAvail" ng-click="CheckAvailabilty()">Check Availability</a>
                    </div>
                    <div id="response" style="margin-top: 20px;"></div>
                </form>
            </div>
        </div>
    </div>
    <!-- End of Top Slider and Booking form -->

    <div class="container">
<!--        <h2>Modal Example</h2>-->
        <!-- Trigger the modal with a button -->
<!--        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>-->

        <!-- Modal -->
        <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">50% Discount Offering</h4>
                    </div>
                    <div class="modal-body">
<!--                        <p>This is a large modal.</p>-->
                        <img src="assets/img/discount.jpg" alt="">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<!-- Luxury Rooms -->
<div id="luxury-rooms">
    <!-- Heading box -->
    <div class="heading-box">
        <h2>Our <span>Facilities</span></h2><!-- Title -->
        <div class="subtitle">Best facilities at best prices</div><!-- Subtitle -->
    </div>


    <!-- Room Box Container -->
    <div class="room-container container" id="facilityDiv">
        <!-- Room box -->
        <div class="room-boxes" dir-paginate="resp in indexData | itemsPerPage: 2" ng-class="{right: $index % 2 === 0}">
            <img src="http://paago.eventcalender.develop.cinfores.com/uploads/{{resp.image1}}" alt="{{resp.facility}}" class="room-img">
            <div class="room-details col-xs-6 col-md-4">
                <div class="title">{{resp.facility}}</div><!-- Room title -->
                <div class="description"><!-- Room Description -->
                    {{resp.fdesc}}
                </div>
                <a class="btn btn-default" ui-sref="booking({facId: resp.fid, facName: resp.facility})" ng-click="showLoad()">Book Now</a>
                <!-- <a class="btn btn-default" ng-href="#/booking/{{resp.fid}}/{{resp.facility}}">Book Now</a>-->
            </div>
            <div class="price-container col-xs-6 col-md-8">
                <div class="price">
                    <span> &#8358; {{resp.costdays | number:0}}</span>
                    only
                </div>
            </div>

        </div>
        <div class="pagination-box" style="margin-bottom: -80px;">
            <dir-pagination-controls></dir-pagination-controls>
        </div>
    </div>
</div>
<!-- End of Luxury Rooms -->

<!-- Special Packages -->
<!-- End of Special Packages -->

<div class="heading-box">
    <h2>Take a <span>Peek</span></h2><!-- Title -->
</div>

<!--    <div ng-include="'views/gallery_view.php'"></div>-->
<?php include('gallery_view.php'); ?>
</div>
<script type="text/javascript" src="assets/js/template.js"></script>

<script>
    // Main Slider
    jQuery("#main-slider").owlCarousel({
        navigation : !1,
        singleItem : !0,
        addClassActive : !0,
        autoPlay : !0,
        mouseDrag : !1,
        touchDrag : !1,
    });

    $( document ).ready(function() {

         //   console.log("READY");
            $("#myModal").modal();

    });
</script>
