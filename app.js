        // ------ACCORDIANS
        var acc = document.getElementsByClassName("accordian");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";

                }
            });
        }

    // ---------------JS SCRIPT-----------------

        //   menu 
        $(document).ready(function () {
            $(".toggle").click(function () {
                // $(".menu.active").toggleClass("active");
                $(".menu").toggleClass("active1");
                $(".toggle").toggleClass("active2");
            })

            // ---------COUNTERS

            $('.Count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
        });
          });
        });

  

