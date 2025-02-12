type paramsType = {
  params: Promise<{ id: number }>;
};

export default async function IdPage({ params }: paramsType) {
  const slug = await params;
  return (
    <>
      <h1>This is post number:{slug.id}</h1>
    </>
  );
}

//Another way to give params a type
// export default async function Page({
//     params,
//   }: {
//     params: Promise<{ id: number }>
//   }) {
//     const slug = (await params).slug
//     return <div>My Post: {id}</div>
//   }
