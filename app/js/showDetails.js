var host = window.location.origin + '/';

window.onload = function(e) {
     $.ajax({
        type : "GET",
        url : host + "showDetails",
        success : function(result) {
            for (var i=0; i<result.length; i++) {
                var sl = i;
                $('#detailList').append("<tr><td>" + i + "</td><td>" + result[i].name + "</td><td>" + result[i].blood_group + "</td><td>" + result[i].age + "</td><td>" + result[i].mobile + "</td><td> " + result[i].address + " </td></tr>");
            }
        },
        error :function (err) {
            console.log(err);
        }
    });
}

var homeRedirect = function() {
    window.location=host;
}
