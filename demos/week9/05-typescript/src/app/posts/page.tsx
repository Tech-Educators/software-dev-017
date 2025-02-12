import { myPosts } from "@/lib/data";

export default function PostsPage() {
  return (
    <>
      <h1>Posts Page</h1>
      {/* I want to display my posts data here */}
      {myPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.postTitle}</h2>
          <p>{post.postDescription}</p>
        </div>
      ))}
    </>
  );
}
