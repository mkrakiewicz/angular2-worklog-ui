"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var config_1 = require('./../config');
var core_1 = require('@angular/core');
var base_service_1 = require("./crud.service");
var WorklogSettingsService = (function (_super) {
    __extends(WorklogSettingsService, _super);
    function WorklogSettingsService(config, http) {
        _super.call(this, 'worklogs', config, http);
    }
    WorklogSettingsService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(config_1.APP_CONFIG))
    ], WorklogSettingsService);
    return WorklogSettingsService;
}(base_service_1.BaseService));
exports.WorklogSettingsService = WorklogSettingsService;
//# sourceMappingURL=worklog-settings.service.js.map