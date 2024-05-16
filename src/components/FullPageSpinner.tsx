import { Spinner } from './ui/Spinner';

export function FullPageSpinner() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Spinner size="xl" />
    </div>
  );
}
