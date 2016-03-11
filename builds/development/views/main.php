<!-- Top Slider and Booking form -->
<div id="home-top-section">

    <!-- Main Slider -->
    <div id="main-slider">
        <div class="items">
            <img src="assets/img/slider/crystal-silver-chairs.jpg" alt="3"/><!-- Change the URL section based on your image\'s name -->
        </div>
        <div class="items">
            <img src="assets/img/slider/outside-view.jpg" alt="3"/>
        </div>
        <!--    <div class="items">
<img src="images/horlikins/img3.jpg" alt="4"/>
</div>
<div class="items">
<img src="assets/img/slider/2.jpg" alt="2"/>
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
<!-- Gallery Container -->
<div class="gallery-container gallery-masonry">

    <!-- Gallery Container -->
    <div class="gallery-container">
        <div class="sort-section">
            <div class="sort-section-container">
                <div class="sort-handle">Filters</div>
                <ul class="list-inline">
                    <li><a href="#" data-filter="*" class="active">All</a></li>
                    <li><a href="#" data-filter=".rts">Red Table Setup</a></li>
                    <li><a href="#" data-filter=".views">Views</a></li>
                    <li><a href="#" data-filter=".bts">Blue Table Setup</a></li>
                    <li><a href="#" data-filter=".oe">Ongoing Event</a></li>
                </ul>
            </div>
        </div>
        <ul class="image-main-box clearfix">
            <li class="item col-xs-6 col-md-3 rts">
                <figure>
                    <img src="assets/img/gallery/DSC_0722-Edit.jpg" alt="11"/>
                    <a href="assets/img/gallery/DSC_0722-Edit.jpg" class="more-details" data-title="Red Table Setup">Enlarge</a>
                    <figcaption>
                        <h4><span>Red </span> Table Setup</h4>
                    </figcaption>
                </figure>
            </li>
            <li class="item col-xs-6 col-md-3 rts">
                <figure>
                    <img src="assets/img/gallery/DSC_0723-Edit.jpg" alt="11"/>
                    <a href="assets/img/gallery/DSC_0723-Edit.jpg" class="more-details" data-title="Red Table Setup">Enlarge</a>
                    <figcaption>
                        <h4><span>Red </span> Table Setup</h4>
                    </figcaption>
                </figure>
            </li>

            <li class="item col-xs-6 col-md-6 views">
                <figure>
                    <img src="assets/img/gallery/DSC_0602-Edit.jpg" alt="11"/>
                    <a href="assets/img/gallery/DSC_0602-Edit.jpg" class="more-details" data-title="Outside View">Enlarge</a>
                    <figcaption>
                        <h4><span>Outside</span> View</h4>
                    </figcaption>
                </figure>
            </li>
            <li class="item col-xs-6 col-md-3 views">
                <figure>
                    <img src="assets/img/gallery/DSC_0626-Edit.jpg" alt="11"/>
                    <a href="assets/img/gallery/DSC_0626-Edit.jpg" class="more-details" data-title="Outside View">Enlarge</a>
                    <figcaption>
                        <h4><span>Outside</span> View</h4>
                    </figcaption>
                </figure>
            </li>
            <li class="item col-xs-6 col-md-3 rts">
                <figure>
                    <img src="assets/img/gallery/DSC_0720-Edit.jpg" alt="11"/>
                    <a href="assets/img/gallery/DSC_0720-Edit.jpg" class="more-details" data-title="Red Table Setup">Enlarge</a>
                    <figcaption>
                        <h4><span>Red </span> Table Setup</h4>
                    </figcaption>
                </figure>
            </li>
            <li class="item col-xs-6 col-md-3 bts">
                <figure>
                    <img src="assets/img/gallery/DSC_0729-Edit.jpg" alt="11"/>
                    <a href="assets/img/gallery/DSC_0729-Edit.jpg" class="more-details" data-title="Blue Table Setup">Enlarge</a>
                    <figcaption>
                        <h4><span>Blue</span> Table Setup</h4>
                    </figcaption>
                </figure>
            </li>
            <li class="item col-xs-6 col-md-3 views">
                <figure>
                    <img src="assets/img/gallery/DSC_0733-Edit.jpg" alt="11"/>
                    <a href="assets/img/gallery/DSC_0733-Edit.jpg" class="more-details" data-title="Hall Entrance">Enlarge</a>
                    <figcaption>
                        <h4><span>Hall</span> Entrance</h4>
                    </figcaption>
                </figure>
            </li>
            <li class="item col-xs-6 col-md-3 rts">
                <figure>
                    <img src="assets/img/gallery/DSC_0736-Edit.jpg" alt="11"/>
                    <a href="assets/img/gallery/DSC_0736-Edit.jpg" class="more-details" data-title="Red Table Setup">Enlarge</a>
                    <figcaption>
                        <h4><span>Red </span> Table Setup</h4>
                    </figcaption>
                </figure>
            </li>
            <li class="item col-xs-6 col-md-3 oe">
                <figure>
                    <img src="assets/img/gallery/DSC_0915-Edit.jpg" alt="11"/>
                    <a href="assets/img/gallery/DSC_0915-Edit.jpg" class="more-details" data-title="Ongoing Event">Enlarge</a>
                    <figcaption>
                        <h4><span>Ongoing</span> Event</h4>
                    </figcaption>
                </figure>
            </li>
            <li class="item col-xs-6 col-md-3 bts">
                <figure>
                    <img src="assets/img/gallery/DSC_0737-Edit.jpg" alt="11"/>
                    <a href="assets/img/gallery/DSC_0737-Edit.jpg" class="more-details" data-title="Blue Table Setup">Enlarge</a>
                    <figcaption>
                        <h4><span>Blue</span> Table Setup</h4>
                    </figcaption>
                </figure>
            </li>
            <li class="item col-xs-6 col-md-3 views">
                <figure>
                    <img src="assets/img/gallery/IMG-20160107-WA0002.jpg" alt="11"/>
                    <a href="assets/img/gallery/IMG-20160107-WA0002.jpg" class="more-details" data-title="Ongoing Event">Enlarge</a>
                    <figcaption>
                        <h4><span>Outside</span> View</h4>
                    </figcaption>
                </figure>
            </li>
            <li class="item col-xs-6 col-md-6 views">
                <figure>
                    <img src="assets/img/gallery/DSC_0748-Edit.jpg" alt="11"/>
                    <a href="assets/img/gallery/DSC_0748-Edit.jpg" class="more-details" data-title="Stage FrontView">Enlarge</a>
                    <figcaption>
                        <h4><span>Stage</span> FrontView</h4>
                    </figcaption>
                </figure>
            </li>
            <li class="item col-xs-6 col-md-6 views">
                <figure>
                    <img src="assets/img/gallery/IMG-20160107-WA0006.jpg" alt="11"/>
                    <a href="assets/img/gallery/IMG-20160107-WA0006.jpg" class="more-details" data-title="Ongoing Event">Enlarge</a>
                    <figcaption>
                        <h4><span>Outside</span> View</h4>
                    </figcaption>
                </figure>
            </li>

            <li class="item col-xs-6 col-md-3 views">
                <figure>
                    <img src="assets/img/gallery/DSC_0750-Edit.jpg" alt="11"/>
                    <a href="assets/img/gallery/DSC_0750-Edit.jpg" class="more-details" data-title="Stage FrontView">Enlarge</a>
                    <figcaption>
                        <h4><span>Stage</span> FrontView</h4>
                    </figcaption>
                </figure>
            </li>

            <li class="item col-xs-6 col-md-3 oe">
                <figure>
                    <img src="assets/img/gallery/DSC_0952-Edit.jpg" alt="11"/>
                    <a href="assets/img/gallery/DSC_0952-Edit.jpg" class="more-details" data-title="Ongoing Event">Enlarge</a>
                    <figcaption>
                        <h4><span>Ongoing</span> Event</h4>
                    </figcaption>
                </figure>
            </li>

        </ul>
    </div>
</div>
<!-- End of Gallery Container -->
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
</script>
