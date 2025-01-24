//! Disclaimer: I will write all the comments here, but it is your job to put each part of the app in a different component / folder / file

//we need an element to store our upgrades --> either a local file (like I did in the lists and keys demo) or fetch them from the API (stretch goal)

export default function App() {
  //I need TWO state variables to store two values --> one state to track the number of cookies, and one state to trach the cookies per second (cps)
  //useState()
  //useState()

  //this block of code is very useful. What does it do?
  // useEffect(() => {
  //   const myInterval = setInterval(() => {
  //     setCookies((currentCookies) => {
  //       currentCookies + cps;
  //     });
  //   }, 1000);
  //   return () => {
  //     clearInterval(myInterval);
  //   };
  // }, [cps]);

  //we need some logic for the shop upgrades (cookies go down, cps goes up)
  //write your logic here!

  return (
    <>
      <h1>Cookie Clicker</h1>
      {/* we need an element to interact with the user */}
      {/* we need elements to render our cookies and cps for the user to see the values displayed */}
      {/* we need the shop upgrades rendered here! */}
    </>
  );
}
