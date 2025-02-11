import * as Popover from "@radix-ui/react-popover";

export default function PopOver() {
  return (
    <>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button>Click me for a surprise!</button>
        </Popover.Trigger>
        <Popover.Anchor />
        <Popover.Portal>
          <Popover.Content>
            <h2>Welcome to this simple app</h2>
            <p>
              I might be simple, but I have a component primitive from Radix!
            </p>
            <Popover.Close />
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}
