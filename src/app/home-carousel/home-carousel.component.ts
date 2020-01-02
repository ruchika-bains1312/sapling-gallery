import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css'],
  animations:[
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('400ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('200ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class HomeCarouselComponent implements OnInit {
  img_list = [
    {url:'../assets/img/home/foliage-garden.jpg',caption:'Container Gardening', description:'Green up your patio or deck with oversized terracotta or plastic planters overflowing with anything from tomatoes to wildflowers. (The lush lineup here creates a pretty privacy wall!)'},
    {url:'../assets/img/home/organic kitchen.jpg',caption:'Fairy Garden', description:'Think small — really small — with this adorable project. Outfitted with a mini birdhouse, rustic stones, and teeny-tiny accessories, this planter is the perfect thing to make with kids.'},
    {url:'../assets/img/home/indoor-plants.jpg',caption:'Gardening Ideas', description:"Just about anything can hold plants if it's got sufficient drainage (i.e., a few holes drilled in the bottom). The handle on this vintage toolbox makes relocating succulents to a shadier spot a snap."},
    {url:'../assets/img/home/oxygen-rich.jpg',caption:'Porch Plants', description:"If you don't have space on the ground for the garden of your dreams, use porch ceilings to display your plant babies in hanging baskets."}

  ]

  constructor() { 
   }

   current = 0;
  intervalTimer!: NodeJS.Timer;
   ngOnInit() {
     this.intervalTimer = this.resetTimerInterval();
   }
   showPrevious(){
     if(this.current>0){
       this.current = --this.current % this.img_list.length;
       }
       else 
       this.current= this.img_list.length-1;
     this.restartTimer();
   }
   showNext(){
      if(this.current<this.img_list.length){
         this.current = ++this.current % this.img_list.length;
      }
      else
      this.current=0;
         this.restartTimer();
   }
   resetTimerInterval(){
    return setInterval(() => {
       this.current = ++this.current % this.img_list.length;
     }, 3000)
   }
   restartTimer(){
      clearInterval( this.intervalTimer);
      this.intervalTimer = this.resetTimerInterval();
   }
   enterCarousel(){
    clearInterval( this.intervalTimer);
    setTimeout(()=>this.restartTimer(),3000);
    console.log('entered');
   }
}
