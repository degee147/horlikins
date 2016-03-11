<!-- Include Youmax -->
<script src="assets/youmax/jquery.youmax.min.js"></script>

<!-- Include Youmax Styles -->
<link rel="stylesheet" href="assets/youmax/youmax_trend.min.css"/>
<!-- Internal Page Header -->
<div class="internal-page-title about-page" data-parallax="scroll" data-image-src="assets/img/internal-header.jpg">
    <h1>Podcast - <span>Horlikins</span></h1>
    <ol class="breadcrumb"><!-- Internal Page Breadcrumb -->
        <li><a ng-href="#/index">Home</a></li>
        <li class="active">Videos</li>
    </ol>
</div>
<!-- End of Internal Page Header -->
<!-- Include in your body section -->

<div class="main-content container">

    <!-- Page Content -->
    <div class="page-content col-md-12">

        <div id="youmax" class="youmax"></div>

    </div>

</div>


<script type="text/javascript">
    $("#youmax").youmax({

        channel:"https://www.youtube.com/channel/UCs4Z5F1dlUq19pYJUxmEZcw",
        youtube_channel_uploads:[
            {
                name:"Uploads",
                url:"https://www.youtube.com/channel/UCs4Z5F1dlUq19pYJUxmEZcw",
                selected:true
            },
        ],

        autoLoadComments:true,
        userWebsite:"www.horlikins.com",
        loadMode:"paginate-bottom",

    });
</script>
