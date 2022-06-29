import { Component, OnInit } from '@angular/core';
import { CommentModel } from 'src/app/models/comment-model';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {

  public comments: CommentModel[] = [
    {
      id: 1,
      name: 'Joseph Prince',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique arcu eget egestas fringilla',
      avatar: './assets/avatar_man_1.png',
      level: 1,
      answerComments: [
        {
          id: 2,
          name: 'Lora Rodrigues',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique arcu eget egestas fringilla',
          avatar: './assets/avatar_woman_1.png',
          level: 2,
          answerComments: [
            {
              id: 3,
              name: 'Marcia dos Santos',
              comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique arcu eget egestas fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique arcu eget egestas fringilla',
              avatar: './assets/avatar_woman_1.png',
              level: 3,
            }
          ]
        },
      ]
    },
    {
      id: 4,
      name: 'José da Silva',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique arcu eget egestas fringilla',
      avatar: './assets/avatar_man_2.png',
      level: 1,
      answerComments: []
    },
    {
      id: 5,
      name: 'Jair Rodrigues',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique arcu eget egestas fringilla',
      avatar: './assets/avatar_man_2.png',
      level: 1,
      answerComments: []
    },
    {
      id: 6,
      name: 'Natália Rodrigues',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique arcu eget egestas fringilla',
      avatar: './assets/avatar_woman_1.png',
      level: 1,
      answerComments: []
    }
  ];
  constructor() {

  }

  ngOnInit(): void {
  }


}
