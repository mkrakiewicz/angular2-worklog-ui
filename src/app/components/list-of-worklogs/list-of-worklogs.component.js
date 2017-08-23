"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ListOfWorklogsComponent = (function () {
    function ListOfWorklogsComponent(worklogService) {
        this.worklogService = worklogService;
        this.worklogs = [];
    }
    ListOfWorklogsComponent.prototype.ngOnInit = function () {
        this.loadAllWorklogs();
    };
    /**
     * Prepare the component (Vue 2.x).
     */
    ListOfWorklogsComponent.prototype.prepareComponent = function () {
        // this.getWorklogs()
        // this.acl = auth.acl();
        // var that = this;
        // var originalDatePeriod = '';
        // var originalTimePeriod = '';
        // var datePeriodInputFrom = $('#searchDatePeriodFrom');
        // var datePeriodInputTo = $('#searchDatePeriodTo');
        // var timePeriodInputFrom = $('#searchTimeFrom');
        // var timePeriodInputTo = $('#searchTimeTo');
        //
        // var allInputs = datePeriodInputFrom.add(datePeriodInputTo);
        // allInputs = allInputs.add(timePeriodInputFrom);
        // allInputs = allInputs.add(timePeriodInputTo);
        // allInputs.daterangepicker({
        //   "autoApply": true,
        //   "timePicker": true,
        //   "timePicker24Hour": true,
        //   "autoUpdateInput": false,
        //   "startDate": "07/21/2017",
        //   "endDate": "07/27/2017"
        // });
        // allInputs.on('apply.daterangepicker', function (ev, picker) {
        //   that.search.date.from = picker.startDate.format('YYYY-MM-DD');
        //   that.search.date.to = picker.endDate.format('YYYY-MM-DD');
        //   that.search.time.from = picker.startDate.format('HH:mm');
        //   that.search.time.to = picker.endDate.format('HH:mm');
        // });
        // allInputs.on('cancel.daterangepicker', function (ev, picker) {
        //
        // });
        //
        //
        // var $modalTimeInput = $('#modal-edit-worklog').find('input[name=time]');
        // $modalTimeInput.daterangepicker({
        //   "autoApply": true,
        //   "timePicker": true,
        //   "timePicker24Hour": true,
        //   "singleDatePicker": true,
        //   "autoUpdateInput": false,
        //   "startDate": "07/21/2017",
        //   "endDate": "07/27/2017"
        // });
        //
        // $modalTimeInput.on('apply.daterangepicker', function (ev, picker) {
        //   that.modal.worklog.time = picker.startDate.format('YYYY-MM-DD HH:mm:ss');
        // });
    };
    ListOfWorklogsComponent.prototype.loadAllWorklogs = function () {
        var _this = this;
        // var df = _.get(this, 'search.date.from', false);
        // var dt = _.get(this, 'search.date.to', false);
        // var tf = _.get(this, 'search.time.from', false);
        // var tt = _.get(this, 'search.time.to', false);
        // var that = this;
        // if (!!offsetIncrement) {
        //   that.pagination.offsetFactor += offsetIncrement;
        // } else {
        //   that.pagination.offsetFactor = 0;
        // }
        // worklogApi.loadAvailableWorklogs(df, dt, tf, tt, that.pagination.limit, that.pagination.offsetFactor * that.pagination.limit, function (response) {
        //   that.worklogs = response.data.data;
        // })
        this.worklogService.getAll().subscribe(function (elements) {
            debugger;
            _this.worklogs = elements;
        }, function (error) {
            alert('error');
        });
    };
    ListOfWorklogsComponent = __decorate([
        core_1.Component({
            selector: 'app-list-of-worklogs',
            templateUrl: './list-of-worklogs.component.html',
            styleUrls: ['./list-of-worklogs.component.scss']
        })
    ], ListOfWorklogsComponent);
    return ListOfWorklogsComponent;
}());
exports.ListOfWorklogsComponent = ListOfWorklogsComponent;
//# sourceMappingURL=list-of-worklogs.component.js.map