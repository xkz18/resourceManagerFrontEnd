import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { User, UserSchema } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css'],
})
export class ResourceComponent implements OnInit {
  displayedColumns: string[] = Object.keys(UserSchema);
  dataSchema = UserSchema;
  dataSource = new MatTableDataSource<User>();

  constructor(public dialog: MatDialog, private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((res: User[]) => {
      this.dataSource.data = res;
    });
  }

  editRow(row) {
    if (row.id === 0) {
      this.userService.addUser(row).subscribe((res) => {
        row.id = res.id;
        row.isEdit = false;
      });
    } else {
      this.userService.updateUser(row).subscribe(() => (row.isEdit = false));
    }
  }

  addRow() {
    const newRow: User = {
      id: 0,
      name: '',
      email: '',
      phone: '',
      isEdit: true,
      isSelected: false,
    };
    this.dataSource.data = [newRow, ...this.dataSource.data];
  }

  removeRow(id) {
    this.userService.deleteUser(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(
        (u: User) => u.id !== id
      );
    });
  }

  removeSelectedRows() {
    const users = this.dataSource.data.filter((u: User) => u.isSelected);
    this.dialog
      .open(ConfirmDialogComponent)
      .afterClosed()
      .subscribe((confirm) => {
        if (confirm) {
          this.userService.deleteUsers(users).subscribe(() => {
            this.dataSource.data = this.dataSource.data.filter(
              (u: User) => !u.isSelected
            );
          });
        }
      });
  }
}
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-resource',
//   templateUrl: './resource.component.html',
//   styleUrls: ['./resource.component.css']
// })
// export class ResourceComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

// import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { MatTableDataSource } from '@angular/material/table';
// // import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
// import { Resource,ResourceSchema } from '../_models/resource';
// import { ResourceService } from '../_services/resource.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent implements OnInit {
//   displayedColumns: string[] = Object.keys(ResourceSchema);
//   dataSchema = ResourceSchema;
//   dataSource = new MatTableDataSource<Resource>();

//   constructor(public dialog: MatDialog, private userService: ResourceService) {}

//   ngOnInit() {
//     this.userService.getResources().subscribe((res: Resource[]) => {
//       this.dataSource.data = res;
//     });
//   }

//   // editRow(row) {
//   //   if (row.id === 0) {
//   //     this.userService.addResource(row).subscribe((res) => {
//   //       row.id = res.id;
//   //       row.isEdit = false;
//   //     });
//   //   } else {
//   //     this.userService.updateUser(row).subscribe(() => (row.isEdit = false));
//   //   }
//   // }

//   addRow() {
//     const newRow: Resource = {
//       userId: '',
//       id: '',
//       title: '',
//       body: '',

//     };
//     this.dataSource.data = [newRow, ...this.dataSource.data];
//   }

//   // removeRow(id) {
//   //   this.userService.deleteUser(id).subscribe(() => {
//   //     this.dataSource.data = this.dataSource.data.filter(
//   //       (u: User) => u.id !== id
//   //     );
//   //   });
//   // }

//   // removeSelectedRows() {
//   //   const users = this.dataSource.data.filter((u: User) => u.isSelected);
//   //   this.dialog
//   //     .open(ConfirmDialogComponent)
//   //     .afterClosed()
//   //     .subscribe((confirm) => {
//   //       if (confirm) {
//   //         this.userService.deleteUsers(users).subscribe(() => {
//   //           this.dataSource.data = this.dataSource.data.filter(
//   //             (u: User) => !u.isSelected
//   //           );
//   //         });
//   //       }
//   //     });
//   // }
// }
