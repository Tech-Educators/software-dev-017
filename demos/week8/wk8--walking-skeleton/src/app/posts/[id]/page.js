// give your user some navigation controls!
// remember to add metadata for the page!
//we need params to render the post data dynamically!

export default function IdPage() {
  // I need to get posts from supabase but filtered by id
  //(WHERE id = ${params.id})
  //I need to handle the submit of the comments form

  return (
    <h1>Dynamic route for individual post</h1>
    //display the individual post.
    //display any comments on the post.
    //need to display the comments form to capture the users comment.
  );
}
