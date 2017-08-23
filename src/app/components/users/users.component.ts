import * as _ from 'lodash';
import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services';
import {User} from '../../models';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    users:User[] = [];

    constructor(private userService:UserService) {
    }

    ngOnInit() {
        this.loadAllUsers();
    }


    /**
     * Get all of the authorized tokens for the user.
     */
    private loadAllUsers() {
         this.userService.getAll().subscribe(users => {
                this.users = users;
            },
            error => {
                alert('error')
            });
    }

    // showAddUserModal()
    // {
    //   this.modal.user = defaultUserData;
    //   $('#modal-edit-user').modal('show');
    // }
    //
    // /**
    //  * Show the form for creating new clients.
    //  */
    // showEditUserModal(user) {
    //   this.modal.errors = [];
    //   this.modal.user = user;
    //   $('#modal-edit-user').modal('show');
    // }
    //
    // showDeleteUserModal(user) {
    //   this.modal.user = user;
    //   $('#modal-delete-user').modal('show');
    // }

//   handleEditUserModalSave() {
//     var method = 'post';
//     var url = '/api/users';
//     var id = _.get(this, 'modal.user.id', "");
// //                console.log("ID: " + id);
//     if (id != "") {
//       method = 'put';
//       url += "/" + id;
//     }
//
//     this.http[method](url, _.get(this, 'modal.user'))
//         .then(function (response) {
//           if (_.get(response, 'body.success') == true) {
//             this.getUsers();
//             flash.setMessage('User saved.');
//             $('#editModalCloseButton').click();
//
//             this.modal.user.name = '';
//             this.modal.user.email = '';
//             this.modal.user.password = '';
//             this.modal.user.password_confirmation = '';
//           }
//         }).catch(function (response) {
//       if (_.get(response, 'body.success') == false) {
//         this.modal.errors = response.body.message;
//       }
//     });
//   }
//
//   handleUserModalDelete() {
//     var id = _.get(this, 'modal.user.id');
//     this.http.delete('api/users/' + id)
//         .then(function (response) {
//           if (_.get(response, 'body.success') == true) {
//             this.getUsers();
//             flash.setMessage('User deleted.');
//             $('#deleteModalCloseButton').click();
//           }
//         }).catch(function (response) {
//       if (_.get(response, 'body.success') == false) {
//         this.modal.errors = response.body.message;
//         alert("Problem deleting users.");
//       }
//     });
//   }

}
