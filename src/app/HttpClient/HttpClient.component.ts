import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../api.service';


@Component({
  selector: 'app-HttpClient',
  templateUrl: './HttpClient.component.html',
  styleUrls: ['./HttpClient.component.css']
})
export class HttpClientComponent implements OnInit {
  posts:any;

  smartphone: any = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getSmartphones(){
    this.api.getSmartphone()
    .subscribe(data=>{
      for(const value of(data as any)){
        this.smartphone.push({
          name:value.name,
          price:value.price
        });
      }
      console.log(this.smartphone);
    })
  }

}
