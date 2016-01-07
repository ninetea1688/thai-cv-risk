((window, angular) => {
  "use strict";

  angular.module('app', [
    'ngMaterial', 'app.controller.Main', 'app.service.ThaiCvRisk',
    'app.controller.Dialog', 'app.controller.Disclaimer'
  ]);

})(window, window.angular);