
export class CommentModel {
    public id: number;
    public name: string;
    public comment: string;
    public level: number;
    public avatar: string;
    public answerComments?: CommentModel[];
}
