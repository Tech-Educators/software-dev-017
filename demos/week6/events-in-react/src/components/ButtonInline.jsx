//we can also write our event listener and handler all in one line

export default function ButtonInline() {
  return (
    <>
      <button
        onClick={() => {
          console.log("I'm an event written in one line of code!");
        }}
      >
        Click me for another message!
      </button>
    </>
  );
}
