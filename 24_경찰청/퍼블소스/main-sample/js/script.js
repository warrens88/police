/* script.js */

//JQUERY 시작
$(document).ready(function(){

    // GNB
    $(".topnav").hover(function() { //마우스를 topnav에 오버시
      $(this).parent().find(".subnav").slideDown('normal').show(); //subnav가 내려옴.
      $(this).parent().hover(function() {  
      }, function(){  
        $(this).parent().find(".subnav").slideUp('fast'); //subnav에서 마우스 벗어났을 시 원위치시킴  
      });  
    });

    //SIDEBAR
    // $(".btn_sidebar").click(function(){
    //   $(this).attr('style', 'display:none !important');
    //   $('.btn_sidebar_close').attr('style', 'display:block !important');
    //   $(".sidebar").animate({ marginLeft : "480px" });
    // });

    $(".btn_sidebar").click(function(){
      $(this).css("display", "none");
      $(".btn_sidebar_close").css("display", "block");
      // $(".sidebar").animate({ marginLeft: "480px" },300);
      $(".sidebar").addClass("open");
      $(".main_contents .mc_in").addClass("on");
      $(".h_in").addClass("on");
      $(".f_in").addClass("on");
      $(".sb_in").addClass("on");
      // $(".main_contents .mc_in").animate({ marginLeft: "500px" },300);
      // $("body").css("overflow-y","hidden");
    });

    $(".btn_sidebar_close").click(function(){
      $(this).css("display", "none");
      $(".btn_sidebar").css("display", "block");
      // $(".sidebar").animate({ marginLeft: "0px" },300);
      $(".sidebar").removeClass("open");
      $(".main_contents .mc_in").removeClass("on");
      $(".h_in").removeClass("on");
      $(".f_in").removeClass("on");
      $(".sb_in").removeClass("on");
      // $(".main_contents .mc_in").animate({ margin: "auto 0" },300);
      
      // $("body").css("overflow-y","auto");
    });    
    
    


    // MAIN-SLIDE
    // $('.index_visual').cycle({
    //   fx: 'fade', 
    //   speed:  'slow',
    //     timeout: 5000 ,
    //   pager:  '.visual_count',
    //   pagerAnchorBuilder: function(idx, el) {
    //         return '<a href="#"><span class="hidden">'+idx+'</span></a>';
    //     }
    // });
    
    // $(".visual_control .btn_visual_resume").hide();

    // $(".visual_control .btn_visual_pause").click(function(){
    //   $('.index_visual').cycle('pause');
    //   $(this).hide();
    //   $(".visual_control .btn_visual_resume").show();
    // });

    // $(".visual_control .btn_visual_resume").click(function(){
    //   $('.index_visual').cycle('resume');
    //   $(this).hide();
    //   $(".visual_control .btn_visual_pause").show();
    // });

    // MAIN-TABMENU
    $(".tab_content > div").hide();
			$(".tab_content > div").eq(0).show();
			$(".tab > ul > li" ).click(function(){
				
				var tab_index = $(this).index();

				$(".tab > ul > li" ).removeClass("active");
				$(this).addClass("active");
				$(".tab_content div").hide();
				$(".tab_content div").eq(tab_index).show();
			});

    //BX-SLIDER
//     var mySlider=$("#sb_box").bxSlider({
//       mode:"horizontal",   // 가로 수평으로 슬라이드 됩니다.
//       speed:500,              // 이동 속도를 설정합니다.
//       pager:false,            // 현재 위치 페이징 표시 여부 설정.
//       moveSlides:1,         // 슬라이드 이동시 갯수 설정.
//       slideWidth:170,        // 슬라이드 마다 너비 설정.
//       minSlides:4,           // 최소 노출 개수를 설정합니다.
//       maxSlides:7,          // 최대 노출 개수를 설정합니다.
//       slideMargin:10,      // 슬라이드간의 간격을 설정합니다.
//       auto:true,             // 자동으로 흐를지 설정합니다.
//       autoHover:true,    // 마우스 오버시 정시킬지 설정합니다.
//       controls:false,       //  이전 다음 버튼 노출 여부 설정합니다.
//       maxWidth:1300
//     });
// //이전 버튼을 클릭하면 이전 슬라이드로 전환됩니다.
//     $("#prevBtn").on("click",function(){
//       mySlider.goToPrevSlide();  //이전 슬라이드 배너로 이동됩니다.
//       return false; //<a>에 링크를 차단합니다.
//     });
// //다음 버튼을 클릭하면 다음 슬라이드로 전환됩니다.
//     $("#nextBtn").on("click",function(){
//       mySlider.goToNextSlide();  //다음 슬라이드 배너로 이동됩니다.
//       return false;
//     });



      //모바일 메뉴
      $('.btn_lnb').click(function () {
          $('#lnb').addClass('active');
          $('.sidebar').css('display','none');
      });
    
      $('.m_btn_close').click(function () {
          $('#lnb').removeClass('active');
          $('.sidebar').css('display','block');

      });


      //검색창
      $('.search_icon').on('click',function(){
        console.log( $('.main_search_wrap').hasClass('active') );
          if( $('.main_search_wrap').hasClass('active') ){
            onTotalSearch();
          }else{
            $('.main_search_wrap').addClass('active');
            $('#searchWord').focus();
            onSearchKeyDown();
          }
      });
  
      $('.close_icon').on('click',function(){
          $('.main_search_wrap').removeClass('active');
          $('#searchWord').val('');
      });

      //전체메뉴
      $('.btn_global').on('click',function(){
          $('.global_menu').addClass('active');
      });
      $('.btn_gm_up').on('click',function(){
        $('.global_menu').removeClass('active');
    });

    


    });

//탑버튼
    $(function(){
      $(".btn-top").hide(); // 탑 버튼 숨김 - 이걸 빼면 항상 보인다.
        //  
         $(window).scroll(function () {
             if ($(this).scrollTop() > 300) { // 스크롤 내릴 표시
                 $('.btn-top').fadeIn();
             } else {
                 $('.btn-top').fadeOut();
             }
         });
                //  
         $('.btn-top').click(function () {
             $('body,html').animate({
                 scrollTop: 0  //탑 설정 클수록 덜올라간다
             }, 200);  // 탑 이동 스크롤 속도를 조절할 수 있다.
             return false;
         });
    });
    
    

// lnb
(function($){
  
  var lnbUI = {
    click : function (target, speed) {
      var _self = this,
          $target = $(target);
      _self.speed = speed || 300;
      
      $target.each(function(){
        if(findChildren($(this))) {
          return;
        }
        $(this).addClass('noDepth');
      });
      
      function findChildren(obj) {
        return obj.find('> ul').length > 0;
      }
      
      $target.on('click','a', function(e){
          e.stopPropagation();
          var $this = $(this),
              $depthTarget = $this.next(),
              $siblings = $this.parent().siblings();
        
        $this.parent('li').find('ul li').removeClass('on');
        $siblings.removeClass('on');
        $siblings.find('ul').slideUp(250);
        
        if($depthTarget.css('display') == 'none') {
          _self.activeOn($this);
          $depthTarget.slideDown(_self.speed);
        } else {
          $depthTarget.slideUp(_self.speed);
          _self.activeOff($this);
        }
        
      })
      
    },
    activeOff : function($target) {
      $target.parent().removeClass('on');
    },
    activeOn : function($target) {
      $target.parent().addClass('on');
    }
  };
  
  
  // Call lnbUI
  $(function(){
    lnbUI.click('#lnb li', 300)
  });
  
  
}(jQuery));







