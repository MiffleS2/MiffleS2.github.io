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

            //copied this code from the murach slides, don't know if I was allowed to but I think I was supposed to?
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