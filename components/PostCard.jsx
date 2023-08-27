"use client";

import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <article className="bg-gray-950 p-10">
      <Link href={`/posts/${post.id}`}>
        <h3 className="text-xl font-bold mb-4">
          <span>{post.id}</span> {post.title}
        </h3>
      </Link>
      <p className="text-slate-300">{post.body}</p>
      <button onClick={() => console.log("hola")}>Click</button>
    </article>
  );
};

export default PostCard;
