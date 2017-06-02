import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
  render() {
    const { post, i } = this.props;
    const commentCount = post.comments.length;

    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={ `/view/${post.id}` }>
            <img src={ post.display_src } alt={ post.caption }
              className="grid-photo" />
          </Link>

          <CSSTransitionGroup transitionName="like"
            transitionEnterTimeout={ 500 }
            transitionLeaveTimeout={ 500 }>
            <span key={ post.likes } className="likes-heart">
              { post.likes }
            </span>
          </CSSTransitionGroup>

        </div>

        <figcaption>
          <p>{ post.caption }</p>
          <div className="control-buttons">
            <button onClick={ this.props.increment.bind(null, i) }
              className="likes">&hearts; { post.likes }</button>
            <Link className="button" to={ `/view/${ post.id }` }>
              <span className="comment-count">
                <span className="speech-bubble"></span>
                { commentCount }
              </span>
            </Link>
          </div>
        </figcaption>

      </figure>
    );
  }
});

export default Photo;
