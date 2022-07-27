$(document).ready(function () {
    $(".tab-link").click(function () {
        console.log($(this));
        var getTab = $(this).data('tab');
        console.log(getTab);
        $(".item__small").removeClass("active");
        $("#" + getTab).addClass("active");
        console.log($("#" + getTab));

        // var getTab = $(this).data('tab');
        // var getId = $("#" + getTab);
        // $(".item__small").not(getId).hide();
        // getId.show();
    });
});