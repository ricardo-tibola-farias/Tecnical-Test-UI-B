import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentItemComponent } from './comment-item.component';



@NgModule({
  declarations: [CommentItemComponent],
  exports: [CommentItemComponent],
  imports: [
    CommonModule
  ]
})
export class CommentItemModule { }
