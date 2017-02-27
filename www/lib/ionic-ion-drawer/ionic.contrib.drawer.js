(function() {

'use strict';

/**
 * The ionic-contrib-frosted-glass is a fun frosted-glass effect
 * that can be used in iOS apps to give an iOS 7 frosted-glass effect
 * to any element.
 */
angular.module('ionic.contrib.drawer', ['ionic'])

.controller('drawerCtrl', ['$element', '$attrs', '$ionicGesture', '$document', '$rootScope', function($element, $attr, $ionicGesture, $document, $rootScope) {
  var el = $element[0];
  var dragging = false;
  var startX, lastX, offsetX, newX;
  var side;
  var self = this;
  var allowDrag = false;

  // How far to drag before triggering
  var thresholdX = 25;
  // How far from edge before triggering
  var edgeX = 60;

  var LEFT = 0;
  var RIGHT = 1;

  var isTargetDrag = false;

  var width = $element[0].clientWidth;

  var enableAnimation = function() {
    $element.addClass('animate');
  };
  var disableAnimation = function() {
    $element.removeClass('animate');
  };

  // Check if this is on target or not
  var isTarget = function(el) {
    while(el) {
      if(el === $element[0]) {
        return true;
      }
      el = el.parentNode;
    }
  };

  var startDrag = function(e) {
    disableAnimation();

    dragging = true;
    offsetX = lastX - startX;
    // console.log('Starting drag');
    // console.log('Offset:', offsetX);
  };

  var startTargetDrag = function(e) {
    disableAnimation();

    dragging = true;
    isTargetDrag = true;
    offsetX = lastX - startX;
    // console.log('Starting target drag');
    // console.log('Offset:', offsetX);
  };

  var doEndDrag = function(e) {
    startX = null;
    lastX = null;
    offsetX = null;
    isTargetDrag = false;

    if(!dragging) {
      return;
    }

    dragging = false;

    // console.log('End drag');
    enableAnimation();

    ionic.requestAnimationFrame(function() {
      if(newX < (-width / 2)) {
        $rootScope.$broadcast('menuEvent', {isOpen: false});
        el.style.transform = el.style.webkitTransform = 'translate3d(' + -width + 'px, 0, 0)';
      } else {
        $rootScope.$broadcast('menuEvent', {isOpen: true});
        el.style.transform = el.style.webkitTransform = 'translate3d(0px, 0, 0)';
      }
    });
  };

  var doDrag = function(e) {
    if(e.defaultPrevented) {
      return;
    }

    if(!lastX) {
      startX = e.gesture.touches[0].pageX;
    }

    lastX = e.gesture.touches[0].pageX;

    if(!dragging) {

      // Dragged 15 pixels and finger is by edge
      if(Math.abs(lastX - startX) > thresholdX) {
        if(isTarget(e.target)) {
          startTargetDrag(e);
        } else if(startX < edgeX) {
          startDrag(e);
        } 
      }
    } else {
      // console.log(lastX, offsetX, lastX - offsetX);
      newX = Math.min(0, (-width + (lastX - offsetX)));
      ionic.requestAnimationFrame(function() {
        el.style.transform = el.style.webkitTransform = 'translate3d(' + newX + 'px, 0, 0)';
      });

    }

    if(dragging) {
      e.gesture.srcEvent.preventDefault();
    }
  };

  side = $attr.side == 'left' ? LEFT : RIGHT;

  $ionicGesture.on('drag', function(e) {
    if (allowDrag)
      doDrag(e);
  }, $document);
  $ionicGesture.on('dragend', function(e) {
    if (allowDrag)
      doEndDrag(e);
  }, $document);


  this.close = function(isBack) {
    if ($rootScope.inAnimation && isBack) return;

    enableAnimation();
    ionic.requestAnimationFrame(function() {
      if(side === LEFT) {
        el.style.transform = el.style.webkitTransform = 'translate3d(-100%, 0, 0)';
      } else {
        el.style.transform = el.style.webkitTransform = 'translate3d(100%, 0, 0)';
      }
    });
    $rootScope.$broadcast('menuEvent', {isOpen: false});
  };

  this.open = function(isBack) {
    if ($rootScope.inAnimation && isBack) return;
    
    enableAnimation();
    ionic.requestAnimationFrame(function() {
      if(side === LEFT) {
        el.style.transform = el.style.webkitTransform = 'translate3d(0%, 0, 0)';
      } else {
        el.style.transform = el.style.webkitTransform = 'translate3d(0%, 0, 0)';
      }
    });
    $rootScope.$broadcast('menuEvent', {isOpen: true});
  };

  this.toggle = function(){
    if ((el.style.webkitTransform == 'translate3d(0%, 0px, 0px)') || 
        (el.style.webkitTransform == 'translate3d(0px, 0px, 0px)'))
      self.close(true);
    else
      self.open(true);
  }

  this.setAllowDrag = function(allow){
      allowDrag = allow;
  }

  $rootScope.openDrawer = this.open;
  $rootScope.closeDrawer = this.close;
  $rootScope.toggleDrawer = this.toggle;
  $rootScope.allowDragDrawer = this.setAllowDrag;

}])

.directive('drawer', ['$rootScope', '$ionicGesture', function($rootScope, $ionicGesture) {
  return {
    restrict: 'E',
    controller: 'drawerCtrl',
    link: function($scope, $element, $attr, ctrl) {
      $element.addClass($attr.side);
      $scope.openDrawer = function() {
        ctrl.open();
      };
      $scope.closeDrawer = function() {
        ctrl.close();
      };
    }
  }
}])

.directive('drawerClose', ['$rootScope', function($rootScope) {
  return {
    restrict: 'A',
    link: function($scope, $element) {
      $element.bind('click', function() {
        var drawerCtrl = $element.inheritedData('$drawerController');
        drawerCtrl.close();
      });
    }
  }
}]);

})();
