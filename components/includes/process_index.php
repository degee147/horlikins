<?php

function TreatText2($sztext) {
    $_retval = "";
    // return mysql_real_escape_string($sztext);
    return str_replace ( "'", "\\'", str_replace ( "\"", "\\\"", str_replace ( chr ( 13 ), "\\r", str_replace ( chr ( 10 ), "\\n", str_replace ( chr ( 9 ), "\\t", str_replace ( chr ( 0 ), "\\0", $sztext ) ) ) ) ) );
    if (isset ( $sztext )) {
        for($xxx = 1; $xxx <= lenb ( $sztext ); $xxx ++) {
            $b = substr ( $sztext, $xxx - 1, 1 );
            switch ($b) {

                case "'" :
                    $_retval .= "\'";
                    break;

                case "\"" :
                    $_retval .= "\"";
                    break;

                case chr ( 13 ) :
                    $_retval .= "\r";
                    break;

                case chr ( 10 ) :
                    $_retval .= "\n";
                    break;

                case chr ( 9 ) :
                    $_retval .= "\t";
                    break;

                case chr ( o ) :
                    $_retval .= "\0";
                    break;

                default :
                    $_retval .= $b;
                    break;
            }
        }
    }
    return $_retval;
}


if (isset($_POST["main"]) ) {

    $date1 = stripslashes($_POST['startDate']);
    $date2 = stripslashes($_POST['endDate']);

    $rest1 = substr($date1, 0, 15);
    $rest2 = substr($date2, 0, 15);

    $startDate = date("Y-m-d", strtotime($rest1));
    $endDate = date("Y-m-d", strtotime($rest2));


    $response = array("msDate"=>$startDate, "meDate"=>$endDate);
    echo json_encode($response);


}else{
    echo "no value at this time";
}



?>
