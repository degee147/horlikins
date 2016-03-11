<!-- Internal Page Header -->
<div class="internal-page-title about-page" data-parallax="scroll" data-image-src="assets/img/internal-header.jpg">
    <h1>Facilities at <span>Horlikins</span></h1>
    <ol class="breadcrumb"><!-- Internal Page Breadcrumb -->
        <li><a ng-href="#/index">Home</a></li>
        <li class="active">Facilities</li>
    </ol>
</div>
<!-- End of Internal Page Header -->
<!---->
<!-- Main Container -->
<div class="main-content container">

    <!-- Page Content -->
    <div class="page-content col-md-12">

        <!-- Rooms Container -->
        <div class="room-container room-list clearfix" id="facilityDiv2">

            <div class="row">
                <div class="col-xs-4">
                    <!--                    <h3>Meals Page: {{ currentPage }}</h3>-->
                </div>
                <div class="col-xs-4">
                    <label for="search">Quick Search:</label>
                    <input ng-model="q" id="search" class="form-control" placeholder="Filter text">
                </div>
                <!--
<div class="col-xs-4">
<label for="search">items per page:</label>
<input type="number" min="1" max="100" class="form-control" ng-model="pageSize">
</div>
-->
            </div>
            <br>


            <!-- Room Boxes -->
            <div class="room-box clearfix" dir-paginate="resp in documents | itemsPerPage: 3  | filter: q">
                <div class="img-container col-xs-6">
                    <img src="http://paago.eventcalender.develop.cinfores.com/uploads/{{resp.image1}}" alt="1">
                    <a ui-sref="booking({facId: resp.fid, facName: resp.facility})" class="btn btn-default">Book Now<!-- More Details --></a>
                </div>
                <div class="details col-xs-6">
                    <div class="title"><a href="#"><span>{{resp.facility}}</span> </a></div>
                    <div class="">
                        {{resp.fdesc}}
                    </div>
                    <a class="book-now-btn btn btn-default btn-sm book-btn" ui-sref="booking({facId: resp.fid, facName: resp.facility})" ng-click="showLoad()">Book Now</a>
                    <div class="price">
                        <span> &#8358;  {{resp.costdays | number:0}}</span>
                        only
                    </div>
                </div>
            </div>


        </div>
        <!-- End of Rooms Container -->


        <!-- Pagination -->
        <div class="pagination-box">


            <dir-pagination-controls></dir-pagination-controls>

            <!--
<ul class="list-inline">
<li class="active"><a href="#"><span>1</span></a></li>
<li><a href="#"><span>2</span></a></li>
<li><a href="#"><span>3</span></a></li>
<li><a href="#"><span>4</span></a></li>
<li><a href="#"><span>5</span></a></li>
<li><a href="#"><i class="fa fa-angle-double-right"></i></a></li>
</ul>
-->
        </div>
        <!-- End of Pagination -->


    </div>

</div>
<script>
    function blinker() {
        $('.blink_me').fadeOut(500).fadeIn(500);
    }

</script>

