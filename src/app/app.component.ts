import { Component,OnInit,ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  items = [{title:'Item 1', open:false}, 
          {title:'Item 2', open:false}, 
          {title:'Item 3', open:false},
          {title:'Item 4', open:false}, 
          {title:'Item 5', open:false}];
  expandedIndex = 0;
  ngOnInit(){}
  onToggle(index:number){
     this.items.forEach((item,i)=>{
       if(i===index){
          this.items[index].open= !this.items[index].open; 
       }else{
         this.items[i].open=false;
       }
     })   
  }
  onClick(){
    const index= 2;
     this.items.forEach((item,i)=>{
       if(i===index){
          this.items[index].open= !this.items[index].open; 
       }else{
         this.items[i].open=false;
       }
     })  
  }
}
