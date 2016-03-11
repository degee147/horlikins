<!DOCTYPE html>
<html lang="en" ng-app="myApp">
    <head>

        <!--       <base href="/">-->
        <meta charset="UTF-8">
        <title>Horlikins Event Center</title><!-- Website's title ( it will be shown in browser's tab ), Change the website's title based on your Hotel information -->
        <meta name="description" content="Pinar is Hotel and Resort HTML template."><!-- Add your Hotel short description -->
        <meta name="keywords" content="Responsive,HTML5,CSS3,XML,JavaScript"><!-- Add some Keywords based on your Hotel and your business and separate them by comma -->
        <meta name="author" content="Joseph a, ravistheme@gmail.com">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0, user-scalable=no">
        <link href='http://fonts.googleapis.com/css?family=Lobster%7cRaleway:400,300,100,600,700,800' rel='stylesheet' type='text/css'><!-- Attach Google fonts -->
        <link rel="stylesheet" type="text/css" href="assets/css/styles_2.css"><!-- Attach the main stylesheet file -->
        <link rel="stylesheet" type="text/css" href="assets/css/custom.css"><!-- Attach the main stylesheet file -->
        <!---->


        <link href="assets/spinner/components-md.css" id="style_components" rel="stylesheet" type="text/css"/>
        <?php require("layout/js-includes.php"); ?>

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
        <?php require("layout/top-header.php"); ?>
        <!-- End of Top Header -->

        <!-- Main Header -->
        <header id="main-header">
            <div class="inner-container container">
                <div class="left-sec col-sm-4 col-md-2 clearfix">
                    <!-- Top Logo -->
                    <?php require("layout/top-logo.php"); ?>
                </div>
                <div class="right-sec col-sm-8 col-md-10 clearfix">

                    <!-- Book Now and Main Menu -->
                    <?php //$item = "index"; //require 'layout/menu.php'; ?>
                    <div ng-include="'views/nav.php'">

                    </div>

                    <!-- Menu Handel -->
                    <div id="main-menu-handle" class="hidden-md hidden-lg"><i class="fa fa-bars"></i></div>
                </div>
            </div>
            <div id="mobile-menu-container" class="hidden-md hidden-lg"></div>
        </header>
        <!-- End of Main Header -->

        <!--        <div id="Page_Content" ng-view>-->
        <div id="Page_Content" ui-view></div>

        <!--
<pre>Url: {{ $location.url() }}</pre>
Adding to facId: {{ facId }}
-->

        <!-- Top Footer -->
        <?php require("layout/top-footer.php"); ?>
        <!-- End of Top Footer -->

        <!-- Footer -->
        <?php require("layout/footer.php"); ?>
        <!-- End of Footer -->

        <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js"></script>
        <!-- Include the js files  -->

        <!-- End of js files and codes -->

        <script src="assets/js/app.js"></script>
        <script src="assets/js/directives.js"></script>
        <!--        <script src="assets/spinner/metronic.js" type="text/javascript"></script>-->
        <script src="assets/js/controllers/index.js"></script>
        <script src="assets/js/controllers/about.js"></script>
        <script src="assets/js/controllers/facilities.js"></script>
        <script src="assets/js/controllers/gallery.js"></script>
        <script src="assets/js/controllers/podcast.js"></script>
        <!--        <script src="assets/js/controllers/guest.js"></script>-->
        <script src="assets/js/controllers/contact.js"></script>
        <script src="assets/js/controllers/booking.js"></script>

        <!-- End of js files and codes -->

<!--

        <script>
            function initTwitter () {
                !function(d,s,id){
                    var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}
                }(document,"script","twitter-wjs");
            }

            initTwitter();
        </script>
-->

    </body>
</html>
