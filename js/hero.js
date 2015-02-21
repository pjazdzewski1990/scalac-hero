(function(window, $){
  console.log("Start!");
  var skills = [
    {name: "Scala", logo: "http://www.gravity.com/wp-content/uploads/2013/07/scala.gif"},
    {name: "Slick", logo: "http://slick.typesafe.com/resources/images/slick-logo.png"},
    {name: "Play", logo: "https://www.playframework.com/assets/images/logos/play_full_color.svg"},
    {name: "Akka", logo: "http://akka.io/resources/images/akka_full_color.svg"}
  ];
  
  var skillList = $("#skills-list");
  skills.forEach(function(skill){
    skillList.append('<li> <img data-name="' + skill.name + '" class="skill-img grey" src="' + skill.logo + '"></img> </li>');
  });
  
  $(".skill-img").on("click", function(evt){
    console.log("Clicked " + $(this).attr("data-name"), evt);
    $(this).toggleClass("grey");
  });
})(window, $);