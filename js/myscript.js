$(document).ready(function() {

$( "div.setting_panel" ).click(function() {
$( this ).toggleClass( "setting_panel_open" );
});


$( ".setting_panel .selectv-1" ).click(function() {
$( ".element-2" ).addClass( "selectedd" );
$( ".element-3" ).removeClass( "selectedd" );
});
$( ".setting_panel .selectv-2" ).click(function() {
$( ".element-3" ).addClass( "selectedd" );
$( ".element-2" ).removeClass( "selectedd" );
});

$( ".body .selectv-1" ).click(function() {
$( ".login_box.v2" ).addClass( "hidee" );
$( ".login_box.v1" ).removeClass( "hidee" );
});
$( ".body .selectv-2" ).click(function() {
$( ".login_box.v1" ).addClass( "hidee" );
$( ".login_box.v2" ).removeClass( "hidee" );
});


});