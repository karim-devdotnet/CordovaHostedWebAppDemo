//// Eine Einführung zur leeren Vorlage finden Sie in der folgenden Dokumentation:
//// http://go.microsoft.com/fwlink/?LinkID=397704
//// So debuggen Sie Code beim Seitenladen in Ripple oder auf Android-Geräten/-Emulatoren: Starten Sie die App, legen Sie Haltepunkte fest, 
//// und führen Sie dann "window.location.reload()" in der JavaScript-Konsole aus.
//(function () {
//    "use strict";

//    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

//    function onDeviceReady() {
//        // Verarbeiten der Cordova-Pause- und -Fortsetzenereignisse
//        document.addEventListener( 'pause', onPause.bind( this ), false );
//        document.addEventListener( 'resume', onResume.bind( this ), false );
        
//        // TODO: Cordova wurde geladen. Führen Sie hier eine Initialisierung aus, die Cordova erfordert.
//        var parentElement = document.getElementById('deviceready');
//        var listeningElement = parentElement.querySelector('.listening');
//        var receivedElement = parentElement.querySelector('.received');
//        listeningElement.setAttribute('style', 'display:none;');
//        receivedElement.setAttribute('style', 'display:block;');
//    };

//    function onPause() {
//        // TODO: Diese Anwendung wurde ausgesetzt. Speichern Sie hier den Anwendungszustand.
//    };

//    function onResume() {
//        // TODO: Diese Anwendung wurde erneut aktiviert. Stellen Sie hier den Anwendungszustand wieder her.
//    };
//})();

var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        app.receivedEvent('deviceready');

        // Here, we redirect to the web site.
        var targetUrl = "https://cordovahostedweb-starter.azurewebsites.net/";
        var bkpLink = document.getElementById("bkpLink");
        bkpLink.setAttribute("href", targetUrl);
        bkpLink.text = targetUrl;
        window.location.replace(targetUrl);
    },
    // Note: This code is taken from the Cordova CLI template.
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();