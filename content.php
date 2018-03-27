<?php 
/*
path to chache JSON File
*/

$cache_path = 'cache/cache.json';
$api_url = "http://rentcafe.com/rentcafeapi.aspx?requestType=apartmentavailability&APIToken=NDY5OTI%3d-XDY6KCjhwhg%3d&propertyCode=p0155985";


if (file_exists($cache_path) && (filemtime($cache_path) > (time() - 60 * 10 ))) {
   // Cache file is less than five minutes old. 
   $data = json_decode(file_get_contents($api_url), true);
} else {
   // Our cache is out-of-date, so load the data from our remote server,
   // and also save it over our cache for next time.
   $file = file_get_contents($api_url);
   file_put_contents($cache_path, $file);
   
}
$data = json_decode($data, true);


?>

