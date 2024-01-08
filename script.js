/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

    var musicInfo = [
        {
          artist: "Daft Punk",
          title: "Homework",
          release_year: 1997,
          formats: ["CD", "Cassette", "LP"],
          gold: true
        },
        {
          artist: "Elton John",
          title: "Piano Man",
          release_year: 1973,
          formats: ["CD", "8T", "LP"],
          gold: true
        }
      ];
      
      // prints a message in the browser's dev tools console
      console.log("Hello " + musicInfo[0]["artist"] + " 🌎");
      
      let example1 = document.querySelector("#artist");
      example1.innerHTML = musicInfo[0]["artist"] + "";

      let example2 = document.querySelector("#info");
      example2.innerHTML = musicInfo[0]["title"] + "";

      let example3 = document.querySelector("#releaseYear");
      example3.innerHTML = musicInfo[0]["release_year"] + "";

      