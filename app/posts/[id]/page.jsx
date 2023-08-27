import { Suspense } from "react";
import Posts from "../page";

const getPost = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();
  console.log(data);
  return data;
}

const Post = async ({ params }) => {
  const id = params.id;
  const post = await getPost(id);

  return (
    <section>
      <h2>Post page {params.id}</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <hr />
      <h3>Another posts</h3>
      <Suspense fallback={<h3>Loading another post...</h3>}>
        <Posts />
      </Suspense >
    </section>
  )
}

export default Post;