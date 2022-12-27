          
$(document).ready(function() {
    $.getJSON(
      "https://cryptic-ravine-96718.herokuapp.com/",
      null,
      function(data) {
        var news = document.getElementById("news");
        var newcol = document.createElement("ul");
        newcol.setAttribute("class", "list-inline");
        news.appendChild(newcol);
        for (var i = 0; i < data.news.length; i++) {
          var li = document.createElement("li");
          li.setAttribute("class", "list-inline-item");
          li.style.listStyle="none";
          // li.style.display="inline";
          var card = document.createElement("div");
          card.setAttribute("class", "card");
          card.style.width = "400px";
          card.style.background = "#fff";
         
          card.style.border="4px solid  #000";
          card.style.boxShadow = "#000";
          
         
   
          var card_title = document.createElement("h5");
          card_title.innerHTML = data.news[i].title;
          card_title.setAttribute("class", "card-title");
          var news_img = document.createElement("img");
          news_img.setAttribute("src", data.news[i].img);
          news_img.setAttribute("class", "card-img-top");
          news_img.style.width="95%";
          news_img.style.height="100%";
          news_img.style.marginTop="10px";
          news_img.style.borderRadius="12px";
        
          var btntoart = document.createElement("a");
          btntoart.setAttribute("class", "btn btn-main");
          btntoart.style.color = "#fff";
          btntoart.style.padding = "18px";
          btntoart.style.borderRadius = "25px";
          btntoart.style.border = "#000";
          btntoart.style.background = "#2e63eb";
          btntoart.style.fontSize = "22px";
          btntoart.style.textDecoration="none";
          btntoart.setAttribute("href", data.news[i].link);
          
          btntoart.innerHTML = "Read More";
          
          var card_body = document.createElement("div");
          card_body.setAttribute("class", "card-body");
          card_body.appendChild(card_title);
          card_body.appendChild(btntoart);
          card.appendChild(news_img);
          card.appendChild(card_body);
          li.appendChild(card);
          newcol.appendChild(li);
        }
      }
    );
  });




  