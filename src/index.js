import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45 PM"
        text="This is a great idea."
        imageURL={faker.image.image()}
      />
      <CommentDetail
        author="Thomas"
        timeAgo="Today at 1:45 PM"
        text="Why haven't we tried this before?"
        imageURL={faker.image.image()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 2:45 PM"
        text="Has this been proven in a laboratory setting?"
        imageURL={faker.image.image()}
      />
      <CommentDetail
        author="Eric"
        timeAgo="Yesterday at 3:22 PM"
        text="This is crazy"
        imageURL={faker.image.image()}
      />
      <CommentDetail
        author="Peter"
        timeAgo="5 minutes ago"
        text="I tried it, but it didn't work for me."
        imageURL={faker.image.image()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
