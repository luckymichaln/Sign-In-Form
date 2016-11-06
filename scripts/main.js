var $icon = $('svg');
var $input = $('input');
var $hint = $('.hint');
var $submit = $('.btn-submit');

$input.on('focus', function(e) {
    var target = $(e.target);
    var parent = target.closest('fieldset');
    parent.find($hint).addClass('visible');
});

$input.on('blur', function(e) {
    var target = $(e.target);
    var parent = target.closest('fieldset');
    var visibleHint = parent.find($hint);

    if (target.val() > 0) {
        visibleHint.addClass('visible');

    } else if (target.val() <= 0) {
        visibleHint.removeClass('visible');
    }

});

$submit.on('click', function(e) {
    var target = $(e.target);
    var parent = target.closest('form');
    var inputs = parent.find($input);

    // if (inputs.hasClass('accept')) {
    // }

    // else {
        e.preventDefault();
        // target.removeClass('ready-to-fire');
    // }
});
