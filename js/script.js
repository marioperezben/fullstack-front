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

$("#p7").on('change', function() {  
    tamano_pizza=this.value
    console.log(tamano_pizza);
    $.ajax({
        type:"POST",
        url: "http://127.0.0.1:5000/checksize",
        data: {
            p7: tamano_pizza,
        },
        success: function(result) {
            $("#resultado_tamano").text(result);
        }
    })
    });