"use strict";
var router_1 = require('@angular/router');
var header_component_1 = require('../app/components/header/header.component');
var main_component_1 = require('../app/components/main/main.component');
exports.routes = [
    { path: '', component: main_component_1.MainComponent },
    { path: 'test', component: header_component_1.HeaderComponent },
    { path: 'home', component: main_component_1.MainComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map