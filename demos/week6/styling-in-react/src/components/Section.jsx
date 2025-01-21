import "./Section.css";

export default function Section(props) {
  return (
    <>
      <h2 className="title">{props.title}</h2>
      <p className="content">{props.content}</p>
    </>
  );
}
