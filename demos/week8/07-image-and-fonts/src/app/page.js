import Image from "next/image";
//local images go in the public folder
//I need to import my local image to use it as the Image src
import flamingoes from "@/../public/assets/flamingoes.jpg";
export default function HomePage() {
  return (
    <>
      {/* the priority prop tells Next to either preload (true) or not (false) this Image component */}
      {/* the placeholder blur will show a blurry image while the image is loading */}
      <h1>Joe&apos;s Birds</h1>
      <h2>Where birds are happy and fluffy</h2>
      <Image
        src={flamingoes}
        alt={"Flamingoes flying over a mountain"}
        width={500}
        height="fill"
        priority="false"
        placeholder="blur"
      />
      <Image
        src={
          "https://images.unsplash.com/photo-1549586073-f4c3b7ff044a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt={"A pigeon flying over a lake"}
        width={500}
        height={250}
        priority="false"
      />
    </>
  );
}
