
let num = Math.floor((Math.random() * 10) + 1);
let guessNum;
let score = 100;
let div=document.getElementsByTagName('div')[2];
document.getElementById("button").addEventListener("click", function() {
 
  guessNum=parseInt(document.getElementById("number").value);
  console.log(guessNum)
    if (guessNum === num) {
      score = score - 1;   
      div.classList.remove("output")
      div.classList.add("gif")     
      div.innerHTML = '<h3>Congratulations You Enterd the correct Number</h3>'+`<h6> You guess the number in ${100-score} attempts</h6>`+`<h5> The Number is : ${guessNum}</h5>`;
      document.getElementById("number").value='';       
    }
      else if (guessNum > num) {
        score = score - 1;   
        div.innerHTML = '<h4>Your number is greater than actual number<h4>';
        document.getElementById("number").value=''; 
      }
        else if (guessNum < num && guessNum > 0) {
          score = score - 1;
          div.innerHTML = '<h4>Your number is smaller than actual number<h4>';
          document.getElementById("number").value='';  
        }
          else {   
            div.innerHTML = 'Please enter the number between 0 to 10';  
            document.getElementById("number").value='';    
          }
})
document.getElementById("reset").addEventListener("click", function() {
  div.classList.add("output");
  div.classList.remove("gif");  
  div.innerHTML = "Output shown here";
  score=100;
})



