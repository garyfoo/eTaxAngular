!function(){"use strict";angular.module("etaxAngular",["ngAnimate","ngCookies","ngTouch","ngMessages","ngMdIcons","ngSanitize","restangular","ui.router","ngMaterial"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Less",url:"http://lesscss.org/",description:"Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.",logo:"less.png"}];this.getTec=t}angular.module("etaxAngular").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return t.$inject=["moment"],e}angular.module("etaxAngular").directive("acmeNavbar",t)}(),function(){"use strict";function t(t,e){function n(n){function a(t){return t.data}function i(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return n||(n=30),e.get(o+"/contributors?per_page="+n).then(a)["catch"](i)}var o="https://api.github.com/repos/Swiip/generator-gulp-angular",a={apiHost:o,getContributors:n};return a}angular.module("etaxAngular").factory("githubContributor",t),t.$inject=["$log","$http"]}(),function(){"use strict";function t(t){function e(e,n,o,a){var i,r=t(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){r.type(t).pause()["delete"]()}),i=e.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(t){r.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){i()})}function n(t,e){function n(){return o().then(function(){t.info("Activated Contributors View")})}function o(){return e.getContributors(10).then(function(t){return a.contributors=t,a.contributors})}var a=this;a.contributors=[],n()}var o={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:n,controllerAs:"vm"};return n.$inject=["$log","githubContributor"],o}angular.module("etaxAngular").directive("acmeMalarkey",t),t.$inject=["malarkey"]}(),function(){"use strict";function t(t,e,n,o,a,i){function r(){d(),t(function(){s.classAnimation="rubberBand"},4e3)}function l(t){var e=a.debounce(function(){o(t).toggle().then(function(){i.debug("toggle "+t+" is done")})},200);return e}function u(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),s.classAnimation=""}function d(){s.awesomeThings=e.getTec(),angular.forEach(s.awesomeThings,function(t){t.rank=Math.random()})}var s=this;s.awesomeThings=[],s.classAnimation="",s.creationDate=1442238179730,s.showToastr=u,s.user={title:"Developer",email:"ipsum@lorem.com",firstName:"",lastName:"",company:"Google",address:"1600 Amphitheatre Pkwy",city:"Mountain View",state:"CA",biography:"Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!",postalCode:"94043"},s.toggleRight=l("right"),s.close=function(){o("right").close().then(function(){i.debug("close RIGHT is done")})},r()}angular.module("etaxAngular").controller("MainController",t),t.$inject=["$timeout","webDevTec","toastr","$mdSidenav","$mdUtil","$log"]}(),function(){"use strict";function t(t){t.debug("runBlock end")}angular.module("etaxAngular").run(t),t.$inject=["$log"]}(),function(){"use strict";function t(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}angular.module("etaxAngular").config(t),t.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("etaxAngular").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.options.timeOut=3e3,e.options.positionClass="toast-top-right",e.options.preventDuplicates=!0,e.options.progressBar=!0}angular.module("etaxAngular").config(t),t.$inject=["$logProvider","toastr"]}(),angular.module("etaxAngular").run(["$templateCache",function(t){t.put("app/main/main.html",'<md-toolbar><div class="md-toolbar-tools"><md-button class="md-icon-button" aria-label="Settings" ng-click="vm.toggleRight()"><md-icon ng-style="{color: \'black\'}" class="material-icons">menu</md-icon></md-button><img ng-src="https://cdn-secure.etax.com.au/Content/Images/responsive/etax-logo.png" alt="eTax"></div></md-toolbar><div layout="row"><div flex="15"></div><div flex="70"><div><md-content class="md-padding"><h1 class="md-display-2">Personal Details</h1><p>Please complete the following information relating to your tax return. By continuing below, you are appointing Etax Accountants Pty Ltd as your tax agent. This will allow us to request an extension of time for your tax return if necessary.</p><md-tabs md-dynamic-height="" md-border-bottom=""><md-tab label="Personal Details"><md-content class="md-padding"><h2 class="md-display1">Personal Information</h2><div layout="column" layout-fill=""><md-content layout-padding=""><form name="userForm"><div layout="" layout-sm="column"><md-input-container style="width:70%"><label>Tax File Number (TFN)</label> <input ng-model="user.company"></md-input-container></div><div layout="" layout-sm="column"><md-input-container flex=""><label>Title</label> <input ng-model="user.title"></md-input-container><md-input-container flex=""><label>First name</label> <input ng-model="user.firstName"></md-input-container><md-input-container flex=""><label>Middle name</label> <input ng-model="user.middleName"></md-input-container><md-input-container flex=""><label>Family Name</label> <input ng-model="theMax"></md-input-container></div><div layout="" layout-sm="column"><md-input-container flex="50"><label>Mobile Phone Number</label> <input ng-model="user.title"></md-input-container><md-input-container flex="15"><label>Area Code</label> <input ng-model="user.firstName"></md-input-container><md-input-container flex="35"><label>Daytime phone number</label> <input ng-model="user.middleName"></md-input-container></div><div layout="row"><p>Has your name or title changed since your last tax return was lodged?</p></div><div layout="" layout-sm="column"><md-radio-group ng-model="data.group1"><md-radio-button value="Yes" class="md-primary">Yes</md-radio-button><md-radio-button value="No">No</md-radio-button></md-radio-group></div><div layout="row"><p>Gender</p></div><div layout="" layout-sm="column"><md-radio-group ng-model="data.group2"><md-radio-button value="Male" class="md-primary">Male</md-radio-button><md-radio-button value="Female">Female</md-radio-button></md-radio-group></div><div layout="row"><p>Is this the last Australian tax return that you will ever lodge?</p></div><div layout="" layout-sm="column"><md-radio-group ng-model="data.group3"><md-radio-button value="Yes" class="md-primary">Yes</md-radio-button><md-radio-button value="No">No</md-radio-button></md-radio-group></div><br><br><h2 class="md-display1">Residency Details</h2><div layout="row"><p>Do you have Australian Citizenship?</p></div><div layout="" layout-sm="column"><md-radio-group ng-model="data.group4"><md-radio-button value="Yes" class="md-primary">Yes</md-radio-button><md-radio-button value="No">No</md-radio-button></md-radio-group></div><div layout="row"><p>Did you live in Australia for more than 183 days in total, between 1 July 2014 – 30 June 2015?</p></div><div layout="" layout-sm="column"><md-radio-group ng-model="data.group5"><md-radio-button value="Yes" class="md-primary">Yes</md-radio-button><md-radio-button value="No">No</md-radio-button></md-radio-group></div><br><br><h2 class="md-display1">Bank Account to Receive Your Tax Refund</h2><label>Bank account details are required by the ATO on every tax return.</label><div layout="" layout-sm="column"><md-input-container flex="25"><label>BSB number</label> <input ng-model="user.bsbnum"></md-input-container><md-input-container flex="25"><label>Account number</label> <input ng-model="user.accno"></md-input-container><md-input-container flex="50"><label>Name of Account Holder</label> <input ng-model="user.accname"></md-input-container></div></form></md-content></div></md-content></md-tab><md-tab label="Your Income"><md-content class="md-padding"><h2 class="md-display1">Salary or Wages</h2><form name="userForm"><div layout="" layout-sm="column"><md-input-container style="width:70%"><label>Your Occupation or Job Title</label> <input ng-model="user.job"></md-input-container></div><div layout="" layout-sm="column"><md-input-container style="width:70%"><label>How many PAYG Summaries do you have?</label> <input ng-model="user.payg"></md-input-container></div><div layout="" layout-sm="column"><md-input-container flex=""><label>Payer\'s ABN</label> <input ng-model="user.abn"></md-input-container><md-input-container flex=""><label>Total Tax Withheld</label> <input ng-model="user.tax"></md-input-container><md-input-container flex=""><label>Gross Payments (Income)</label> <input ng-model="user.gross"></md-input-container></div><div layout="row"><p>This was my only salary or income during the past year.</p></div><div layout="" layout-sm="column"><md-radio-group ng-model="data.group6"><md-radio-button value="Yes" class="md-primary">Yes</md-radio-button><md-radio-button value="No">No</md-radio-button></md-radio-group></div><br><md-input-container>Please add notes about any other income <textarea ng-model="user.incomeNotes" columns="1" md-maxlength="150"></textarea></md-input-container><md-content layout-padding="" class="autoScroll"><md-input-container style="width:70%" class="md-icon-float" flex=""><label>Payer\'s ABN</label><md-icon ng-style="{color: \'black\'}" class="material-icons">person</md-icon><input ng-model="user.pabn" type="text"></md-input-container><md-input-container style="width:70%" class="md-icon-float" flex=""><label>Total Tax Withheld</label><md-icon ng-style="{color: \'black\'}" class="material-icons">attach_money</md-icon><input ng-model="user.totalTax" type="text"></md-input-container><md-input-container style="width:70%" class="md-icon-float" flex=""><label>Gross Payments (Income)</label><md-icon ng-style="{color: \'black\'}" class="material-icons">attach_money</md-icon><input ng-model="user.totalTax" type="text"></md-input-container></md-content></form></md-content></md-tab><md-tab label="Deductions"><md-content class="md-padding"><h1 class="md-display-2">Deductions</h1><p>Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum tellus. Curabitur posuere molestie dictum. Morbi eget congue risus, quis rhoncus quam. Suspendisse vitae hendrerit erat, at posuere mi. Cras eu fermentum nunc. Sed id ante eu orci commodo volutpat non ac est. Praesent ligula diam, congue eu enim scelerisque, finibus commodo lectus.</p></md-content></md-tab><md-tab label="Other Items"><md-content class="md-padding"><h1 class="md-display-2">Other Items</h1><p>Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum tellus. Curabitur posuere molestie dictum. Morbi eget congue risus, quis rhoncus quam. Suspendisse vitae hendrerit erat, at posuere mi. Cras eu fermentum nunc. Sed id ante eu orci commodo volutpat non ac est. Praesent ligula diam, congue eu enim scelerisque, finibus commodo lectus.</p></md-content></md-tab></md-tabs></md-content></div></div><div flex="15"></div></div>'),t.put("app/components/navbar/navbar.html",'<md-toolbar layout="row" layout-align="center center"><md-button href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</md-button><section flex="" layout="row" layout-align="left center"><md-button href="#" class="md-raised">Home</md-button><md-button href="#" class="md-raised">About</md-button><md-button href="#" class="md-raised">Contact</md-button></section><md-button class="acme-navbar-text">Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>')}]);