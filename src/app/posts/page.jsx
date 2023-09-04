import PostCard from "@/components/PostCard";
import "./posts.css"

const fetchPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  // console.log(data);
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return data;
};

const Posts = async () => {
  const posts = await fetchPost();

  return (
    <section className="posts">
      <h1>Posts route</h1>
      <div className="grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Posts;
