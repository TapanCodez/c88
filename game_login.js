// Create function addUser()
function addUser() {
  player1_name = document.getElementById("player1_name_imput").value;
  player2_name = document.getElementById("player2_name_imput").value;
  
  localStorage.setItem("player1_name",player1_name);
  localStorage.setItem("player2_name",player2_name);
  
  window.location = "game_page.html";
  
  // Get value of user by id player1_name_input and player2_name_input
  player1_name = document.getElementById("player1_name_imput").value;
  player2_name = document.getElementById("player2_name_imput").value;
  // Store these values locally
  player1_name = document.getElementById("player1_name_imput").value;
  player2_name = document.getElementById("player2_name_imput").value;
  //Assign "game_page.html" to window.location
  window.location = "game_page.html";
}
