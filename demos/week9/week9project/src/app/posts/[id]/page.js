export default async function IdPage({ params }) {
  const myParams = await params;
  return (
    <>
      <h1>Post number {myParams.id}</h1>
    </>
  );
}
