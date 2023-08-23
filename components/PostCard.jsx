"use client";

const PostCard = ({ post }) => {
  return (
    <article>
      <h3>
        <span>{post.id}</span> post.title
      </h3>
      <p>{post.body}</p>
      <button onClick={() => console.log("hola")}>Click</button>
    </article>
  );
};

export default PostCard;
