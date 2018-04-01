      var link = document.querySelector(".search-form-button");
      var popup = document.querySelector(".booking-form");
      popup.classList.remove("modal-show-nojs")
      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.toggle("modal-show");
      });
