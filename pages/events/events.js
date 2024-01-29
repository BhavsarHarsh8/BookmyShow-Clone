const login = () => {
    window.location = "file:///H:/All%20Programs/JAVA%20SCRIPT/Tasks/Login%20Page/index.html";
  }
  const searchFun = (event) => {
    let inputText = document.getElementById('inputText').value.toLowerCase();
    let str = "";
    if (event.key === 'Enter') {
      if (inputText == 'movies') {
        window.location = "file:///H:/All%20Programs/JAVA%20SCRIPT/Tasks/BookMyShow%20Clone/pages/movies/moviespage.html";
        str = "";
        document.getElementById('inputText').value = str;
      }
      else if (inputText == 'stream') {
        window.location = "file:///H:/All%20Programs/JAVA%20SCRIPT/Tasks/BookMyShow%20Clone/pages/stream/stream.html";
        str = "";
        document.getElementById('inputText').value = str;
      }
      else if (inputText == 'events') {
        window.location = "file:///H:/All%20Programs/JAVA%20SCRIPT/Tasks/BookMyShow%20Clone/pages/events/events.html";
        str = "";
        document.getElementById('inputText').value = str;
      }
      else if (inputText == 'plays') {
        window.location = "file:///H:/All%20Programs/JAVA%20SCRIPT/Tasks/BookMyShow%20Clone/pages/plays/plays.html";
        str = "";
        document.getElementById('inputText').value = str;
      }
      else if (inputText == 'fighter') {
        window.location = "file:///H:/All%20Programs/JAVA%20SCRIPT/Tasks/BookMyShow%20Clone/pages/fighter/fighter.html";
        str = "";
        document.getElementById('inputText').value = str;
      }
      else {
        alert("Please Enter Valid Search");
        str = "";
        document.getElementById('inputText').value = str;
      }
    }
  }

  // const comedyFun = () => {
  //   let conatiner = document.getElementById('container');
  //   let card = conatiner.getElementsByTagName('card');

  //   for(let i=0;i<=card.length;i++){
  //     let cardData = card[i].getElementsByTagName('card-text');
  //     if(cardData){
  //       let txtValue = cardData.innerHTML || cardData.innerText;
  //       if(txtValue.toLowerCase() == 'stand-up comedy')
  //       {
  //         card[i].style.display = "";
  //       }
  //       else{
  //         card[i].style.display = "none";
  //       }
  //     }
  //   }
  // }