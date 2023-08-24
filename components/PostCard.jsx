"use client";

import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <article>
      <Link href={`/posts/${post.id}`}>
        <h3>
          <span>{post.id}</span> {post.title}
        </h3>
      </Link>
      <p>{post.body}</p>
      <button onClick={() => console.log("hola")}>Click</button>
    </article>
  );
};

export default PostCard;
