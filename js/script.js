/*jslint browser: true*/
/*global $, jQuery, alert*/

$(function () {

    $("#menubar").hover(
        function () {
            $("#menubar").width(200);
        },
        function () {
            $("#menubar").width(50);
        }
    );
    
});
