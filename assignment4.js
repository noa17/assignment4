// The anonymous function below will fire on page load

(function() {
  // Magic!
  console.log('Keepin\'n it clean with an external script!');

  var $url    = $('.flexsearch-input') || '';
  $('#mainForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      url: "http://www.mattbowytz.com/simple_api.json?data=all", 
      data: Array,
      method: 'GET',
    }).success(function(data) {
        var ul = document.getElementById("interests");
        var title = document.getElementById("showup1");
        title.innerText = "Interests";
        for (var i = 0; i < data.data.interests.length; i++) {
          var li = document.createElement("li");
          li.appendChild(document.createTextNode(data.data.interests[i]));
          ul.appendChild(li);        
        }
        var ul = document.getElementById("programmingLanguages");
        var title1 = document.getElementById("showup2");
        title1.innerText = "Programming Language";
        for (var i = 0; i < data.data.programming.length; i++) {
          var li = document.createElement("li");
          li.appendChild(document.createTextNode(data.data.programming[i]));
          ul.appendChild(li);  
        }
          // return(data.data.interests + "<BR>" + data.data.programming);
    }).fail(function(data) {
        for (var i = 0; i < data.data.interests.length; i++) {
        }
        for (var i = 0; i < data.data.programming.length; i++) {
        }


    });
  });
})();