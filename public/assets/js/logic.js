// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".burgerAvailable").on("click", function(event) {
      let id = $(this).data("id");
      const isDevoured = true;
  
      var newState = {
        devoured: isDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newState
      }).then(
        function() {
          console.log("Nom Nom NOm");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit",(event) => {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      let newBurger = {
        burger_name: $("#bu").val().trim(),
      };
      console.log(newBurger);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("New burger has been added to the menu");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  