import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rendom-gallery',
  templateUrl: './rendom-gallery.component.html',
  styleUrls: ['./rendom-gallery.component.css']
})
export class RendomGalleryComponent implements OnInit {

  images=[
    {
      imageUrl:"assets/images/1.jpg",
      title:"image 1",
    },
    {
      imageUrl:"assets/images/1.jpg",
      title:"image 1",
    },
    {
      imageUrl:"assets/images/1.jpg",
      title:"image 1",
    },
    {
      imageUrl:"assets/images/1.jpg",
      title:"image 1",
    },
    {
      imageUrl:"assets/images/1.jpg",
      title:"image 1",
    },
    {
      imageUrl:"assets/images/1.jpg",
      title:"image 1",
    },
    {
      imageUrl:"assets/images/1.jpg",
      title:"image 1",
    },
    {
      imageUrl:"assets/images/1.jpg",
      title:"image 1",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
