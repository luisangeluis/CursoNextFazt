import PostCard from "@/components/PostCard";

const fetchPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  // console.log(data);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return data;
};

const Posts = async () => {
  const posts = await fetchPost();

  return (
    <section>
      <h1>Posts route</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
};

export default Posts;
