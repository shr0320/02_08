
var slide = {
init : function() {
    this.slide1Fn();
    this.slide2Fn();
    this.slide3Fn();
    this.slide4Fn();

},
slide1Fn:function(){
    var cnt=0;
    var $slideWrap = document.querySelector('#section1 .slide-wrap');
    var $nextBtn = document.querySelector('#section1 .next-btn');
    var $prevBtn = document.querySelector('#section1 .prev-btn');

    function nextSlideFn() {
        cnt++;
        cnt > 3 ? cnt = 0 : cnt ;
        $slideWrap.style = 'left:' + (-1200*cnt) + 'px';
    
    }
    
    function prevSlideFn() {
        cnt--;
        cnt < 0 ? cnt = 3 : cnt ; 
        $slideWrap.style = 'left:' + (-1200*cnt) + 'px';
    }
    
    //버튼 등록 onclick Event
    $nextBtn.onclick = function(){
        nextSlideFn();
    }
    $prevBtn.onclick = function(){
        prevSlideFn();
    }




},
slide2Fn:function(){

    var cnt = 0;
    var $slideWrap = document.querySelector('#section2 .left-box .slide-wrap');
    var $nextBtn = document.querySelector('#section2 .left-box .next-btn');
    var $prevBtn = document.querySelector('#section2 .left-box .prev-btn');


    function nextSlideFn() {
        cnt++;
        cnt > 3 ? cnt = 0 : cnt ;
        $slideWrap.style = 'left:' + (-400*cnt) + 'px';

    }


    function prevSlideFn() {
        cnt--;
        cnt < 0 ? cnt = 3 : cnt ; 
        $slideWrap.style = 'left:' + (-400*cnt) + 'px';

    }
    //버튼등록
    $nextBtn.onclick = function(){
        nextSlideFn();

    }

    $prevBtn.onclick = function(){
        prevSlideFn();

    }
},
slide3Fn:function(){
    var cnt = 0;
    var $slideWrap = document.querySelector('#section2 .center-box .slide-wrap');
    var $nextBtn = document.querySelector('#section2 .center-box .next-btn');
    var $prevBtn = document.querySelector('#section2 .center-box .prev-btn');


    function nextSlideFn() {
        cnt++;
        cnt > 3 ? cnt = 0 : cnt ;
        $slideWrap.style = 'top:' + (-200*cnt) + 'px';


    }

    function prevSlideFn() {
        cnt--;
        cnt < 0 ? cnt = 3 : cnt ;
        $slideWrap.style = 'top:' + (-200*cnt) + 'px';

    }
    //버튼등록
    $nextBtn.onclick = function(){
        nextSlideFn();

    }

    $prevBtn.onclick = function(){
        prevSlideFn();

    }
 
},

slide4Fn:function(){
    var cnt = 0;
    var $slideWrap = document.querySelector('#section2 .right-box .slide-wrap');
    var $nextBtn = document.querySelector('#section2 .right-box .next-btn');
    var $prevBtn = document.querySelector('#section2 .right-box .prev-btn');


    function nextSlideFn() {        
        cnt++;
        cnt > 3 ? cnt = 0 : cnt ;
        $slideWrap.style = 'left:' + (-400*cnt) + 'px';

    }

    function prevSlideFn() {
        cnt--;
        cnt < 0 ? cnt = 3 : cnt ; 
        $slideWrap.style = 'left:' + (-400*cnt) + 'px';

    }
    //버튼등록
    $nextBtn.onclick = function(){
        nextSlideFn();

    }

    $prevBtn.onclick = function(){
        prevSlideFn();

        }

    }

};

slide.init();
