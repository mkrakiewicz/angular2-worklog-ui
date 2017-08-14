import * as _ from 'lodash';
import {Component, OnInit} from '@angular/core';
import {WorklogService} from '../_services/index';
import {Worklog} from '../_models/index';

@Component({
    selector: 'app-list-of-worklogs',
    templateUrl: './list-of-worklogs.component.html',
    styleUrls: ['./list-of-worklogs.component.scss']
})
export class ListOfWorklogsComponent implements OnInit {
    worklogs:Worklog[] = [];

    constructor(private worklogService:WorklogService) {
    }


    ngOnInit() {
        this.loadAllWorklogs();
    }


    /**
     * Prepare the component (Vue 2.x).
     */
    prepareComponent() {


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
    }


    loadAllWorklogs() {
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
        this.worklogService.getAll().subscribe(elements => {
                debugger;
                this.worklogs = elements;
            },
            error => {
                alert('error')
            });
    }


    // showAddworklogModal()
    // {
    //   this.modal.worklog = defaultworklogData;
    //   $('#modal-edit-worklog').modal('show');
    // },
    // /**
    //  * Show the form for creating new clients.
    //  */
    // // showEditworklogModal(worklog) {
    //   this.modal.errors = [];
    //   this.modal.worklog = worklog;
    //   $('#modal-edit-worklog').modal('show');
    // },
    //
    // showDeleteworklogModal(worklog) {
    //   this.modal.worklog = worklog;
    //   $('#modal-delete-worklog').modal('show');
    // }
    //
    // handleEditworklogModalSave() {
    //   var method = 'post';
    //   var url = '/api/worklogs';
    //   var id = _.get(this, 'modal.worklog.id', "");
    //   if (id != "") {
    //     method = 'put';
    //     url += "/" + id;
    //   }
    //
    //   var worklog = _.get(this, 'modal.worklog');
    //   worklog.worklog_id = _.get(worklog, 'worklog.id');
    //   delete worklog['worklog'];
    //   this.$http[method](url, worklog)
    //       .then(function (response) {
    //         if (_.get(response, 'body.success') == true) {
    //           this.loadAvailableWorklogs();
    //           flash.setMessage('worklog saved.');
    //           $('#editModalCloseButton').click();
    //           this.modal.worklog.name = '';
    //           this.modal.worklog.worklogs = '';
    //           this.modal.worklog.time = '';
    //           this.modal.worklog.worklog = '';
    //           this.modal.worklog.worklog_id = '';
    //           this.modal.errors = [];
    //         }
    //       }).catch(function (response) {
    //     if (_.get(response, 'body.success') == false) {
    //       this.modal.errors = response.body.message;
    //     }
    //   });
    // }
    //
    // handleworklogModalDelete() {
    //   var id = _.get(this, 'modal.worklog.id');
    //   this.$http.delete('api/worklogs/' + id)
    //       .then(function (response) {
    //         if (_.get(response, 'body.success') == true) {
    //           this.loadAvailableWorklogs();
    //           flash.setMessage('worklog deleted.');
    //           $('#deleteModalCloseButton').click();
    //         }
    //       }).catch(function (response) {
    //     if (_.get(response, 'body.success') == false) {
    //       this.modal.errors = response.body.message;
    //       alert("Problem deleting worklogs.");
    //     }
    //   });
    // }
    // getWorklogs() {
    //   this.$http.get('/api/worklogs')
    //       .then(function (response) {
    //         this.worklogs = response.data.data;
    //       }).catch(function (response) {
    //
    //   });
    // }
    // selectWorklog(worklog)
    // {
    //   this.modal.worklog.worklog = worklog;
    //   $('#worklogDropdown').text(worklog.email);
    // }
    // resetSearch () {
    //   this.search.date.from = '';
    //   this.search.date.to = '';
    //   this.search.time.from = '';
    //   this.search.time.to = '';
    //   this.loadAvailableWorklogs();
    // }
}
