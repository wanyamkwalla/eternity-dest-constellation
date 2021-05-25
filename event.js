$(function(){ 
    //s
    $.ajax({
        url:'data.xml',
        type:'GET',
        success:function(data){
  
            var imgSrc,name,nihongo,constellation1,constellation2;
            function funList(code){
                var cute='',popup;
                $(data).find('item').each(function(i){
  
                    imgSrc = $(this).find('imgSrc').text();
                    name = $(this).find('name').text();
                    nihongo = $(this).find('nihongo').text();
                    constellation1 = $(this).find('constellation1').text();
                    constellation2 = $(this).find('constellation2').text();
                      
                    cute += "<li data-num='"+i+"' id='"+name+"'>";
                    cute += "<img src='"+imgSrc+"' alt='"+name+"'>";
                    cute += "</li>";
                    
                    if(Number(code) == i){
                        popup += "<div data-num='"+i+"' class='cute'>";
                        popup += "<img src='"+imgSrc+"' alt='"+name+"'>";
                        popup += "</div>";
                        popup += "<span class='text-vertical-1'>"+nihongo+"</span>";
                        popup += "<div calss='constellation1'><img src='"+constellation1+"' alt=''></div>";
                        popup += "<div calss='constellation2'><img src='"+constellation2+"' alt=''></div>";
                        
                        $('#popup .open_popup').html(popup);  
                    }
                    if(code == 'all'){
                        $('#youngjong ul').html(cute);
                    }   
       
                });

                 //popup 
                var suki = $('#youngjong ul li');
                var popupOpen = $('#popup');
                var popupClose = $('#popup .close');
  
                 //클릭 이벤트
                 var windowWidth = $( window ).width();
                 if(windowWidth < 500) {
                 } else {
                    suki.click(function(){
                        funList($(this).attr('data-num'));
                        popupOpen.css({display:"block",opacity:"0"}).animate({'opacity': 1}, 250);    
                    });
                    popupClose.click(function(){
                        popupOpen.css({display:"none",opacity:"0"});
                    });  
                 }

            //
            }
            funList('all');    
                     
        //
        }
    });
    //e
  })