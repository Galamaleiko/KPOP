import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComp } from './dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  title = 'Lab5';
  users!: any[];

  columnsToDisplay: string[] = ['name', 'email', 'login', 'password', 'cell', 'fav']
  constructor(private appService: AppService, private dialog: MatDialog) { }


  ngOnInit(): void {

    this.appService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users.results;

      console.log(this.users);
    })


  }

  onRowClicked(row: any) {

    console.log(row);
    this.dialog.open(DialogComp, {
      data: row
    });

  }
}