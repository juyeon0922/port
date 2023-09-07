$(document).ready(function(){

    //각 주요섹션의 top값을 가져온다.
    const browerTop = $(window).height()
    const AboutTop = $('#About').offset().top - 100;
    const portTop = $('#portfolio').offset().top - 200;
    const port2Top = $('#port2').offset().top - 200;
    const port3Top = $('#port3').offset().top - 200;
    const eventTop = $('#event').offset().top - 200;
    const contactTop = $('#contact').offset().top - 200;
    
    let scrollTop = 0;




    // 스크롤 바를 내리면 상단메뉴 배경색이 보인다.
    const winHeight = browerTop - 100;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        //모바일이 아닐때
        if($(window).width()>800){
            if(scrollTop >= winHeight){
                $('#top nav').addClass('act');
            }
            else{
                $('#top nav').removeClass('act');
                $('#menu a').eq(0).addClass('act').siblings().removeClass('act');
            }
        }
        

        if(scrollTop >= AboutTop){
            $('#menu a').eq(1).addClass('act').siblings().removeClass('act');
            $('#photo progress').animate({value:90});
            $('#html progress').delay(100).animate({value:85});
            $('#jquery progress').delay(200).animate({value:70});
            $('#prototype progress').delay(300).animate({value:85});
        }
        if(scrollTop >= portTop){
            $('#port1').addClass('active');
            $("#menu a").eq(2).addClass("act").siblings().removeClass("act");
        }
        if(scrollTop >= port2Top){
            $('#port2 div').addClass('active');
        }
        if(scrollTop >= port3Top){
            $('#port3 div').addClass('active');
        }
        if(scrollTop >= eventTop){
            $('#menu a').eq(3).addClass('act').siblings().removeClass('act');
        }
        if(scrollTop >= contactTop){
            $('#menu a').eq(4).addClass('act').siblings().removeClass('act');
        }
        
    });

    //타자치는효과
    const $typing =  "안녕하세요.\n이주연의 포트폴리오입니다.";
    console.log($typing);
    const tyLen = $typing.length; //글자길이
    console.log(tyLen);
    let i = 0;
    let txt = '';
    
    function type(){
        if(i< tyLen){
            txt += $typing[i]; //index 0에는 '안'
            //제이쿼리로는 줄바꿈이 안된다.
            $('#typing').text(txt);
            //자바스크립트로 줄바꿈을 한다.
            document.querySelector('#typing').innerText = txt;
            i++; //i는 21보다 작을때만 ++한다.
            setTimeout(type,200);
        }
    }
    type();

    //상단메뉴 활성화 유지
    $('#menu a').click(function(){
        $(this).addClass('act').siblings().removeClass('act');
    });

    //메뉴에서 [포트폴리오] 클릭
    $('#menu a:eq(2)').click(function(){
        setTimeout(show, 500);
        function show(){
            $('#port1').addClass('active');
        }
       
    });

    //이벤트 썸네일을 클릭하면 큰 이미지 나온다.
    $("#event button").click(function(){		
		//클릭이미지의 주소 정보를 가져온다
		const imgSrc_1 = $(this).children("img").attr("src");
		const imgSrc_2 = imgSrc_1.replace(".jpg","_big.jpg");		
		//클릭이미지의 alt 정보를 가져온다
		const imgAlt = $(this).children("img").attr("alt");
		//큰 팝업이미지에 해당 정보를 넣는다
		$("#popup img").attr({ "src" : imgSrc_2 , "alt" : imgAlt });
		$("#popup h3").text( imgAlt );
        $('body').css('overflow-Y','hidden');
		$("#popup").fadeIn(800);
	});
	$("#popup").click(function(){
		$(this).fadeOut();
        $('body').css('overflow-Y','auto');
	});

    //@media
    if($(window).width() <= 800){
        $('#top nav').addClass('act');
    }
    
});