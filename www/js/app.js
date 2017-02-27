


angular.module('bayer', ['ionic', 'ionic.contrib.drawer', 'ngIOS9UIWebViewPatch', 'bayer.controllers', 'bayer.services', 'ngCordova'])

.run(function($ionicPlatform, $rootScope, $ionicHistory, $ionicScrollDelegate, $ionicModal, $utils, $timeout, $cordovaGoogleAnalytics, $localStorage) {

      $rootScope.inAnimation = false;
      $rootScope.dlgInsider = null;
    
      $rootScope.dcpTabId = 0;
      $rootScope.dcpChildTabId = 0;
      $rootScope.insiderIndex = -1;
      $rootScope.insiderSIndex = -1;
      $rootScope.insiderEIndex = -1;
      
      $rootScope.menuItems = [
            { 
                  title: "<i class='ion-android-star'></i>Bookmarks",
                  href: "#/app/bookmarks"
            },
            {
                  title: "<i class='ion-flash'></i>Quick Access",
                  expanded: false,
                  items: [
                        {
                              title: "The DIALOGUE Scripts",
                              href: "#/app/dialog-scripts"
                        },
                        {
                              title: "Patient Materials",
                              href: "#/app/patient-materials"
                        },
                        {
                              title: $utils.isPhone()?"Product Coverage<br> Information":"Product Coverage Information",
                        }
                  ]
            },
            {
                  title: "<i class='ion-android-list'></i>Solution Center",
                  href: "#/app/solution-center"
            },
            {
                  title: "Home",
                  href: "#/app/home"
            },
            {
                  title: "Dialogue - Diabetes Consult<br> for Pharmacy",
                  href: "#/app/dcp",
                  items: [
                        {
                              title: "Blood Glucose Monitoring",
                              href: "#/app/dcp/1"
                        },
                        {
                              title: "Healthy Eating",
                              href: "#/app/dcp/2"
                        },
                        {
                              title: "Physical Activity",
                              href: "#/app/dcp/3"
                        },
                        {
                              title: "Diabetes Background",
                              href: "#/app/dcp/4"
                        }
                  ]
            },
            {
                  title: "Meter Training",
                  href: "#/app/mtc-main"
            },
            {
                  title: "Diabetes InReview",
                  href: "#/app/diabetes-review"
            },
            {
                  title: "Contact Us/Feedback",
                  href: "#"
            },
            {
                  title: "Updates",
                  href: "#/app/updates"
            }
      ];

      $rootScope.CONFIG = STRING_RESOURCES;
      $rootScope.INSIDERS = INSIDER_RESOURCES;

      $ionicPlatform.ready(function() {

            if (navigator.splashscreen){
                  if (ionic.Platform.isAndroid())
                      $timeout(function(){
                          navigator.splashscreen.hide();
                      }, 3500);
                  else
                      navigator.splashscreen.hide();
            }
            if (window.cordova && window.cordova.plugins.Keyboard) {
                  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                  StatusBar.styleLightContent();
            }
            if (window.analytics){
                  $cordovaGoogleAnalytics.startTrackerWithId("UA-72828342-2"); // ConNext Ed

                  var pharIndex = JSON.stringify($localStorage.get("SURVEY-PHAR-INDEX"));
                  $timeout(function(){
                        if (pharIndex == "{}") return;
                        pharIndex = parseInt(pharIndex);
                        $cordovaGoogleAnalytics.addCustomDimension("1", $rootScope.CONFIG.pharmacies[pharIndex]);
                        // $cordovaGoogleAnalytics.addCustomDimension("2", pharIndex);
                  }, 100);
            }
            if (ionic.Platform.isIOS() && (typeof window.screen.unlockOrientation !== "undefined")){
                  screen.lockOrientation('portrait-primary');
            }

            var imgs = [
                "./img/dcp-tab/dcp-tab-img01.jpg",
                "./img/dcp-tab/dcp-tab-img02.jpg",
                "./img/dcp-tab/dcp-tab-img03.jpg",
                "./img/dcp-tab/dcp-tab-img04.jpg",
                "./img/dcp/dcp-main.jpg"
            ];

            for (var i=0; i<imgs.length; i++){
                var img = new Image();
                img.index = i;
                img.src = imgs[i];
            }

      });

      // Back button event
      $ionicPlatform.registerBackButtonAction(function(event){

            if ($(".backdrop-loading").length > 0)
                  return;
                
            if ($ionicHistory.currentStateName() == "intro"){
                  navigator.notification.confirm(
                        CONFIG.sure_quit,
                        function(index){
                              if (index == 1) ionic.Platform.exitApp();
                        },
                        null,
                        ['Yes', 'No']
                  );
            }else if ($utils.isRootState()){
                  
                  if ($rootScope.toggleDrawer) $rootScope.toggleDrawer();
            }else
                  $ionicHistory.goBack();
      }, 100);

      // Menu event
      $rootScope.$on('menuEvent', function(ev, args){
            $rootScope.inAnimation = true;

            if (args.isOpen){

                  $("#menu-drop-shadow").css("display", "block");
                  $("#menu-drop-shadow")
                        .animate({ opacity: .5 }, 500, "swing", function(){
                              $("#menu-drop-shadow").css("display", "block");
                              $rootScope.inAnimation = false;
                        });
            }else{
                  $ionicScrollDelegate.$getByHandle('id-scl-main-menu').scrollTop(true);
                  // $utils.getScrollByHandle('id-scl-main-menu').scrollTop(true);

                  $("#menu-drop-shadow")
                        .animate({ opacity: .0 }, 500, "swing", function(){
                              $("#menu-drop-shadow").css("display", "none");
                              $rootScope.inAnimation = false;
                        });

                  $timeout(function(){
                      $ionicHistory.nextViewOptions({
                          historyRoot: false,
                          disableAnimate: false,
                          disableBack: false
                      });
                  }, 200)
            }
      })
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $stateProvider

  .state('splash', {
    url: "/splash",
    templateUrl: "templates/splash.html",
    controller: 'SplashCtrl'
  })

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.bookmarks', {
    url: "/bookmarks",
    views: {
      'menuContent': {
        templateUrl: "templates/bookmarks.html",
        controller: "BookmarksCtrl"
      }
    }
  })

  .state('app.dialog-scripts', {
    url: "/dialog-scripts",
    views: {
      'menuContent': {
        templateUrl: "templates/dialog-scripts.html",
        controller: "DSCtrl"
      }
    }
  })

  .state('app.patient-materials', {
    url: "/patient-materials",
    views: {
      'menuContent': {
        templateUrl: "templates/patient-materials.html",
        controller: "PMCtrl"
      }
    }
  })

  .state('app.solution-center', {
    url: "/solution-center",
    views: {
      'menuContent': {
        templateUrl: "templates/solution-center.html",
        controller: "SCCtrl"
      }
    }
  })

  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html",
        controller: 'HomeCtrl'
      }
    }
  })

  .state('app.dcp', {
    url: "/dcp",
    views: {
      'menuContent': {
        templateUrl: "templates/dcp.html",
        controller: 'DCPCtrl'
      }
    }
  })

  .state('app.dcp-tab', {
    url: "/dcp-tab",
    views: {
      'menuContent': {
        templateUrl: "templates/dcp-tab.html",
        controller: 'DCPTabCtrl'
      }
    }
  })

  .state('app.bgm-tab', {
    url: "/bgm-tab",
    views: {
      'menuContent': {
        templateUrl: "templates/bgm-tab.html",
        controller: 'BGMTabCtrl'
      }
    }
  })

  .state('app.he-tab', {
    url: "/he-tab",
    views: {
      'menuContent': {
        templateUrl: "templates/he-tab.html",
        controller: 'HETabCtrl'
      }
    }
  })

  .state('app.pa-tab', {
    url: "/pa-tab",
    views: {
      'menuContent': {
        templateUrl: "templates/pa-tab.html",
        controller: 'PATabCtrl'
      }
    }
  })

  .state('app.mtc', {
    url: "/mtc",
    views: {
      'menuContent': {
        templateUrl: "templates/mtc.html",
        controller: 'MTCCtrl'
      }
    }
  })

  .state('app.mtc-register', {
    url: "/mtc-register",
    views: {
      'menuContent': {
        templateUrl: "templates/mtc-register.html",
        controller: 'MTCRegisterCtrl'
      }
    }
  })

  .state('app.mtc-main', {
    url: "/mtc-main",
    views: {
      'menuContent': {
        templateUrl: "templates/mtc-main.html",
        controller: 'MTCMainCtrl'
      }
    }
  })

  .state('app.mtc-quiz-intro', {
    url: "/mtc-quiz-intro",
    views: {
      'menuContent': {
        templateUrl: "templates/mtc-quiz-intro.html",
        controller: 'MTCQuizIntroCtrl'
      }
    }
  })

  .state('app.mtc-quiz', {
    url: "/mtc-quiz",
    views: {
      'menuContent': {
        templateUrl: "templates/mtc-quiz.html",
        controller: 'MTCQuizCtrl'
      }
    }
  })

  .state('app.mtc-final', {
    url: "/mtc-final",
    views: {
      'menuContent': {
        templateUrl: "templates/mtc-final.html",
        controller: 'MTCFinalCtrl'
      }
    }
  })

  .state('app.diabetes-review', {
    url: "/diabetes-review",
    views: {
      'menuContent': {
        templateUrl: "templates/diabetes-review.html",
        controller: "DRCtrl"
      }
    }
  })

  .state('app.updates', {
    url: "/updates",
    views: {
      'menuContent': {
        templateUrl: "templates/updates.html"
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');

  $ionicConfigProvider.views.swipeBackEnabled(false);
  $ionicConfigProvider.views.maxCache(0);
  // $ionicConfigProvider.scrolling.jsScrolling(false);
  $ionicConfigProvider.views.transition('none');
});
