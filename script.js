// create a twitter clone which has a functionality of posting a tweet,deleting it,editing a tweet and you can also comment on the tweet, like a comment and also the post with full functionality

document.addEventListener('DOMContentLoaded', () => {
    const newTweetForm = document.getElementById('new-tweet-form');
    const tweetsContainer = document.getElementById('tweets-container');
  
    newTweetForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const tweetBody = document.getElementById('tweet-body').value;
      createTweet(tweetBody);
      newTweetForm.reset();
    });
  
    function createTweet(body) {
      const tweet = document.createElement('div');
      tweet.classList.add('tweet');
      tweet.classList.add('tweet_styling');
      tweet.innerHTML = `
        <h5>Harsh Verma   @harsh_abcd123</h5>
        <p class="tweet-body">${body}</p>
        <hr>
        <button class="like-btn">Like</button>
        <button class="comment-btn">Comment</button>
        <button class="delete-btn">Delete</button>
        <div class="comments-container"></div>
      `;
      tweetsContainer.appendChild(tweet);

  
      const likeBtn = tweet.querySelector('.like-btn');
      likeBtn.addEventListener('click', () => {
        likeTweet(likeBtn);
      });
  
      const commentBtn = tweet.querySelector('.comment-btn');
      commentBtn.addEventListener('click', () => {
        createComment(tweet);
      });
  
      const deleteBtn = tweet.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', () => {
        deleteTweet(tweet);
      });
    }
  
    function likeTweet(likeBtn) {
      likeBtn.textContent = 'Liked';
      likeBtn.disabled = true;
    }
  
    function createComment(tweet) {
      const comment = prompt('Enter your comment:');
      if (comment) {
        const commentsContainer = tweet.querySelector('.comments-container');
        const newComment = document.createElement('p');
        newComment.classList.add('comment');
        newComment.textContent = comment;
        commentsContainer.appendChild(newComment);
      }
    }
  
    function deleteTweet(tweet) {
      tweet.remove();
    }
  });