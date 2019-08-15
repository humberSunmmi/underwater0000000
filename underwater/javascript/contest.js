window.onload = function(e){
    var looper;
    var degrees = 0;
    var speed;
    var img = document.getElementById("wheel");
    var spinBtn = document.getElementById("spin");
    var submit = document.getElementById("submit");
    var email = document.getElementById("emailc").value;
    
    $("#contest").hide();

    spinBtn.onclick = spin;
    submit.onclick = showContest;
    
    function showContest(){
        /* validation
        if(email === ""){
            alert("Please enter your email to play");
            console.log(email);
            return false;
        }
        else{
            $("#email").hide();
            $("#contest").fadeIn(3000);
            console.log(email);
        }
        */
        $("#email").hide();
        $("#contest").fadeIn(3000);
    }
    
    function spin(){
        var rotate = setInterval(function ()
        {
            var speed = 1;
            $(img).css({'transform': 'rotate('+degrees + 'deg)'});
            degrees++;
            console.log(degrees);
            
            if(degrees >1200){
                speed = 70;
            }
            if(degrees > 1300){  
                clearInterval(rotate);
                $('#dialog').attr('title', 'Prize').text('Sorry, You did not win. Better luck next time!').dialog({buttons: { 'Ok': function() {window.location.href = "homepage.html";}}}); 
            }   
        },speed) 
    }
}