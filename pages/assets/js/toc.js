$(document).ready(function () {
    $(document).on("click", '.toc-list > li > a[href^="#"]', function (event) {
        event.preventDefault();
        let headerHeight = $('.header_main').height();
        let tableofcontentinnerHeight = $('.tableofcontentinner').height();
        let sumHeitht = headerHeight + tableofcontentinnerHeight;
        $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top - sumHeitht
        }, 800);

        if($('.tableofcontentinner').hasClass('openList')){
            $('.tableofcontentinner').removeClass('openList');
            $('.tableofcontentinner').find('.table-ofcontent-list').slideUp(300);
        }
    });

	var anchorList = [];
	$(".table-ofcontent-toc").each(function () {
		for (var i = 0; i < 6; i++) {
			var headingTag = "h" + (i + 1);
			if (headingTag != "h1") {
				$(this).find(headingTag).each(function () {
                    $(this).attr("id", "anchor-" + diacritics($(this).text()));
                    anchorList += `<li class="li-h${i + 1}"">
                                    <a href="#${$(this).attr("id")}"><span>${$(this).text()}</span></a>
                                </li>`;
                });
			}
		}
	});

    let tocListUL = `<ul class="toc-list">${anchorList}</ul>`;

	$(".table-ofcontent-list").append(tocListUL);
    $(".table-of-content-body").on('click', function(){
        let selfThis = $(this).parent();
        if(!$(selfThis).hasClass('openList')) {
            $(selfThis).addClass('openList');
            $(selfThis).find('.table-ofcontent-list').slideDown(300);
        }else {
            $(selfThis).find('.table-ofcontent-list').slideUp(300);
            $(selfThis).removeClass('openList');
        }
    });

    function diacritics(value) {
        return value.toLowerCase().replace(/[@`$&.(){},;\[\]\n]/g, function(match) {
            const replacements = {
                '$': '',
                '&': '',
                '@': '',
                '.': '',
                ',': '',
                ';': '',
                '(': '',
                ')': '',
                '{': '',
                '}': '',
                '[': '',
                ']': '',
                '*': '',
                '-': '',
                '+': '',
                '/': '',
                '|': '',
                '^': '',
                '>': '',
                '<': '',
                '?': '',
                '~': '',
                '`': '',
                '\n': ''
            };
            return replacements[match];
        }).replace(/ /g, "");
    }
});