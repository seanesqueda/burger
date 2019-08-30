$(function () {
    $("#submitBurger").on("click", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerForm").val().trim(),
            devoured: 0
        };
        console.log(newBurger)
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#devour").on("click", function (event) {
        event.preventDefault();
        
        var id = $(this).data("id");

        var devoured = {
            devoured: 1
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devoured
        }).then(
            function () {
                console.log("Eaten the burger")
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#delete").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("Deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

})