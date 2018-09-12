$().ready(function() {
  /**
   * for the sticky navigation
   */
  $(".js--section-features").waypoint(
    function(direction) {
      if (direction === "down") {
        $("header nav").addClass("sticky");
      } else if (direction === "up") {
        $("header nav").removeClass("sticky");
      }
    },
    { offset: "5%" }
  );

  $(".wp--anim-feat").waypoint(
    function(direction) {
      $(".wp--anim-feat").addClass("animated fadedIn");
    },
    { offset: "50%" }
  );

  $(".wp--anim-steps").waypoint(
    function(direction) {
      $(".wp--anim-steps").addClass("animated slideInUp");
    },
    { offset: "50%" }
  );

  // $(".wp--anim-cities").waypoint(
  //   function(direction) {
  //     $(".wp--anim-cities").addClass("animated pulse");
  //   },
  //   { offset: "40%" }
  // );

  $(".wp--anim-selectedPlan").waypoint(
    function(direction) {
      $(".wp--anim-selectedPlan").addClass("animated pulse");
    },
    { offset: "40%" }
  );

  // /**
  //  * scroll to sections
  //  */
  // $(".js--scroll-to-plans").click(function() {
  //   $("html,body").animate(
  //     { scrollTop: $(".js--section-plans").offset().top },
  //     1500
  //   );
  // });

  // $(".js--scroll-to-start").click(function() {
  //   $("html,body").animate(
  //     { scrollTop: $(".js--section-features").offset().top },
  //     1000
  //   );
  // });

  /**
   * Navigation to Anchors
   */

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
});
