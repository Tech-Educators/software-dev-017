export default function ReusableButton(props) {
  console.log(props);
  return (
    <>
      <button onClick={props.eventHandler}>Reuse me!</button>
    </>
  );
}
