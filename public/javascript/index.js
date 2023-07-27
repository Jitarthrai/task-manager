document.addEventListener("DOMContentLoaded", function() {
  // Your JavaScript code here
  document.querySelector('#checkbox span').addEventListener('click',function(event) {
   console.log("span clicked");
   
  });
});



  
  // Get all "Delete" buttons
  const deleteButtons = document.querySelector(".delete-button");

  // Add click event listener to each "Delete" button
  
   deleteButtons.addEventListener("click", function() {
      console.log("button clicked");
      const taskIndex = this.dataset.taskIndex;
      deleteTask(taskIndex);
    });
 

  // Function to delete the task
  function deleteTask(index) {
    // Modify the tasks array to remove the task at the specified index
    tasks.splice(index, 1);
    console.log("called funciton deleteTask");

    // Redirect to the same page to update the view
    window.location.reload();
  }

  function toMarkCheck(index){
    console.log("clicked");
    const checkboxClicked = document.querySelector("#checkbox"+index);
    if (checkboxClicked.checked = true ){
    checkboxClicked.prop('checked', false);
  } else {
    checkboxClicked.prop('checked', true);
  }}

