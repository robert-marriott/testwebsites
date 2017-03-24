// With this solution you do not need any plugin and there's
// no setup required besides placing the script before your closing </body> tag.
// On load, if there is a hash in the address, we scroll to it.
// And - whenever you click an a link with an href hash e.g. #top, we scroll to it.
$("a[href^='#']").on("click", function(e) {
  e.preventDefault();
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top
  }, 1000);
});

if ($(window.location.hash).length > 1) {
  $("html, body").animate({
    scrollTop: $(window.location.hash).offset().top
  }, 1000);
}
