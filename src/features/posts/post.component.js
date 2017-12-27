import templateUrl from './post.tpl.html';

export const PostComponent = {
  template: templateUrl,
  controller: class PostComponent {
    constructor() {
      "ngInject";
      this.post = {
        title: "First post",
        body: "Body post"
      };
    }
  }
};
