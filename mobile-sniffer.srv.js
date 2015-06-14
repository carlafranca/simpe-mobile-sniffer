(function(){
  'use strict';

  	angular.module('mobileSniffer',[])
      .factory('mobsniffer', mobsniffer);


      	/* check if is mobile device */
      	function mobsniffer(){

      		var isMobile = {
			    Android: function() {
			        return navigator.userAgent.match(/Android/i);
			    },
			    BlackBerry: function() {
			        return navigator.userAgent.match(/BlackBerry/i);
			    },
			    iPhone: function() {
			        return navigator.userAgent.match(/iPhone/i);
			    },
			    iPad: function() {
			        return navigator.userAgent.match(/iPad/i);
			    },
			    Opera: function() {
			        return navigator.userAgent.match(/Opera Mini/i);
			    },
			    Windows: function() {
			        return navigator.userAgent.match(/IEMobile/i);
			    },
			    //Check if is desktop or mobile and return true or false
			    any: function() {
			    	var isMob = (isMobile.Android() || isMobile.BlackBerry() || isMobile.iPhone() || isMobile.iPad() || isMobile.Opera() || isMobile.Windows()) ? true : false;
			        return isMob;
			    }
			};

			return {
				isMobile: isMobile
			};
	
      	}

})();