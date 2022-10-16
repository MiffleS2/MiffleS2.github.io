$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "team.json",
        beforeSend: function () {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function (data) {
            $("#team").html("");


            $.getJSON("team.json", function (data) {
                $.each(data, function () {
                    $.each(this, function (key, value) {
                        $("#team").append(
                            "Name: " + value.name + "<br>"
                            + "Title: " + value.title + "<br>" +
                            "Bio: " + value.bio + "<br><br>"
                        );
                    });
                });
            });
        }
    });
});