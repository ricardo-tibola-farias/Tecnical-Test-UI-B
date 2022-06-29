import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsListComponent } from './comments-list.component';
import { CommentItemModule } from '../comment-item/comment-item.module';


@NgModule({
  declarations: [CommentsListComponent],
  exports: [CommentsListComponent],
  imports: [
    CommonModule,
    CommentItemModule
  ]
})
export class CommentsListModule { }
