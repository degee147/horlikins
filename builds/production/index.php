<!DOCTYPE html>
<html lang="en" ng-app="myApp">
    <head>

        <!--       <base href="/">-->
        <meta charset="UTF-8">
        <title>Horlikins Event Center</title>
        <!-- Website's title ( it will be shown in browser's tab ), Change the website's title based on your Hotel information -->
        <meta name="description" content="Horlikins Event Center OFficial Website">
        <!-- Add your Hotel short description -->
        <meta name="keywords" content="Horlikins, Event, Center, OFficial, Website, event place, halls, conference halls, horlikins, event centers, portharcourt">
        <!-- Add some Keywords based on your Hotel and your business and separate them by comma -->
        <meta name="author" content="Ken Waribo, kenneth.waribo@cinfores.com">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0, user-scalable=no">
        <link href='http://fonts.googleapis.com/css?family=Lobster%7cRaleway:400,300,100,600,700,800' rel='stylesheet'
              type='text/css'>
        <!-- Attach Google fonts -->


        <!--
<link rel="stylesheet" type="text/css" href="assets/css/styles_2.css">
<link rel="stylesheet" type="text/css" href="assets/css/custom.css">
<link href="assets/css/spinner/components-md.css" id="style_components" rel="stylesheet" type="text/css"/>
-->

        <!-- The above css files will be joined as the one below  -->
        <link href="assets/css/all_styles.css" id="style_components" rel="stylesheet" type="text/css"/>


        <!--     START  JS INCLUDES-->
        <!--
<script type="text/javascript" src="../../components/assets/js/jquery.js"></script>
<script type="text/javascript" src="../../components/assets/js/owl.carousel.min.js"></script>
<script type="text/javascript" src="../../components/assets/js/isotope.pkgd.min.js"></script>
<script type="text/javascript" src="../../components/assets/js/jquery.magnific-popup.min.js"></script>
<script type="text/javascript" src="../../components/assets/js/imagesloaded.pkgd.min.js"></script>


<script type="text/javascript" src="../../components/assets/js/helper.js"></script>
<script type="text/javascript" src="../../components/assets/js/template.js"></script>
<script type="text/javascript" src="../../components/assets/js/jquery.blockUI.js"></script>

<script src="../../components/assets/js/lib/angular/angular.min.js"></script>
<script src="../../components/assets/js/lib/angular/angular-ui-router.min.js"></script>


<script src="../../components/assets/js/lib/angular/angular-route.min.js"></script>
<script src="../../components/assets/js/lib/angular/angular-resource.min.js"></script>
<script src="../../components/assets/js/lib/angular/angular-animate.min.js"></script>
<script src="../../components/assets/dirPagination.js"></script>

-->

        <!--     END  JS INCLUDES -->
        <script src="assets/js/scripts_top.js"></script>
    </head>
    <body class="homepage trans-header sticky white-datepicker">

        <!-- BEGIN PAGE SPINNER -->
        <div ng-spinner-bar class="page-spinner-bar">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
        <!-- END PAGE SPINNER -->


        <!-- Top Header -->
        <div id="top-header">
            <div class="inner-container container">
                <!-- Contact Info -->
                <ul class="contact-info list-inline">
                    <li><i class="fa fa-phone"></i>+234 908 7819045</li>
                    <li><i class="fa fa-envelope-o"></i>info@horlikins.com</li>
                </ul>
            </div>
        </div>
        <!---->

        <!-- End of Top Header -->

        <!-- Main Header -->
        <header id="main-header">
            <div class="inner-container container">
                <div class="left-sec col-sm-4 col-md-2 clearfix">
                    <!-- Top Logo -->
                    <div id="top-logo"><a href="#/index"><img src="assets/img/horlikins/logo.png"></img></a></div>
            </div>
            <div class="right-sec col-sm-8 col-md-10 clearfix">

                <!-- Book Now and Main Menu -->
                <div ng-include="'views/nav.php'"></div>

            </div>
            <!-- Menu Handel -->
            <div id="main-menu-handle" class="hidden-md hidden-lg"><i class="fa fa-bars"></i></div>
            </div>
        </div>
    <div id="mobile-menu-container" class="hidden-md hidden-lg"></div>
    </header>
<!-- End of Main Header -->

<!-- <div id="Page_Content" ng-view>  -->
<div id="Page_Content" ui-view></div>

<!-- Top Footer -->
<!-- Buy Theme -->
<div id="buy-theme">
    <div class="inner-container container">
        <div class="title">A vicinity for top-class events/ <span>Horlikins</span> Event Center</div>
        <a href="#/booking" class="btn btn-secondary">Book Now</a>
    </div>
</div>
<!-- End of Buy Theme -->
<!---->
<div id="top-footer">
    <div id="go-up-box"><i class="fa fa-chevron-up"></i></div>
    <div class="inner-container container">
        <div class="widget col-xs-6 col-md-3">
            <h4>About Horlikins</h4>

            <div class="widget-content" style="text-align: ;">
                Horlikin's Events Center is a state-of-the-art facility that seats a vast number of persons. It is
                handicapped accessible, with a 21st century sound system and also includes special equipment and
                facilities for that special occasion. <br>
                <a href="#/about" class="">Read more..</a>

            </div>
        </div>
        <div class="widget col-xs-6 col-md-3">
            <h4>Newsletter</h4>
            <div class="widget-content">
                <div class="desc">
                    Get our giveaways, offers and updates delivered to your inbox. <br>
                    We respect your privacy and will never spam you. Never.
                </div>
                <form class="news-letter-form">
                    <input type="text" class="email" placeholder="Email">
                    <input type="submit" class="btn btn-default" value="Sign up Now">
                </form>
            </div>
        </div>

        <div class="widget col-xs-6 col-md-3" id="twitter_div">
            <h4 class="margin-bottom-0">Latest Tweets</h4>

            <a class="twitter-timeline" href="https://twitter.com/horlikin" data-widget-id="707125269652447233">Tweets
                by @horlikin</a>
            <script>!function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
                    if (!d.getElementById(id)) {
                        js = d.createElement(s);
                        js.id = id;
                        js.src = p + "://platform.twitter.com/widgets.js";
                        fjs.parentNode.insertBefore(js, fjs);
                    }
                }(document, "script", "twitter-wjs");</script>
        </div>

        <div class="widget col-md-3 get-in-touch">

            <h4>Get in Touch</h4>

            <div class="widget-content">
                <ul>
                    <li><i class="fa fa-map-marker"></i>Plot 5, Eastern Bye-pass, Port Harcourt</li>
                    <li><i class="fa fa-phone"></i>+234 908 7819045</li>
                    <li><i class="fa fa-envelope-o"></i>info@horlinkins.com</li>
                </ul>
                <ul class="list-inline social-icons">
                    <li><a href="http://www.facebook.com/horlikins" target="_blank"><i class="fa fa-facebook"></i></a>
                    </li>
                    <li><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
                    <!-- <li><a href="#"><i class="fa fa-google-plus"></i></a></li>-->
                    <!-- <li><a href="#"><i class="fa fa-skype"></i></a></li>-->
                    <li><a href="https://www.youtube.com/channel/UCs4Z5F1dlUq19pYJUxmEZcw" target="_blank"><i class="fa fa-youtube"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>

<!-- End of Top Footer -->

<!-- Footer -->
<footer id="footer">
    <nav>
        <ul class="list-inline">
            <li><a ng-href="#/index">Home</a></li>
            <li><a ng-href="#/about">About</a></li>
            <li><a ng-href="#/facilities">Facilities</a></li>
            <li><a ng-href="#/gallery">Gallery</a></li>
            <!--<li><a href="guest-book.php">Guest Book</a></li>-->
            <li><a href="http://fm.academy.cinfores.com" class="">Login</a></li>
            <li><a ng-href="#/contact">Contact</a></li>
        </ul>
    </nav>
    <div class="copy-right">
        &copy; <?php echo date("Y"); ?> Horlikins Event Center. All Rights Reserved. Powered by <a href="http://www.cinfores.com" target="_blank">Cinfores Limited</a>
    </div>
</footer>
<!-- End of Footer -->

<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js"></script>
<!-- Include the js files  -->

<!-- End of js files and codes -->

<!--
<script src="../../components/assets/js/app.js"></script>
<script src="../../components/assets/js/directives.js"></script>
-->


<!--        <script src="../../components/assets/spinner/metronic.js" type="text/javascript"></script>-->

<!--
<script src="../../components/assets/js/controllers/index.js"></script>
<script src="../../components/assets/js/controllers/about.js"></script>
<script src="../../components/assets/js/controllers/facilities.js"></script>
<script src="../../components/assets/js/controllers/gallery.js"></script>
<script src="../../components/assets/js/controllers/podcast.js"></script>
-->


<!--        <script src="../../components/assets/js/controllers/guest.js"></script>-->
<!--

<script src="../../components/assets/js/controllers/contact.js"></script>
<script src="../../components/assets/js/controllers/booking.js"></script>
-->

<!-- End of js files and codes -->
<script src="assets/js/scripts_bottom.js"></script>
</body>
</html>
