// GitHub Pages SPA redirect handler
// Reads the ?p= query parameter from 404.html redirect and replaces the history state
(function() {
  var redirect = document.querySelector('meta[name="redirect"]');
  if (!redirect) return;

  var search = window.location.search;
  var queryParam = search.indexOf('?p=');
  if (queryParam === -1) return;

  var path = decodeURIComponent(search.slice(queryParam + 3));
  // Remove the query string
  window.history.replaceState(null, null, window.location.pathname.replace(/\/$/, '') + path);
})();
