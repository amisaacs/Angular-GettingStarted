import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    //Data binding:
    @Input() rating: number = 0;
    
    cropWidth: number = 75;

    //Event binding:
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    ngOnChanges(){
        this.cropWidth = this.rating * 75/5;
    }
    onClick():void{
        // alert(`The rating is ${this.rating} was clicked.`);
        this.ratingClicked.emit(`The rating is ${this.rating} was clicked.`);
    }

}