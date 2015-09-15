(function() {
  'use strict';

  angular
    .module('etaxAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
