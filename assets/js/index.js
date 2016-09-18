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
/*
===============================================================================
  Disqus 
===============================================================================
*/
(function () { // DON'T EDIT BELOW THIS LINE
    var d = document,
        s = d.createElement('script');

    s.src = '//tilligettherecom.disqus.com/embed.js';

    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();
