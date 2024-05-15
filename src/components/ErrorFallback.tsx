import { Button } from './ui';

export function ErrorFallback() {
  return (
    <div
      className="flex flex-col items-center justify-center text-red-500"
      role="alert"
    >
      <h2>Oops, something went wrong :(</h2>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </div>
  );
}
