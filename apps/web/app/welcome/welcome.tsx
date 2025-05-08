import { Button } from "@workspace/ui/components/button";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex min-h-0 flex-1 flex-col items-center gap-16">
        <h1>Welcome to React Router</h1>
        <Button>Click me</Button>
      </div>
    </main>
  );
}
