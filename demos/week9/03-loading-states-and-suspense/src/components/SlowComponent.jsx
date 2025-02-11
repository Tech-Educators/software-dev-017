//I am going to add a delay on purpose to show how a slow component would behave

async function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export default async function SlowComponent() {
  await delay(5000);
  return (
    <>
      <h2 className="bg-yellow-600">
        I am a slow component because Manny made me slow
      </h2>
      <p className="bg-yellow-600">
        Usually I would be a slow component because I have to render lots and
        lots and lots of data or media
      </p>
    </>
  );
}
