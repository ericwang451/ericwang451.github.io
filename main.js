$(document).ready(function(){
    // $("#name-title").html("🙏🏿");
    console.log('Hello world');

    $( "#projects-link" ).click(function() {
        $('html, body').animate({scrollTop: $('#projects').offset().top},
            1000);
    });

    $( "#profile-picture" ).click(function() {
        
        const original = "https://media-exp1.licdn.com/dms/image/C5603AQEzj6xm38cJaw/profile-displayphoto-shrink_400_400/0?e=1611187200&v=beta&t=Go5FY4YWhMpmbapZu-54RsBn_h-r8UAc3-NjSAXkIUw";
        
        const second = "https://upload.wikimedia.org/wikipedia/en/6/62/Kermit_the_Frog.jpg";
        
        const curr = $("#profile-picture").attr("src");
        
        $("#profile-picture").attr("src", curr == original ? second : original)
    });
});