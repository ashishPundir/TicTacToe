// function to check winning pattern
function checkWinner(id)
{
  // check winning pattern only if there are atleast 3 moves by atleast one player
  if (sequence > 4)
  {
     var icon = $(id)[0].firstChild.classList[0]
     // check pattern by checking in all directions from current box. For.eg. for row 1 col 1 check horizontal, vertical and diagonal patterns hence three conditions
     if(id=="#row1col1")
     {
        if (( ($("#row1col2")[0].innerHTML.includes("</i>")) && ($("#row1col2")[0].firstChild.classList[0] === icon) ) && (  ($("#row1col3")[0].innerHTML.includes("</i>")) && ($("#row1col3")[0].firstChild.classList[0] === icon) ))
        {
           $("#row1col1 i").addClass("winner");
           $("#row1col2 i").addClass("winner");
           $("#row1col3 i").addClass("winner");
           return "Winner";
        }
        else if (( ($("#row2col1")[0].innerHTML.includes("</i>")) && ($("#row2col1")[0].firstChild.classList[0] === icon) ) && (  ($("#row3col1")[0].innerHTML.includes("</i>")) && ($("#row3col1")[0].firstChild.classList[0] === icon) ))
        {
           $("#row1col1 i").addClass("winner");
           $("#row2col1 i").addClass("winner");
           $("#row3col1 i").addClass("winner");
           return "Winner";
        }
        else if (( ($("#row2col2")[0].innerHTML.includes("</i>")) && ($("#row2col2")[0].firstChild.classList[0] === icon) ) && (  ($("#row3col3")[0].innerHTML.includes("</i>")) && ($("#row3col3")[0].firstChild.classList[0] === icon) ))
        {
           $("#row1col1 i").addClass("winner");
           $("#row2col2 i").addClass("winner");
           $("#row3col3 i").addClass("winner");
           return "Winner";
        }
        else
        {
            return "noWinner";
        }
     }
     else if(id=="#row1col2")
     {
       if (( ($("#row1col1")[0].innerHTML.includes("</i>")) && ($("#row1col1")[0].firstChild.classList[0] === icon) ) && (  ($("#row1col3")[0].innerHTML.includes("</i>")) && ($("#row1col3")[0].firstChild.classList[0] === icon) ))
       {
          $("#row1col2 i").addClass("winner");
          $("#row1col1 i").addClass("winner");
          $("#row1col3 i").addClass("winner");
          return "Winner";
       }
       else if (( ($("#row2col2")[0].innerHTML.includes("</i>")) && ($("#row2col2")[0].firstChild.classList[0] === icon) ) && (  ($("#row3col2")[0].innerHTML.includes("</i>")) && ($("#row3col2")[0].firstChild.classList[0] === icon) ))
       {
          $("#row1col2 i").addClass("winner");
          $("#row2col2 i").addClass("winner");
          $("#row3col2 i").addClass("winner");
          return "Winner";
       }
       else
       {
           return "noWinner";
       }
     }
     else if(id=="#row1col3")
     {
       if (( ($("#row1col1")[0].innerHTML.includes("</i>")) && ($("#row1col1")[0].firstChild.classList[0] === icon) ) && (  ($("#row1col2")[0].innerHTML.includes("</i>")) && ($("#row1col2")[0].firstChild.classList[0] === icon) ))
       {
         $("#row1col3 i").addClass("winner");
         $("#row1col1 i").addClass("winner");
         $("#row1col2 i").addClass("winner");
         return "Winner";
       }
       else if (( ($("#row2col3")[0].innerHTML.includes("</i>")) && ($("#row2col3")[0].firstChild.classList[0] === icon) ) && (  ($("#row3col3")[0].innerHTML.includes("</i>")) && ($("#row3col3")[0].firstChild.classList[0] === icon) ))
       {
         $("#row1col3 i").addClass("winner");
         $("#row2col3 i").addClass("winner");
         $("#row3col3 i").addClass("winner");
         return "Winner";
       }
       else if (( ($("#row2col2")[0].innerHTML.includes("</i>")) && ($("#row2col2")[0].firstChild.classList[0] === icon) ) && (  ($("#row3col1")[0].innerHTML.includes("</i>")) && ($("#row3col1")[0].firstChild.classList[0] === icon) ))
       {
         $("#row1col3 i").addClass("winner");
         $("#row2col2 i").addClass("winner");
         $("#row3col1 i").addClass("winner");
         return "Winner";
       }
       else
       {
           return "noWinner";
       }
     }
     else if(id=="#row2col1")
     {
       if (( ($("#row1col1")[0].innerHTML.includes("</i>")) && ($("#row1col1")[0].firstChild.classList[0] === icon) ) && (  ($("#row3col1")[0].innerHTML.includes("</i>")) && ($("#row3col1")[0].firstChild.classList[0] === icon) ))
       {
         $("#row2col1 i").addClass("winner");
         $("#row1col1 i").addClass("winner");
         $("#row3col1 i").addClass("winner");
         return "Winner";
       }
       else if (( ($("#row2col2")[0].innerHTML.includes("</i>")) && ($("#row2col2")[0].firstChild.classList[0] === icon) ) && (  ($("#row2col3")[0].innerHTML.includes("</i>")) && ($("#row2col3")[0].firstChild.classList[0] === icon) ))
       {
         $("#row2col1 i").addClass("winner");
         $("#row2col2 i").addClass("winner");
         $("#row2col3 i").addClass("winner");
         return "Winner";
       }
       else
       {
           return "noWinner";
       }

     }
     else if(id=="#row2col2")
     {
       if (( ($("#row1col1")[0].innerHTML.includes("</i>")) && ($("#row1col1")[0].firstChild.classList[0] === icon) ) && (  ($("#row3col3")[0].innerHTML.includes("</i>")) && ($("#row3col3")[0].firstChild.classList[0] === icon) ))
       {
         $("#row2col2 i").addClass("winner");
         $("#row1col1 i").addClass("winner");
         $("#row3col3 i").addClass("winner");
         return "Winner";
       }
       else if (( ($("#row1col3")[0].innerHTML.includes("</i>")) && ($("#row1col3")[0].firstChild.classList[0] === icon) ) && (  ($("#row3col1")[0].innerHTML.includes("</i>")) && ($("#row3col1")[0].firstChild.classList[0] === icon) ))
       {
         $("#row2col2 i").addClass("winner");
         $("#row1col3 i").addClass("winner");
         $("#row3col1 i").addClass("winner");
         return "Winner";
       }
       else if (( ($("#row2col1")[0].innerHTML.includes("</i>")) && ($("#row2col1")[0].firstChild.classList[0] === icon) ) && (  ($("#row2col3")[0].innerHTML.includes("</i>")) && ($("#row2col3")[0].firstChild.classList[0] === icon) ))
       {
         $("#row2col2 i").addClass("winner");
         $("#row2col1 i").addClass("winner");
         $("#row2col3 i").addClass("winner");
         return "Winner";
       }
       else if (( ($("#row1col2")[0].innerHTML.includes("</i>")) && ($("#row1col2")[0].firstChild.classList[0] === icon) ) && (  ($("#row3col2")[0].innerHTML.includes("</i>")) && ($("#row3col2")[0].firstChild.classList[0] === icon) ))
       {
         $("#row2col2 i").addClass("winner");
         $("#row1col2 i").addClass("winner");
         $("#row3col2 i").addClass("winner");
         return "Winner";
       }
       else
       {
           return "noWinner";
       }

     }
     else if(id=="#row2col3")
     {
       if (( ($("#row2col1")[0].innerHTML.includes("</i>")) && ($("#row2col1")[0].firstChild.classList[0] === icon) ) && (  ($("#row2col2")[0].innerHTML.includes("</i>")) && ($("#row2col2")[0].firstChild.classList[0] === icon) ))
       {
         $("#row2col3 i").addClass("winner");
         $("#row2col1 i").addClass("winner");
         $("#row2col2 i").addClass("winner");
         return "Winner";
       }
       else if (( ($("#row1col3")[0].innerHTML.includes("</i>")) && ($("#row1col3")[0].firstChild.classList[0] === icon) ) && (  ($("#row3col3")[0].innerHTML.includes("</i>")) && ($("#row3col3")[0].firstChild.classList[0] === icon) ))
       {
         $("#row2col3 i").addClass("winner");
         $("#row1col3 i").addClass("winner");
         $("#row3col3 i").addClass("winner");
         return "Winner";
       }
       else
       {
           return "noWinner";
       }

     }
     else if(id=="#row3col1")
     {
       if (( ($("#row1col1")[0].innerHTML.includes("</i>")) && ($("#row1col1")[0].firstChild.classList[0] === icon) ) && (  ($("#row2col1")[0].innerHTML.includes("</i>")) && ($("#row2col1")[0].firstChild.classList[0] === icon) ))
       {
         $("#row3col1 i").addClass("winner");
         $("#row1col1 i").addClass("winner");
         $("#row2col1 i").addClass("winner");
         return "Winner";
       }
       else if (( ($("#row3col2")[0].innerHTML.includes("</i>")) && ($("#row3col2")[0].firstChild.classList[0] === icon) ) && (  ($("#row3col3")[0].innerHTML.includes("</i>")) && ($("#row3col3")[0].firstChild.classList[0] === icon) ))
       {
         $("#row3col1 i").addClass("winner");
         $("#row3col2 i").addClass("winner");
         $("#row3col3 i").addClass("winner");
         return "Winner";
       }
       else if (( ($("#row2col2")[0].innerHTML.includes("</i>")) && ($("#row2col2")[0].firstChild.classList[0] === icon) ) && (  ($("#row1col3")[0].innerHTML.includes("</i>")) && ($("#row1col3")[0].firstChild.classList[0] === icon) ))
       {
         $("#row3col1 i").addClass("winner");
         $("#row2col2 i").addClass("winner");
         $("#row1col3 i").addClass("winner");
         return "Winner";
       }
       else
       {
           return "noWinner";
       }

     }
     else if(id=="#row3col2")
     {
       if (( ($("#row1col2")[0].innerHTML.includes("</i>")) && ($("#row1col2")[0].firstChild.classList[0] === icon) ) && (  ($("#row2col2")[0].innerHTML.includes("</i>")) && ($("#row2col2")[0].firstChild.classList[0] === icon) ))
       {
         $("#row3col2 i").addClass("winner");
         $("#row1col2 i").addClass("winner");
         $("#row2col2 i").addClass("winner");
         return "Winner";
       }
       else if (( ($("#row3col1")[0].innerHTML.includes("</i>")) && ($("#row3col1")[0].firstChild.classList[0] === icon) ) && (  ($("#row3col3")[0].innerHTML.includes("</i>")) && ($("#row3col3")[0].firstChild.classList[0] === icon) ))
       {
         $("#row3col2 i").addClass("winner");
         $("#row3col1 i").addClass("winner");
         $("#row3col3 i").addClass("winner");
         return "Winner";
       }
       else
       {
           return "noWinner";
       }

     }
     else if(id=="#row3col3")
     {
       if (( ($("#row1col1")[0].innerHTML.includes("</i>")) && ($("#row1col1")[0].firstChild.classList[0] === icon) ) && (  ($("#row2col2")[0].innerHTML.includes("</i>")) && ($("#row2col2")[0].firstChild.classList[0] === icon) ))
       {
         $("#row3col3 i").addClass("winner");
         $("#row1col1 i").addClass("winner");
         $("#row2col2 i").addClass("winner");
         return "Winner";
       }
       else if (( ($("#row3col1")[0].innerHTML.includes("</i>")) && ($("#row3col1")[0].firstChild.classList[0] === icon) ) && (  ($("#row3col2")[0].innerHTML.includes("</i>")) && ($("#row3col2")[0].firstChild.classList[0] === icon) ))
       {
         $("#row3col3 i").addClass("winner");
         $("#row3col1 i").addClass("winner");
         $("#row3col2 i").addClass("winner");
         return "Winner";
       }
       else if (( ($("#row1col3")[0].innerHTML.includes("</i>")) && ($("#row1col3")[0].firstChild.classList[0] === icon) ) && (  ($("#row2col3")[0].innerHTML.includes("</i>")) && ($("#row2col3")[0].firstChild.classList[0] === icon) ))
       {
         $("#row3col3 i").addClass("winner");
         $("#row1col3 i").addClass("winner");
         $("#row2col3 i").addClass("winner");
         return "Winner";
       }
       else
       {
           return "noWinner";
       }

     }
  }
  else
  {
     return "noWinner";
  }
}



var sequence =1;
var turn=0;
var Player1Count=0;
var Player2Count = 0;
$(document).ready(function(){

      $(".box").click(function(){
      turn = sequence%2;
      if (turn===1 && !this.innerHTML.includes("</i>"))
      {
          this.innerHTML = '<i class="fas fa-times fa-10x"></i>';
          var sound= new Audio("sound/cross.mp3");
          sound.play();
      }
      else if (turn === 0 && !this.innerHTML.includes("</i>"))
      {
          this.innerHTML = '<i class="far fa-circle fa-10x"></i>';
          var sound= new Audio("sound/circle.mp3");
          sound.play();
      }
      sequence++;

      var result = checkWinner("#"+this.id);
      if (result === "Winner" && turn === 0)
      {
        $("h1")[0].innerText = "Player 2 wins!!";
        Player2Count += 1;
        $(".right span")[0].innerHTML= Player2Count
      }
      else if (result === "Winner" && turn === 1)
      {
        $("h1")[0].innerText = "Player 1 wins!!";
        Player1Count += 1;
        $(".left span")[0].innerHTML= Player1Count
      }
      if(result === "Winner")
      {
        for(var i=0; i < $(".box").length;i++)
        {
          var block = "#"+ $(".box")[i].id;
          $(block).first().addClass("disableClick");
        }
        $("body").first().addClass("winnerPage");
        setTimeout(function () {
            $("h1")[0].innerText = "Play Tic Tac Toe";
            $("body").first().removeClass("winnerPage");
            sequence = 1;
            for(var i=0; i < $(".box").length;i++)
            {
              var block = "#"+ $(".box")[i].id;
              $(block).first().removeClass("disableClick");
              $(block)[0].innerHTML="";
            }
        }, 2500);
      }
      else if (sequence ===10 && result === "noWinner")
      {
        $("h1")[0].innerText = "It's a draw";
        setTimeout(function () {
            $("h1")[0].innerText = "Play Tic Tac Toe";
            sequence = 1;
            for(var i=0; i < $(".box").length;i++)
            {
              var block = "#"+ $(".box")[i].id;
              $(block).first().removeClass("disableClick");
              $(block)[0].innerHTML="";
            }
        }, 2000);
      }

    });

});
