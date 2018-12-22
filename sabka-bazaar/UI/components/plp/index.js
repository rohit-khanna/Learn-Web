$().ready(function() {
  $(".plp__section__category__filter__container .filter-header").on(
    "click",
    function() {
      onFilterListClick();
    }
  );
  $(".plp__section__category__filter__container .filter_list li").on(
    "click",
    function() {
      let filtername = "";
      let categoryId = -1;
      if (
        $(this)
          .children(".icon")
          .children("i")
          .hasClass("icon-selected")
      ) {
        // case of Unset the Filter
        filtername = "Select a filter";
        categoryId = -1;
      } else {
        // new filter Selected By User
        filtername = $(this)
          .children(".filter-name")
          .text();
        // clear All Selected Classes
        $(".plp__section__category__filter__container .filter_list li")
          .children(".icon")
          .children("i")
          .removeClass("icon-selected");

        categoryId = $(this)[0].id;
      }

      // add this as Selected
      $(this)
        .children(".icon")
        .children("i")
        .toggleClass(" icon-selected");

      // close the filter list
      onFilterListClick(filtername);

      applyFilter(categoryId);
    }
  );

  function onFilterListClick(filterValue) {
    //filterValue = filterValue || "Select a Filter";

    var element = $(
      ".plp__section__category__filter__container .filter-header"
    );

    
    //element.next(".filter_list").toggleClass("hidden");
    element.next(".filter_list").slideToggle(300,function(){
     
      if ($(this).css('display')==='block') {
        element
          .children(".icon")
          .children("i")
          .text("keyboard_arrow_up");
      } else {
        element
          .children(".icon")
          .children("i")
          .text("keyboard_arrow_down");
      }
      
    });

    
    if (filterValue) element.children(".filter-name").text(filterValue);
  }

  function applyFilter(categoryId) {
    console.log("Category ID Clicked:", categoryId);
  }
});
