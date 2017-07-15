/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    // button: search 
    $("#search").click(function () {
        var searchTerm = $("#searchTerm").val();
        var url = "https://pl.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
        
        $.ajax({
            type: "GET",
            url: url,
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            success: function (data) {
                $("#output").html("");
                for (var i = 0; i < data[1].length; i++) {
                    $("#output").append("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
                }
                $("#searchTerm").val("");
            },
            error: function (errorMessage) {
                alert("errorMessage");
            }
        }); // end ajax
    }); // end button: search function
    
    // search on keypress function
    $("#searchTerm").keypress(function (enter) {
            if(enter.which == 13) {
                $("#search").click();
            }
        }); // end keypress function
}); // end jquery ready function