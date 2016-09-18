/*
===============================================================================
  Infinity Scroll - YEAH!
===============================================================================
*/
    $('.index-wrapper').infinitescroll({
        navSelector: "#next:last",
        nextSelector: "a#next:last",
        itemSelector: "#timeline",
        dataType: 'html',
        maxPage: 3,
    });
