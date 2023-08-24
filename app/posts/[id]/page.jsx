import { Suspense } from "react";
import dynamic from 'next/dynamic';
// import Posts from "../page";

const getPost=async(id)=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    console.log(data);
    return data;
}

const Posts = dynamic(() => import("../page"), {
    loading: () => <div>Loading posts...</div>
  });

const Post=async({params})=>{
    const id = params.id;
    const post =await getPost(id);
    
    return(
        <section>
            <h2>Post page {params.id}</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr />
            <h3>Another posts</h3>
            <Suspense>
                <Posts />
            </Suspense >
        </section>
    )
}

export default Post;