//Use case: we have a page with content that renders at different speeds. We want to make sure that the slow content does not slow down the loading of the whole page.

import Fallback from "@/components/Fallback";
import SlowComponent from "@/components/SlowComponent";
import { Suspense } from "react";

export default function FastPage() {
  return (
    <>
      <h1>This is the fast page</h1>
      <h2>If your content renders fast, we have it fast!</h2>
      <h2>If your content renders slowly, we can wait for it</h2>
      {/* We are nesting the SlowComponent is Suspense, so we only have to wait for this component to load, while the rest of the content can load as fast as possible */}
      {/* the fallback prop contains the element we will show while SlowComponent is loading */}
      <Suspense fallback={<Fallback />}>
        <SlowComponent />
      </Suspense>
    </>
  );
}
