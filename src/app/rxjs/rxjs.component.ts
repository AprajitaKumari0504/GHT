import { Component, OnInit } from '@angular/core';
import { RxjsService } from './service/rxjs.service';
import { filter } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  datas:any;
  searchString: any;
  rxjsDatas :any = [];

  constructor( private rxjsService:RxjsService) { }

  // ngOnInit(){   
  //   this.rxjsService.getData().subscribe(
  //     (data: any) => {
  //       data.subscribe((val: any) => {
  //         let d = JSON.parse(JSON.stringify(val));
  //         // console.log(d[0]);
  //         this.datas = from(val);
  //         this.rxjsDatas = d;
  //         // console.log(this.rxjsDatas[0])
  //       })        
  //     }
  //   );
  // }

  ngOnInit(){   
    this.rxjsService.getData().subscribe(
      (data: any) => {
          let d = JSON.parse(JSON.stringify(data));
          this.datas = from(data);
          this.rxjsDatas = d;
      }
    );
  }

  searchFilter(event:any){
    if (event.key === "Enter") {
      console.log(event);
    }
    if(this.searchString != undefined || this.searchString != ''){
      this.rxjsDatas = []
      const data = this.datas.pipe(filter((val: any) => (val.name.includes(this.searchString) || val.email.includes(this.searchString))));
      data.subscribe((d: any) => {this.rxjsDatas.push(d)})
    }
  }

}
