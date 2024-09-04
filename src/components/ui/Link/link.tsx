import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from '@tanstack/react-router';
import * as React from 'react';

import { cn } from '@/utils/cn';

type LinkProps = React.HTMLAttributes<'a'> & RouterLinkProps;

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <RouterLink
        ref={ref}
        className={cn(
          'text-slate-600 hover:text-slate-900 dark:text-white dark:hover:text-white/95',
          className,
        )}
        {...props}
      >
        {children}
      </RouterLink>
    );
  },
);
Link.displayName = 'Link';

export { Link };
