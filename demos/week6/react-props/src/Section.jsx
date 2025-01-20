import Button from "./Button";
//We know that this component has been assigned some props
//We need a placholder element that represents each prop
//The parameter props works as an OBJECT with properties inside
// const props = {
// subheading:,
// sectionTitle:,
// }
//We access the properties in the props object using dot notation
export default function Section(props) {
  console.log(props);
  return (
    <>
      {/* to use vanilla JS in the jsx return, we need curly braces */}
      <h3>{props.subheading}</h3>
      <h2>{props.sectionTitle}</h2>
      <Button buttonMessage={props.buttonMessage} />
    </>
  );
}
