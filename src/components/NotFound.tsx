import { Link } from '@tanstack/react-router';

import { Button } from './ui';

export function NotFound() {
  return (
    <div className="mt-12 flex flex-col justify-center space-y-6 text-center">
      <h1 className="text-3xl font-semibold">Not Found!</h1>
      <div>
        <Button asChild>
          <Link to="/">Go home</Link>
        </Button>
      </div>
    </div>
  );
}
