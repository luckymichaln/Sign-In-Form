var icon = $('svg');
var $input = $('input');
var hint = $('.hint');
var submit = $('.btn-submit');

$input.on('focus', function(e) {
    var target = $(e.target);
    var parent = target.closest('fieldset');
    var visibleHint = parent.find(hint);
    target.removeClass('accept');
    parent.find(icon).removeClass('accept');

    if (target.val() <= 0) {
        visibleHint.removeClass('error').text('Type anything').addClass('visible');
    }
});

$input.on('blur', function(e) {
    var target = $(e.target);
    var parent = target.closest('fieldset');
    var visibleHint = parent.find(hint);
    var $userInput = $('.username');
    var $passInput = $('.password');

    target.removeClass('error');
    visibleHint.removeClass('visible');
    submit.removeClass('ready-to-fire');


    if (target.val()) {
        visibleHint.removeClass('visible');
        target.addClass('accept');
        parent.find(icon).addClass('accept');

        if ($userInput.hasClass('accept') && $passInput.hasClass('accept')) {
            submit.addClass('ready-to-fire');
        }
    }

});

submit.on('click', function(e) {
    var target = $(e.target);
    var parent = target.closest('form');
    var validInput = parent.find($input);
    var error = parent.find(hint);

    if (target.hasClass('ready-to-fire')) {
        console.log('working');
    }

    else {

        if (validInput.hasClass('accept')) {
            error.removeClass('error');
            validInput.closest('fieldset').find(hint).removeClass('visible');
        }

        validInput.addClass('error');
        error.addClass('visible error').text("Can't be blank");
        e.preventDefault();
    }
});
