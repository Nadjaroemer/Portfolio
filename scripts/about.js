$(function() {
    //jeg skjuler den ekstra text
    const xtraText = $("#skjult_tekst");
    xtraText.css("display", "none");

    //jeg vælger min show-more-comments knap
    const readMore = $("#read_more_knap");
    const readLess = $("#read_less_knap");

    $("#read_more_knap").click(function() {
        $(xtraText).slideToggle();
        readMore.hide();
        readLess.show();
    });

    $("#read_less_knap").click(function() {
        $(xtraText).hide();
        readLess.hide();
        readMore.show();
    });
});