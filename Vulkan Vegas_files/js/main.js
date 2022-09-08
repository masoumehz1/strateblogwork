window.onload = function () {
    var button = document.querySelector('.spin-trigger');
    button.onclick = function () {
        if ( $('.wheel__button').hasClass('first_spin') ) {
            spin_1();
        }
    };


    function spin_1 () {
        $('.wheel__button').attr('disabled','disabled');
        document.querySelector('.wheel__spinner').classList.add('wheel__spinner_animated-1');
        setTimeout(function () {
            localStorage.currentSpin = '9555_spin_1';
            $('.attempt-numb').html('1');
            document.querySelector('.wheel__spinner').classList.remove('wheel__spinner_animated-1');
            $('.fewmodal').css('display','flex');
            $('#level-1').css('display','flex');
            $('html').addClass('ovrhid');
            $('.circle-button').removeClass('first_spin');
            $('.win-1').fadeIn();
        }, 4000);
    }

    function spin_2 () {
        $('.wheel__button').attr('disabled','disabled');
        document.querySelector('.wheel__spinner').classList.add('wheel__spinner_animated-2');
        setTimeout(function () {
            localStorage.currentSpin = '9555_spin_2';
            $('.attempt-numb').html('0');
            $('html').addClass('ovrhid');
            
            $('.fewmodal').css('display','flex');
            $('#level-2').css('display','flex');
            $('.win-2').fadeIn();
        }, 4000);
    }


    $('#popup_btn_1').click(function () {
        $('.fewmodal').css('display','none');
        $('#level-1').css('display','none');
        $('html').removeClass('ovrhid');
        $('body').removeClass('ovrhid');
        $('.circle-button').addClass('second_spin').removeClass('first_spin').removeAttr('disabled');
        $('.wheel__spinner').css('transform','rotate(1060deg)').removeClass('wheel__spinner_animated');

        spin_2();
    });


    switch(localStorage.currentSpin) {
        case '9555_spin_1':
            $('.fewmodal').css('display','flex');
            $('#level-1').css('display','flex');
            $('html').addClass('ovrhid');
            
            $('.circle-button').addClass('second_spin').removeClass('first_spin');
            $('.attempt-numb').html('1');
            $('.win-1').fadeIn();
            break;

        case '9555_spin_2':
            $('.fewmodal').css('display','flex');
            $('#level-1').css('display','none');
            $('#level-2').css('display','flex');
            $('html').addClass('ovrhid');
            
            $('.circle-button').removeClass('second_spin').removeClass('first_spin');
            $('.attempt-numb').html('0');
            $('.win-1').fadeIn();
            $('.win-2').fadeIn();
            break;
    }


    let html = $('html'),
        currLang = $('.curr_lang'),
        langKey = localStorage.lang,
        langList = ['en', 'us', 'ca', 'kz', 'dk', 'no', 'pl', 'de', 'ukr', 'jp', 'ru', 'fi', 'br', 'pt', 'ro', 'hu', 'es', 'nz', 'ar', 'mx', 'cu', 'do', 'pr', 'cl', 'cr', 'bo', 'gt', 'pe', 'default'];

    if (!langKey) {
        // default lang
        let countryToLang = {
            'en' : 'en',
            'us' : 'us',
            'ca' : 'ca',
            'kz' : 'kz',
            'dk' : 'dk',
            'no' : 'no',
            'pl' : 'pl',
            'de' : 'de',
            'ukr': 'ukr',
            'jp' : 'jp',
            'ru' : 'ru',
            'fi' : 'fi',
            'br' : 'br',
            'pt' : 'pt',
            'ro' : 'ro',
            'hu' : 'hu',
            'es' : 'es',
            'nz' : 'nz',
            'ar' : 'es',
            'mx' : 'es',
            'cu' : 'es',
            'do' : 'es',
            'pr' : 'es',
            'cl' : 'es',
            'cr' : 'es',
            'bo' : 'es',
            'gt' : 'es',
            'pe' : 'es',
            'default' : 'en'
        };
        let country = html.attr('data-country'),
            langInit = countryToLang[country] || countryToLang['default'];
        langKey = langInit;
    }

    langList.forEach((element) => {
        html.removeClass(element).addClass(langKey);
    });
    $('.lang_list_item').removeClass('curr');
    $('.lang_list_item[data-lang="'+langKey+'"]')
        .addClass('curr')
        .siblings()
        .removeClass('curr');
    currLang.html( $('.lang_list_item[data-lang="'+langKey+'"]').html() );

};

$(document).ready(function () {

    let langSwitcher = $('.lang_switcher'),
        langList = $('.lang_list'),
        langListItem = $('.lang_list_item'),
        html = $('html'),
        currLang = $('.curr_lang');

    langSwitcher.click(function () {
        $(this).toggleClass('act');
        langList.toggleClass('act');
    });

    langListItem.click(function () {
        let lang = $(this).data('lang');
        let langs = $('.lang_list_item').map((i, el) => $(el).data('lang')).toArray().join(" ");
        html.removeClass(langs).addClass(lang);
        localStorage.lang = lang;
        $('.lang_list_item').removeClass('curr');
        $('.lang_list_item[data-lang="'+lang+'"]').addClass('curr');
        currLang.html( $(this).html() );
        window.location.reload();
    });

    $(document).mouseup(function (e){
        if (!langSwitcher.is(e.target)
            && langSwitcher.has(e.target).length === 0) {
            langList.removeClass('act');
        }
    });

});