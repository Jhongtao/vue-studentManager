const turn = function ($) {
    function initTurn(option) {
        this.pageNum = option.pageLen;
        this.direction = option.direction || 'left'
        this.dom = option.turn;
        this.curPage = option.curPage || 1;
        this.cb = option.callback || function () { };
        this.renderPage(this.pageNum);
        this.addCss();
        this.bindEvent();
        this.pageInit();
    }
    initTurn.prototype.bindEvent = function () {
        let _self = this;
        $('li.curpage', this.dom).on('click', function () {
            _self.curPage = parseInt($(this).text())
            _self.cb(_self.curPage)
            $(this).css({
                backgroundColor: '#428bca',
                border: "1px solid #428bca"
            }).siblings('li').css({
                backgroundColor: '#fff',
                border: "1px solid #eee"
            })
            if (_self.curPage >= 1 && _self.curPage <= _self.pageNum) {
                if (_self.curPage == 1) {
                    $('ul li.pre', _self.dom).fadeOut(0)
                } else {
                    $('ul li.pre', _self.dom).fadeIn(0)
                }
                if (_self.curPage == _self.pageNum) {
                    $('ul li.next', _self.dom).fadeOut(0)
                } else {
                    $('ul li.next', _self.dom).fadeIn(0)
                }
                $('ul li.curpage', _self.dom).eq(_self.curPage + 1).fadeIn()
                $('ul li.curpage', _self.dom).eq(_self.curPage).fadeIn()
                $('ul li:not(.pre)', _self.dom).eq(_self.curPage - 1).fadeIn()
                $('ul li:not(.pre)', _self.dom).eq(_self.curPage - 2).fadeIn()
                $('ul li:not(.pre)', _self.dom).eq(_self.curPage - 3).fadeIn()
                if (_self.curPage > 4) {
                    $('ul span:first').fadeIn(0)
                    for (let i = 1; i < _self.curPage - 3; i++) {
                        $('ul li.curpage', _self.dom).eq(i).fadeOut(0)
                    }
                    for (let i = _self.curPage + 2; i < _self.pageNum - 1; i++) {
                        $('ul li.curpage', _self.dom).eq(i).fadeOut(0)
                    }
                } else {
                    $('ul span:first').fadeOut(0)
                    for (let i = _self.curPage + 2; i < _self.pageNum - 1; i++) {
                        $('ul li.curpage', _self.dom).eq(i).fadeOut(0)
                    }
                }
                if (_self.curPage + 3 >= _self.pageNum) {
                    $('ul span:last').fadeOut(0)
                }
                if (_self.curPage + 3 < _self.pageNum) {
                    $('ul span:last').fadeIn(0)
                }
            }
        })

        $("#prePage").on('click', function () {
            if (_self.curPage > 1) {
                _self.curPage--
            }
            console.log('pre')
            $('li.curpage', _self.dom).eq(_self.curPage - 1).trigger('click')
        })

        $("#nextPage").on('click', function () {
            if (_self.curPage < _self.pageNum) {
                _self.curPage++
            }
            console.log('next', _self.curPage)
            $('li.curpage', _self.dom).eq(_self.curPage - 1).trigger('click')
        })
    }
    initTurn.prototype.pageInit = function () {
        for (let i = 0; i < this.pageNum; i++) {
            $('ul li.curpage', this.dom).eq(i).fadeOut(0)
        }
        if (this.curPage > 4 && this.curPage < this.pageNum - 4) {
            $('ul li.curpage:first', this.dom).fadeIn(0)
            $('ul li.curpage:last', this.dom).fadeIn(0)
            $('ul li.curpage', this.dom).eq(this.curPage).fadeIn(0)
            $('ul li.curpage', this.dom).eq(this.curPage - 1).fadeIn(0)
            $('ul li.curpage', this.dom).eq(this.curPage - 2).fadeIn(0)
            $('ul li.curpage', this.dom).eq(this.curPage - 3).fadeIn(0)
            $('ul li.curpage', this.dom).eq(this.curPage + 1).fadeIn(0)
            $('ul li.curpage', this.dom).eq(this.curPage).fadeIn(0)
            $('ul span:first').fadeIn(0)
            $('ul span:last').fadeIn(0)
        } else if (this.curPage <= 4) {
            $('ul li.curpage:first', this.dom).fadeIn(0)
            $('ul li.curpage:last', this.dom).fadeIn(0)
            if (this.curPage == 1) {
                $('ul li.pre:first', this.dom).fadeOut(0)
            }
            $('ul li.curpage', this.dom).eq(this.curPage).fadeIn(0)
            $('ul li.curpage', this.dom).eq(this.curPage + 1).fadeIn(0)
            $('ul li.curpage', this.dom).eq(this.curPage - 1).fadeIn(0)
            $('ul li.curpage', this.dom).eq(this.curPage - 2).fadeIn(0)
            $('ul span:first').fadeOut(0)
            $('ul span:last').fadeIn(0)
        } else {
            $('ul li.curpage:first', this.dom).fadeIn(0)
            $('ul li.curpage:last', this.dom).fadeIn(0)
            if (this.curPage == this.pageNum) {
                $('ul li.next:last', this.dom).fadeOut(0)
            }
            $('ul li.curpage', this.dom).eq(this.curPage).fadeIn(0)
            $('ul li.curpage', this.dom).eq(this.curPage - 1).fadeIn(0)
            $('ul li.curpage', this.dom).eq(this.curPage - 2).fadeIn(0)
            $('ul li.curpage', this.dom).eq(this.curPage - 3).fadeIn(0)
            $('ul li.curpage', this.dom).eq(this.curPage + 1).fadeIn(0)
            $('ul li.curpage', this.dom).eq(this.curPage + 2).fadeIn(0)
            $('ul li.curpage', this.dom).eq(this.curPage + 3).fadeIn(0)
            $('ul span:first').fadeIn(0)
            $('ul span:last').fadeOut(0)
        }
        if(this.pageNum <= 4){
            $('ul span:first').fadeOut(0)
            $('ul span:last').fadeOut(0)
            }
        // if (this.pageNum <= 4) {
        //     $('ul span:first').fadeOut(0)
        //     $('ul span:last').fadeOut(0)
        // }
        // }
    }
    initTurn.prototype.renderPage = function (num) {
        $(this.dom).empty()
        var str = '<li class="pre" id="prePage">上一页</li>';
        $(this.dom).append('<ul>');
        for (var i = 1; i <= num; i++) {
            str += "<li class='curpage'>" + i + "</li>"
        }
        str += '<li class="next" id="nextPage">下一页</li>'
        // console.log(str)
        $(this.dom).find('ul').html(str)
        $('<span>...</span>').insertAfter($('ul li.curpage:first', this.dom))
        $('<span>...</span>').insertBefore($('ul li.curpage:last', this.dom))
    }
    initTurn.prototype.addCss = function () {
        $('ul,li', this.dom).css({
            listStyle: 'none',
            'text-align': this.direction
        })
        $('ul>li', this.dom).css({
            padding: 10,
            margin: 2,
            display: 'inline-block',
            backgroundColor: '#fff',
            border: "1px solid #eee",
            cursor: 'pointer'
        })
        $('ul li', this.dom).eq(this.curPage).css({
            backgroundColor: '#428bca',
            border: "1px solid #428bca"
        })
    }

    $.fn.extend({
        turnPage: function (option) {
            option.turn = this;
            new initTurn(option)
        }
    })
}

export { turn }