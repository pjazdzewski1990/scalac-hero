(function(window, $){
  console.log("Start!");
  var skillsBackend = [
    {name: "Scala", logo: "http://www.gravity.com/wp-content/uploads/2013/07/scala.gif"},
    {name: "Slick", logo: "http://slick.typesafe.com/resources/images/slick-logo.png"},
    {name: "Play", logo: "https://www.playframework.com/assets/images/logos/play_full_color.svg"},
    {name: "Akka", logo: "http://akka.io/resources/images/akka_full_color.svg"},
    {name: "Scala Test", logo: "http://blog.appfusions.com/wp-content/uploads/2013/05/scalatest-logo.jpg"},
    {name: "Reactive Mongo", logo: "http://reactivemongo.org/images/logo.png"},
    {name: "Lift", logo: "http://hsto.org/storage/0695bf43/853032a9/d74eae2a/ef88d2e1.png"},
    {name: "Spray", logo: "http://spray.io/img/logo-large.png"},
    {name: "Spark", logo: "https://spark.apache.org/images/spark-logo.png"},
    {name: "Finagle", logo: "https://pbs.twimg.com/media/BXhBtGoCYAAFwwJ.png"},
    {name: "Sbt", logo: "http://eed3si9n.github.io/sbt-logo/sbt-logo-orange-200x120.png"},
    {name: "Scalding", logo: "https://camo.githubusercontent.com/dd137c31e4abf89d794a89f8b8e379130fb06d6f/68747470733a2f2f7261772e6769746875622e636f6d2f747769747465722f7363616c64696e672f646576656c6f702f6c6f676f2f7363616c64696e672e706e67"}
  ];
  var skillListBackend = $("#skills-list-backend");
  skillsBackend.forEach(function(skill){
    skillListBackend.append('<li> <img data-name="' + skill.name + '" class="skill-img grey" src="' + skill.logo + '"></img> </li>');
  });
  
  $(".skill-img").on("click", function(evt){
    console.log("Clicked " + $(this).attr("data-name"), evt);
    $(this).toggleClass("grey");
  });
  
  $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
  });
})(window, $);