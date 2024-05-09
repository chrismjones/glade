import onNavigate from '../lib/onNavigate';

function intercomMessenger() {
  window.intercomSettings = { app_id: "sqvgjxhh" };
  
  (function() {
      var w = window;
      var ic = w.Intercom;
      if (typeof ic === "function") {
          ic('reattach_activator');
          ic('update', w.intercomSettings);
      } else {
          var d = document;
          var i = function() {
              i.c(arguments);
          };
          i.q = [];
          i.c = function(args) {
              i.q.push(args);
          };
          w.Intercom = i;
          var l = function() {
              var s = d.createElement('script');
              s.type = 'text/javascript';
              s.async = true;
              s.src = 'https://widget.intercom.io/widget/sqvgjxhh';
              s.setAttribute('id', 'intercom-messenger') 
              var x = d.getElementsByTagName('script')[0];
              x.parentNode.insertBefore(s, x);
          };
          if (document.readyState !== 'complete') {
              w.addEventListener('load', l, false);
          } else {
              l();
          }
      }
  })();
}

export default () => {
  intercomMessenger();
  onNavigate(() => {
    window.Intercom = null;
    document.getElementById('intercom-messenger').remove();
    intercomMessenger();
  });
}
