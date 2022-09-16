// create eventlister
$('#submit').click(function(){
//store user input
    $("input").keyup(function() {
      //store input value in variable
      var value = $(this).val();
        //get API data, set it to JSON
      $.get(`http://www.songsterr.com/a/ra/songs/byartists.json?artists=${value}`, (data) => {
        //loop over data to access the data
       //console.log(data)
       //creating one container
        var container = $("<div class=container></div>");
        $("body").append(container);
          for(let i = 0; i < 15; i++) {
            //declare variables for data
            // console.log(data[i])
             var title = data[i].title;
             var idNum = data[i].id;
             var songUrl = `http://www.songsterr.com/a/wa/song?id=${idNum}`
             var artists = data[i].artist.nameWithoutThePrefix;
             var tabType = data[i].tabTypes
              //console.log(title);     
            //use jQuery to manipulate DOM
             var newDiv = $("<div class=results></div>")
             var songTitle = $(`<h3 class=title>${title}</h3>`)
             var creator = $(`<h2 class=creator>${artists}</h2>`)
             var newLink = $(`<a href=${songUrl} target="_blank">View Sheet Music</a>`)
              //var details= $("<div class=details>")
              //var newImg = $(`<img class=image src=showImage>`)
              //prepending and appending new divs to document
    
             $(".container").append(newDiv);
              newDiv.append([songTitle, creator, newLink]);
            };
            
      });
     
      
      $(".container").remove();
    })
    .keyup();

    
});    
/*$('#submit2').click(function(){
  //store user input
      $("input").keyup(function() {
        //store input value in variable
        var value = $(this).val();
          //get API data, set it to JSON
        $.get(`http://www.songsterr.com/a/ra/songs.json?pattern=${value}`, (data) => {
          //loop over data to access the data
         //console.log(data)
         //creating one container
          var container2 = $("<div class=container></div>");
          $("body").append(container2);
            for(let i = 0; i < 15; i++) {
              //declare variables for data
              
               var title2 = data[i].title;
               var idNum2 = data[i].id;
               var songUrl2 = `http://www.songsterr.com/a/wa/song?id=${idNum2}`
               var artists2 = data[i].artist.nameWithoutThePrefix;
               var tabType = data[i].tabTypes
                console.log(title);     
              //use jQuery to manipulate DOM
               var newDiv2 = $("<div class=results></div>")
               var songTitle2 = $(`<h3 class=title>${title2}</h3>`)
               var creator2 = $(`<h2 class=creator>${artists2}</h2>`)
               var newLink2 = $(`<a href=${songUrl2} target="_blank">View Sheet Music</a>`)
                //var details= $("<div class=details>")
                //var newImg = $(`<img class=image src=showImage>`)
                //prepending and appending new divs to document
      
               $(".container2").append(newDiv2);
                newDiv2.append([songTitle2, creator2, newLink2]);
              };
         
        });
     
        $(".container2").remove()
      })
      .keyup();
  
  });   */