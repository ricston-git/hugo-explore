  jQuery(document).ready(function($) {


        $("#switcher-handle > #handle").toggle
  (
    function()
    {
      $('#switcher-handle').animate({left:'0px'}, {queue:false,duration:200});
      $('#switcher-handle > #handle').addClass('out');
    }
    ,function()
    {
      $('#switcher-handle').animate({left:'-212px'}, {queue:false,duration:200});
      $('#switcher-handle > #handle').removeClass('out');
    }
  );
    
    $('#style-switcher a.color-box').each(function (i) {
        var a = $(this);
        a.css({
            backgroundColor: '#' + a.attr('data-rel')
        })
    })  
 

$('select#layout').change(function () { 
  var b = $(this).children(":selected").val();
  if (b == 'boxed') {
    $("#container").attr('style', 'width:1040px;');
     $("#main-navigation.sticky").addClass("sticky");
    $("#main-navigation").removeClass("sticky-fullwidth");
   

  


  } 
  else if (b == 'wide') {
    $("#container").attr('style', 'width:100%; ');
    $("#main-navigation.sticky").removeClass("sticky");
    $("#main-navigation").addClass("sticky-fullwidth");
   
  }
});



 
 

 
        $('#colorpicker').ColorPicker({
      onShow: function (colpkr) {
        $(colpkr).fadeIn("fast");
        return false;
      },
      onHide: function (colpkr) {
        $(colpkr).fadeOut("fast");
        return false;
      },
      onChange: function (hsb, hex, rgb) {
        var color = hex;
        var defaultPattern = "url(../images/bg1.jpg)";
        $('body').css({
            backgroundColor: '#' + color,
            backgroundImage : defaultPattern
        });     
        $.cookie("portable_cookie_color", color);   
        $.cookie("portable_cookie_pattern", null);   
        $.cookie("portable_cookie_defaultBg", defaultPattern);   
      },
    
    });    
    
    $('#style-switcher a.color-box').each(function (i) {
        var a = $(this);
        a.css({
            backgroundColor: '#' + a.attr('data-rel')
        })
    })    
    

   var switcher_skins = $('#style-switcher a.color-box');
   var switcher_link = $('#main-color');
   switcher_skins.each(function(i) {
    var color = $(this).attr('data-rel');
    var defaultPattern = "url(images/background-patterns/body-bg-1.jpg)";
     
      
   });  
   
     /*STYLESHEETS LOAD STARTS*/ 
   switcher_skins.click(function(e) {
    var color = $(this).attr('data-rel');
    var skins;
    var defaultPattern = "url(images/background-patterns/body-bg-1.jpg)";
    

      if (color == "e33000") {
      switcher_link.attr('href',"css/colors/orange-color.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }


    if (color == "bf0101") {
      switcher_link.attr('href',"css/colors/red-color.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }

     if (color == "73b819") {
      switcher_link.attr('href',"css/colors/green-color.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }
 

    if (color == "ef013f") {
      switcher_link.attr('href',"css/colors/pink-color.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }



    if (color == "4080bc") {
      switcher_link.attr('href',"css/colors/blue-color.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }

     if (color == "fcaf17") {
      switcher_link.attr('href',"css/colors/yellow-color.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }


     if (color == "9adada") {
      switcher_link.attr('href',"css/colors/light-blue-color-1.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }

    if (color == "04d095") {
      switcher_link.attr('href',"css/colors/dark-green-color.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }

     if (color == "fb4639") {
      switcher_link.attr('href',"css/colors/light-red-color.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }

     if (color == "8d6cd1") {
      switcher_link.attr('href',"css/colors/purple-color.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }

     if (color == "fe5b42") {
      switcher_link.attr('href',"css/colors/light-orange-color-1.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }

     if (color == "76d17f") {
      switcher_link.attr('href',"css/colors/light-green-color-1.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }


    if (color == "10cafd") {
      switcher_link.attr('href',"css/colors/light-blue-color-2.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }

    if (color == "fe6b34") {
      switcher_link.attr('href',"css/colors/light-orange-color-2.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }

     if (color == "fed208") {
      switcher_link.attr('href',"css/colors/light-yellow-color.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }

    if (color == "2655c4") {
      switcher_link.attr('href',"css/colors/blue-dark-color-1.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }
     if (color == "f20505") {
      switcher_link.attr('href',"css/colors/light-red-color-1.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }

     if (color == "1b3c59") {
      switcher_link.attr('href',"css/colors/blue-dark-color-2.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }

       if (color == "fc4349") {
      switcher_link.attr('href',"css/colors/light-red-color-3.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }

     if (color == "1bddf2") {
      switcher_link.attr('href',"css/colors/light-blue-color-3.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }

      if (color == "8c7b74") {
      switcher_link.attr('href',"css/colors/brown-color.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }
     if (color == "08afc7") {
      switcher_link.attr('href',"css/colors/blue-dark-color-3.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }


     if (color == "5883b0") {
      switcher_link.attr('href',"css/colors/light-blue-color-4.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }

     if (color == "c7d93d") {
      switcher_link.attr('href',"css/colors/light-green-color-2.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }


     if (color == "ff46a3") {
      switcher_link.attr('href',"css/colors/light-pink-color.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }

    if (color == "fdab55") {
      switcher_link.attr('href',"css/colors/light-orange-color-3.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }

    if (color == "616c6e") {
      switcher_link.attr('href',"css/colors/dark-grey-color.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }


    if (color == "c6dee8") {
      switcher_link.attr('href',"css/colors/light-blue-color-5.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }

     if (color == "5c002f") {
      switcher_link.attr('href',"css/colors/dark-purple-color.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }

     if (color == "a63d17") {
      switcher_link.attr('href',"css/colors/dark-brown-color.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }
       if (color == "92c924") {
      switcher_link.attr('href',"css/colors/light-green-color-3.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }
       if (color == "f2d95c") {
      switcher_link.attr('href',"css/colors/light-yellow-color-1.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }
       if (color == "bfaf80") {
      switcher_link.attr('href',"css/colors/light-brown-color-1.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }

     if (color == "7ea1bf") {
      switcher_link.attr('href',"css/colors/light-blue-color-6.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   
    }
     if (color == "f2eeb3") {
      switcher_link.attr('href',"css/colors/light-yellow-color-2.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   

    }

     if (color == "fb5f81") {
      switcher_link.attr('href',"css/colors/light-pink-color-1.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   

    }

     if (color == "d8d8d8") {
      switcher_link.attr('href',"css/colors/grey-color.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   

    }

     if (color == "2d2d3f") {
      switcher_link.attr('href',"css/colors/dark-purple-color-1.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   

    }

    if (color == "015078") {
      switcher_link.attr('href',"css/colors/blue-dark-color-4.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   

    }

    if (color == "7972a6") {
      switcher_link.attr('href',"css/colors/dark-purple-color-2.css");
      var atrrHref = switcher_link.attr('href');
      $('body').css({
         backgroundColor: '#' + color,
          
      });   

    }
  /*STYLESHEETS LOAD ENDS*/
  
  
  
  
     
    $.cookie("portable_cookie_pattern", null);   
    $.cookie("portable_cookie_bgimage",null);

    $.cookie("portable_cookie_color", color);  
    $.cookie("portable_cookie_skins", atrrHref);
    $.cookie("portable_cookie_defaultBg", defaultPattern);    
    return false;
  
   });  
   
  var color = $.cookie("portable_cookie_color");
  var portable_skins = $.cookie("portable_cookie_skins");
  var defaultPattern = $.cookie("portable_cookie_defaultBg");
  var pattern = $.cookie("portable_cookie_pattern");
  
  if (portable_skins) {
    $("#main-color").attr("href",portable_skins);
    $('body').css({
        backgroundColor: '#' + color,
        
    });
  }

  $('#style-switcher a.bg-box').click(function (e) {
      e.preventDefault();
      var patternUrl = 'url(images/background-patterns/' + $(this).attr('data-rel') + '.jpg)';
      $('body').css({
          backgroundImage: patternUrl,
          backgroundRepeat: "repeat"
      });
      $.cookie("portable_cookie_bgimage",null);
      $.cookie("portable_cookie_pattern", patternUrl)
  });
  
  var defaultPattern = $.cookie("portable_cookie_defaultBg");
  var color = $.cookie("portable_cookie_color");
  var background = $.cookie("portable_cookie_bgimage");
  if (color) {
      $('body').css({
          backgroundColor: '#' + color,
          backgroundImage : defaultPattern
      });
  }
  var pattern = $.cookie("portable_cookie_pattern");
  if (pattern) {
      $('body').css({
          backgroundImage: pattern,
          backgroundRepeat: "repeat"
      });
  } else {
    if (background) {
        $('body').css({
          backgroundImage: background,
          backgroundRepeat: "repeat",
          backgroundPosition: "top center",
        
        });
    }    
  }  

  $('#style-switcher a.bg-box').each(function (i) {
    var backgroundUrl = 'url(images/background-patterns/' + $(this).attr('data-rel') + '.jpg)';
    var a = $(this);
      a.css({
          backgroundImage: backgroundUrl
      })
  })
    
  $('#style-switcher a.bg-box').click(function (e) {
      e.preventDefault();
      var backgroundUrl = 'url(images/background-patterns/' + $(this).attr('data-rel') + '.jpg)';
      $('body').css({
          backgroundImage: backgroundUrl,
          backgroundRepeat: "repeat",
        
        
      });
    $.cookie("portable_cookie_bgimage",backgroundUrl)
  });

  var background = $.cookie("portable_cookie_bgimage");
  if (background) {
      $('body').css({
        backgroundImage: background,
        backgroundRepeat: "repeat",
      
      
      });
  }
         
});   
 jQuery.noConflict()(function($){
$(document).ready(function() { 
  var originalFontSize = $('body').css('font-size');
 $(".resetFont").click(function(){
 $('body').css('font-size', originalFontSize);
 });
 // Increase Font Size
 $(".increaseFont").click(function(){
  var currentFontSize = $('body').css('font-size');
 var currentFontSizeNum = parseFloat(currentFontSize, 12);
   var newFontSize = currentFontSizeNum+1;
 $('body').css('font-size', newFontSize);
 return false;
 });
 // Decrease Font Size
 $(".decreaseFont").click(function(){
  var currentFontSize = $('body').css('font-size');
 var currentFontSizeNum = parseFloat(currentFontSize, 12);
   var newFontSize = currentFontSizeNum-1;
 $('body').css('font-size', newFontSize);
 return false;
 });
})
});

jQuery.noConflict()(function($){
$(document).ready(function() { 
    var originalFontSize = $(':header').css('font-size');
   $(".resetFontHeader").click(function(){
   $(':header').css('font-size', originalFontSize);
   });
 // Increase Font Size
 $(".increaseFontHeade").click(function(){
    var currentFontSize = $(':header').css('font-size');
   var currentFontSizeNum = parseFloat(currentFontSize, 12);
     var newFontSize = currentFontSizeNum+1;
   $(':header').css('font-size', newFontSize);
   return false;
 });
 // Decrease Font Size
 $(".decreaseFontHeader").click(function(){
    var currentFontSize = $(':header').css('font-size');
   var currentFontSizeNum = parseFloat(currentFontSize, 12);
     var newFontSize = currentFontSizeNum-1;
   $(':header').css('font-size', newFontSize);
   return false;
 });
})
});
