import CRUD from "./crud.js";

export class JsonPlaceholder extends CRUD {
  _base = "https://jsonplaceholder.typicode.com";

  getPosts(start, limit = 20) {
    return this.record(`${this._base}/posts`, {
      _start: start,
      _limit: limit
    });
  }

  getPostById(id) {
    return this.record(`${this._base}/posts/${id}`);
  }

  deletePost(id) {
    return this.delete(`${this._base}/posts/${id}`);
  }

  createPost(title, body) {
    return this.create(
      `${this._base}/posts`,
      {
        title: title,
        body: body,
        userId: 1
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    );
  }

  updatePost(id, title, body, postId) {
    return this.update(
      `${this._base}/posts/${id}`,
      {
        id: id,
        title: title,
        body: body,
        postId: postId
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    );
  }
}
