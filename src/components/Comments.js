import React from 'react';

const Comments = React.createClass({
  renderComment(comment, i) {
    return (
      <div className="comment" key={ i }>
        <p>
          <strong>{ comment.user }</strong>
          { comment.text }
          <button className="remove-comment"
            onClick={ this.props.deleteComment.bind(null,
              comment.id) }>&times;</button>
        </p>
      </div>
    );
  },

  handleSubmit(e) {
    e.preventDefault();

    const { postId } = this.props.params;
    const user = this.refs.author.value;
    const text = this.refs.comment.value;

    const comment = {
      user,
      postId,
      text
    }

    this.props.createComment(comment);
    this.refs.commentForm.reset();
  },

  render() {

    return (
      <div className="comments">
        { this.props.postComments.map(this.renderComment) }
        <form ref="commentForm" className="comment-form"
          onSubmit = { this.handleSubmit }>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
});

export default Comments;
