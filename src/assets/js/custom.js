$( () => {
    setTimeout(()=>{
        console.log('feathrer')
        feather.replace();      
        $(".toggle-switch .switch-right").click(function(){
            $(".left-section").toggleClass("close-left");
            $(".content-section").toggleClass("close-right");
            $(".switch-right").hide();
            $(".switch-left").show();
          });
            $(".toggle-switch .switch-left").click(function(){
            $(".left-section").toggleClass("close-left");
            $(".content-section").toggleClass("close-right");
            $(".switch-right").show();
            $(".switch-left").hide();
          });
            
            if($(window ).width() < 768){		
                resizeFunc($(window ).width())
            }else{
                resizeFunc($(window ).width());
            }
            
            $(window).on("resize", function(event){
                resizeFunc($(this).width())		 
            });
    }, 10000);

         
     
});
function resizeFunc(size){
    if(size < 768){			
        $(".left-section").addClass("close-left");
        $(".content-section").addClass("close-right");
        $(".switch-right").hide();
        $(".switch-left").show();
    }else{
        $(".left-section").removeClass("close-left");
        $(".content-section").removeClass("close-right");
        $(".switch-right").show();
        $(".switch-left").hide();
    } 
}