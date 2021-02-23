//객체(object) 기반
// var obj = new Object(); //객체 생성자 방식
// var obj = {}; //객체 리터럴 방식 권장 방식

//객체 안에 속성 (property)과 속성값은 : 콜론을 사용 구분
//객체 안에 속성 (property는 속성값 다음에 콤마를 사용 구분)
//속성 값이 문자 또는 문자열은 반드시 인용부용사용 감싸준다. '' "" `` '김유신'
var obj = { //객체 이름
    irum:'김유신', //irum 속성 (property 프로퍼티) : 속성값 (value) '김유신'
    age:45,
    mill:true,
    result: function(){
        //this 객체이름 obj객체
        //메서드 안에서는 객체 속성값 뒤에 = 을 사용한다.
       var cnt = 0
            cnt = 100;
        console.log( this.ireim, this.age = 30, this.mill = false);
        console.log('result 메서드 cnt 값 : ', cnt); 

    }, //메서드(method) 또는 리터럴 함수 또는 익명 함수(이름이 없는 함수)
                         //프로퍼티에 function(){} 이 존재하면 메서드가 됨

    answer:function(){
        var cnt = 0;
            cnt = 50;
            console.log('answer 메서드 cnt 값 : ', cnt);        
    },

    init:function(){
        this.result();
        this.answer();
    }


};

    // obj.result(); //result 메서드 호출 실행
    obj.init();


//객체 호출 실행
// console.log(obj); //객체
// console.log(obj.irum); //객체이름
// console.log(obj.age); //객체나이
// console.log(obj.mill); //객체군복무 참.거짓

// 성적처리 객체
var sungjuk = {
    init:function(){
        this.tot();
        this.avg();
    },
    irum: '강감찬',
    kor:95,
    eng:90,
    mat:94,
    tot:function(){
        console.log('이름 : ' + this.irum )        
        console.log('국어점수 : ' + this.kor )        
        console.log('영어점수 : ' + this.eng )        
        console.log('수학점수 : ' + this.mat )             
        console.log('총점 : ' + (this.kor+this.eng+this.mat) );        
    },
    avg:function(){
        console.log('평균 : ' + (this.kor + this.eng + this.mat)/3);
    }

};

sungjuk.init();

// alert ('');

var sungjuk2 = {
    init:function(){
        this.tot();
        this.avg();
    },
    irum: '서혜리',
    kor:98,
    eng:94,
    mat:99,
    tot:function(){
        console.log('이름 : ' + this.irum )        
        console.log('국어점수 : ' + this.kor )        
        console.log('영어점수 : ' + this.eng )        
        console.log('수학점수 : ' + this.mat )             
        console.log('총점 : ' + (this.kor+this.eng+this.mat) );        
    },
    avg:function(){
        console.log('평균 :' +(this.kor + this.eng + this.mat)/3);

    }

};

sungjuk2.init();




var cnt = 0;
var $slideWrap = document.querySelector('#section1 .slide-wrap');
var $page = document.querySelector('.page');


// setInterval(nextSlideFn, 3000); //3초에 한번씩 자동으로 다음 슬라이드 호출
//1초가 1000. 3초에 한번씩 다음 슬라이드로 자동으로 넘어감 버튼을 누르는 효과를 줌
//setTimeout(nextSlideFn, 5000);
//정해진 시간에 한번만 슬라이드 넘어감. 5초 후에 실행하고 끝나는 것

////////////////////////
// 섹션2 매인 슬라이드
////////////////////////
//이름 있는 함수(선언적 함수)

function nextSlideFn() {
    cnt++;
    cnt > 3 ? cnt = 0 : cnt ;
    // 3보다 크면 0(처음슬라이드)으로 움직이는 것
    $slideWrap.style = 'left:' + (-1200*cnt) + 'px';
    $page.innerHTML = cnt+1 + '/4';
    //cnt값에 1을 더하고 innerhtml 값을 넣어주는 것

}

function prevSlideFn() {
    cnt--;
    cnt < 0 ? cnt = 3 : cnt ; 
    // 0보다 작으면 3(마지막슬라이드)으로 움직이는 것
    $slideWrap.style = 'left:' + (-1200*cnt) + 'px';
    $page.innerHTML = cnt+1 + '/4';
}

////////////////////////
// 섹션2 left박스 슬라이드
////////////////////////

var cnt2 = 0;
var $slideWrap2 = document.querySelector('#section2 .left-box .slide-wrap');

function nextSlideFn2() {
    cnt2++;
    cnt2 > 3 ? cnt2 = 0 : cnt2 ;
    $slideWrap2.style = 'left:' + (-400*cnt2) + 'px';

}


function prevSlideFn2() {
    cnt2--;
    cnt2 < 0 ? cnt2 = 3 : cnt2 ; 
    $slideWrap2.style = 'left:' + (-400*cnt2) + 'px';

}



/////////////////////
// 섹션2 center박스 슬라이드
/////////////////////

var cnt3 = 0 ;
var $slideWrap3 = document.querySelector('#section2 .center-box .slide-wrap');

function nextSlideFn3() {
    cnt3++;
    cnt3 > 3 ? cnt3 = 0 : cnt3 ;
    $slideWrap3.style = 'top:' + (-200*cnt3) + 'px';


}


function prevSlideFn3() {
    cnt3--;
    cnt3 < 0 ? cnt3 = 3 : cnt3 ;
    $slideWrap3.style = 'top:' + (-200*cnt3) + 'px';
}

////right박스


var cnt4 = 0 ;
var $slideWrap4 = document.querySelector('#section2 .right-box .slide-wrap');

function nextSlideFn4() {
    cnt4++;
    cnt4 > 3 ? cnt4 = 0 : cnt4 ;
    $slideWrap4.style = 'left:' + (-400*cnt4) + 'px';


}


function prevSlideFn4() {
    cnt4--;
    cnt4 < 0 ? cnt4 = 3 : cnt4 ;
    $slideWrap4.style = 'left:' + (-400*cnt4) + 'px';
}


