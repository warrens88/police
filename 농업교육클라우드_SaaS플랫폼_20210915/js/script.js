
window.onload=function() {

// header color change  
  window.addEventListener('scroll', function(){
    const $mainHeader = document.getElementById('header');
    $mainHeader.style.backgroundColor = '#17172b';

    if(window.scrollY == 0){
      $mainHeader.style.backgroundColor = 'transparent';
    }
  });

// 약관동의 

  const toggleHeader = document.querySelectorAll('.tog-01-header', '.tog-02-header');
  const toggleBody = document.querySelectorAll('.tog-01-body', '.tog-02-body');


  toggleHeader.forEach(function(item, index){ 
    item.addEventListener('click', function(){
        console.log(this)
        toggleBody[index].classList.toggle('open');
    });
  });

  const toggleHeader2 = document.querySelectorAll('.tog-02-header');
  const toggleBody2 = document.querySelectorAll('.tog-02-body');


  toggleHeader2.forEach(function(item, index){ 
    item.addEventListener('click', function(){
        console.log(this)
        toggleHeader2[index].classList.toggle('open');
        toggleBody2[index].classList.toggle('open');
    });
  });

  // 오른쪽 조회창 
  const btnOpenRight = document.getElementById('btnOpenRight');
  const rightSide = document.getElementById('rightSide');

  if(btnOpenRight != null){
    btnOpenRight.addEventListener('click', function(){
      btnOpenRight.classList.toggle('on');
      rightSide.classList.toggle('on');
    });
  }
 
  // //datepicker
	// $( "input.datepicker" ).datepicker({
	//   showOn: "both",
	//   buttonImage: "/img/datepicker.png",
	//   buttonImageOnly: true,
  //  	  buttonText: "Select date",
	// });

  // var heightArray = $(".cm-image").map( function(){ 

  //   return  $(this).height(); 

  //   }).get(); 

  //   var maxHeight = Math.max.apply( Math, heightArray); 

  //   $(".cm-image").height(maxHeight); 

  //모바일메뉴
  const btnMobileMenu = document.getElementById('btnMobileMenu');
  const mobileMenu = document.getElementById('lnb');
  const btnCloseMobileMenu = document.getElementById('btnCloseMobileMenu');
  const body = document.getElementsByTagName('body');

  btnMobileMenu.addEventListener('click', function(){
    mobileMenu.classList.add('active');

  });

  btnCloseMobileMenu.addEventListener('click', function(){
    mobileMenu.classList.remove('active');
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
          $siblings.find('ul').slideUp();
          
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
      lnbUI.click('#lnb li')
    });
    
    
  }(jQuery));


}

