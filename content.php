<?php 
/*
path to cache JSON File
*/
$cache_path = 'cache/cache.json';
$api_url = "http://rentcafe.com/rentcafeapi.aspx?requestType=apartmentavailability&APIToken=NDY5OTI%3d-XDY6KCjhwhg%3d&propertyCode=p0155985";

// Cache file not older than 10 mins. 
if (file_exists($cache_path) && (filemtime($cache_path) > (time() - 60 * 10 ))) {
   
   $data = json_decode(file_get_contents($api_url), true);
} else {
  
   $file = file_get_contents($api_url);
   file_put_contents($cache_path, $file);
   
}
$data = json_decode($data, true);


?>

