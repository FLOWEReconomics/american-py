/*
    @licstart  The following is the entire license notice for the
    JavaScript code in this page.

    Copyright (c) 2018 RT.

    The JavaScript code in this page is free software: you can
    redistribute it and/or modify it under the terms of the GNU
    General Public License (GNU GPL) as published by the Free Software
    Foundation, either version 3 of the License, or (at your option)
    any later version.  The code is distributed WITHOUT ANY WARRANTY;
    without even the implied warranty of MERCHANTABILITY or FITNESS
    FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

    As additional permission under GNU GPL version 3 section 7, you
    may distribute non-source (e.g., minimized or compacted) forms of
    that code without the copy of the GNU GPL normally required by
    section 4, provided you include this license notice and a URL
    through which recipients can access the Corresponding Source.


    @licend  The above is the entire license notice
    for the JavaScript code in this page.
*/

var config = {
    apiKey: "AIzaSyAaf-4vaiqhH8HTRyq4zWkCFoX9x82cdsU",
    authDomain: "web-notifications-c3ca0.firebaseapp.com",
    databaseURL: "https://web-notifications-c3ca0.firebaseio.com",
    projectId: "web-notifications-c3ca0",
    storageBucket: "web-notifications-c3ca0.appspot.com",
    messagingSenderId: "543434318086"
};

if (window.location.protocol === 'https:' &&
  'Notification' in window &&
  'serviceWorker' in navigator &&
  'localStorage' in window &&
  'fetch' in window &&
  'postMessage' in window
) {
    var messaging = null;

    setTimeout(function(){
        var s = document.getElementsByTagName('script')[0]
          , p = document.createElement('script');
        p.async = 'async';
        p.src = '/static/js/pushes/firebase.js';
        p.onload = function() {
            console.log(`firebase finish loading`);
            firebase.initializeApp(config);
            messaging = firebase.messaging();
            getToken();
        };
        s.parentNode.insertBefore(p, s);

        console.log(`notifications init`);
    }, 2500);
} else {
    if (window.location.protocol !== 'https:') {
        console.error('Is not from HTTPS');
    } else if (!('Notification' in window)) {
        console.error('Notification not supported');
    } else if (!('serviceWorker' in navigator)) {
        console.error('ServiceWorker not supported');
    } else if (!('localStorage' in window)) {
        console.error('LocalStorage not supported');
    } else if (!('fetch' in window)) {
        console.error('fetch not supported');
    } else if (!('postMessage' in window)) {
        console.error('postMessage not supported');
    }

    console.warn('This browser does not support desktop notification.');
    console.log('Is HTTPS', window.location.protocol === 'https:');
    console.log('Support Notification', 'Notification' in window);
    console.log('Support ServiceWorker', 'serviceWorker' in navigator);
    console.log('Support LocalStorage', 'localStorage' in window);
    console.log('Support fetch', 'fetch' in window);
    console.log('Support postMessage', 'postMessage' in window);
}

// Подписываемся
function getToken() {
    // 1. Запрос разрешения у пользователя (всплывающее окно "разрешить/запретить")
    messaging.requestPermission()
      .then(function (permission) {
          console.log('permission', permission);
          // 2.1 Если пользователь разрешил, то получаем токен
          messaging.getToken()
            .then(function (token) {
                console.log('token', token);
                fetch('/fcm/register/' + token, {
                    'method': 'POST',
                    'Content-Type': 'application/json'
                }).then(function (res) {
                    // Если подписка разрешена, то получим объект с данными подписки
                    console.log('/fcm/register/ responsed: ', res);
                }).catch(function (error) {
                    console.error('Unable to get permission to notify.', error);
                });
            });
      })
      .catch(function (error) {
          // 2.2 Если пользователь запретил подписку эта функция будет выполняться
          // при каждой загрузке страницы
          console.error('Unable to get permission to notify.', error);
      });
};
