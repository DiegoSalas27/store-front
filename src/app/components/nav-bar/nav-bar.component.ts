import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { BookService } from '../../services/book.service';
import { UserService } from '../../services/user.service';
import { Router, NavigationExtras } from '@angular/router';
import { Book } from '../../models/book';
import { User } from '../../models/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private loggedIn = false;
  private keyword: string;
  private bookList: Book[] = [];
  private user: User = new User();
  private username: string;

  constructor(private loginService: LoginService, private bookService: BookService,
   private userService: UserService, private router: Router) { }

  logout(){
    this.loginService.logout().subscribe(
      res =>{
        this.loggedIn = false;
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
      }
    );
  }

  onSearchByTitle(){
    this.bookService.searchBook(this.keyword).subscribe(
      res => {
        this.bookList = res.json();

        let navigationExtras: NavigationExtras = {
          queryParams: {
            "bookList" : JSON.stringify(this.bookList)
          }
        };

        this.router.navigate(['/bookList'], navigationExtras);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res =>{
        console.log(res);
        this.loggedIn = true;

        this.userService.getCurrentUser().subscribe(
         res=> {
           this.user = res.json();
           this.username = this.user.username.toUpperCase();
         },
         error => {
           console.log(error);
         }
       );

      },
      error =>{
        console.log(error);
        this.loggedIn = false;
      }
    );
  }

}
