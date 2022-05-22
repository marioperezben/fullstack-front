$("#botton").click(function(event) {
    let p1=$("#p1").val();
    let p2=$("#p2").val();
    if(p1=="" && p2==""){
        $("#label1").css("color", "red");
        $("#label2").css("color", "red");
        event.preventDefault();
    }else if(p1==""){
        $("#label1").css("color", "red");
        event.preventDefault();
     }else if(p2==""){
        event.preventDefault();
        $("#label2").css("color", "red");
       }
    ;
    
 
});