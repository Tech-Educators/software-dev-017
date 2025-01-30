// We need a component to render the data from the database

export default function Content() {
  //we need to store the database values in state
  //we need to fetch the values from the database (via server) --> this is an effect
  //once we have fetched the values, we need to parse them into JSON --> console log your data to see what it looks like, in case you might have to wrangle it
  //set the state variable to store our fetched data

  //! When you have finished your assignment, remember to replace the local host urls with your Render server url

  return (
    <>
      <h2>Content</h2>
      {/* here I will render a list with all my content entries (remember the key) */}
      {/* a suggestion for you, fancies: why not conditionally rendering some of your content data? */}
    </>
  );
}
