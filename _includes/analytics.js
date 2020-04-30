// Analytics script to dynamically add the googletagmanager script
var analytics_script = document.createElement('script');
analytics_script.setAttribute('src','https://www.googletagmanager.com/gtag/js?id=' + GA_ID);
document.body.appendChild(analytics_script);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', GA_ID);



