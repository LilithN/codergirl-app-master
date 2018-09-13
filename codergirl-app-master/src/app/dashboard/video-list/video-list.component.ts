import { Component, OnInit } from '@angular/core';



const videos = [
  {
    'title': 'Angular Observable Data Flow',
    'author': 'Kyle Cordes',
    'id': 'JPuqluYYa-o',
    'date': '11/0Div3/2015',
    'viewDetails': [
      {
        'age': 17,
        'region': 'North America',
        'date': '2016-03-23'
      },
      {
        'age': 27,
        'region': 'North America',
        'date': '2016-03-23'
      },
      {
        'age': 37,
        'region': 'North America',
        'date': '2016-03-23'
      },
      {
        'age': 47,
        'region': 'Europe',
        'date': '2016-03-24'
      },
      {
        'age': 37,
        'region': 'North America',
        'date': '2016-03-24'
      },
      {
        'age': 17,
        'region': 'North America',
        'date': '2016-03-25'
      }
    ]
  },
  {
    'title': 'Angular Performance Checklist',
    'author': 'Paul Spears',
    'id': 'cxqRijt9LbQ',
    'date': '08/25/2017',
    'viewDetails': [
      {
        'age': 36,
        'region': 'North America',
        'date': '2016-06-23'
      },
      {
        'age': 30,
        'region': 'North America',
        'date': '2016-06-23'
      },
      {
        'age': 54,
        'region': 'North America',
        'date': '2016-07-23'
      },
      {
        'age': 43,
        'region': 'Europe',
        'date': '2016-0-24'
      },
      {
        'age': 32,
        'region': 'North America',
        'date': '2016-08-24'
      },
      {
        'age': 32,
        'region': 'North America',
        'date': '2016-08-25'
      }
    ]
  },
  {
    'title': 'Live App Updates Without The App Store',
    'author': 'Sani Yusuf',
    'id': 's10wrXA-a7Y',
    'date': '02/05/2018',
    'viewDetails': [
      {
        'age': 17,
        'region': 'North America',
        'date': '2016-03-23'
      },
      {
        'age': 27,
        'region': 'North America',
        'date': '2016-03-23'
      },
      {
        'age': 37,
        'region': 'North America',
        'date': '2016-03-23'
      },
      {
        'age': 47,
        'region': 'Europe',
        'date': '2016-03-24'
      },
      {
        'age': 37,
        'region': 'North America',
        'date': '2016-03-24'
      },
      {
        'age': 17,
        'region': 'North America',
        'date': '2016-03-25'
      }
    ]
  },
  {
    'title': 'Angular Reactive Forms',
    'author': 'Jack Balbes',
    'id': 'A_Rq6ZsoXpI',
    'date': '02/21/2017',
    'viewDetails': [
      {
        'age': 36,
        'region': 'North America',
        'date': '2016-06-23'
      },
      {
        'age': 30,
        'region': 'North America',
        'date': '2016-06-23'
      },
      {
        'age': 54,
        'region': 'North America',
        'date': '2016-07-23'
      },
      {
        'age': 43,
        'region': 'Europe',
        'date': '2016-0-24'
      },
      {
        'age': 32,
        'region': 'North America',
        'date': '2016-08-24'
      },
      {
        'age': 32,
        'region': 'North America',
        'date': '2016-08-25'
      }
    ]
  },
  {
    'title': 'Imperative to Reactive with Angular and RxJS',
    'author': 'John Baur',
    'id': 'VJOPsjlbhdg',
    'date': '05/28/2017',
    'viewDetails': [
      {
        'age': 17,
        'region': 'North America',
        'date': '2016-03-23'
      },
      {
        'age': 27,
        'region': 'North America',
        'date': '2016-03-23'
      },
      {
        'age': 37,
        'region': 'North America',
        'date': '2016-03-23'
      },
      {
        'age': 47,
        'region': 'Europe',
        'date': '2016-03-24'
      },
      {
        'age': 37,
        'region': 'North America',
        'date': '2016-03-24'
      },
      {
        'age': 17,
        'region': 'North America',
        'date': '2016-03-25'
      }
    ]
  }
 ] ;

 @Component({
  selector: 'cg-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videoList = videos;

  constructor() { }

  ngOnInit() {
  }

}
