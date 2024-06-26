import {
  ActivityIcon,
  ArchiveXIcon,
  ArrowUpRightIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleAlertIcon,
  CircleCheckIcon,
  CircleIcon,
  CircleUserIcon,
  CircleXIcon,
  CreditCardIcon,
  DollarSignIcon,
  FolderIcon,
  GripVerticalIcon,
  HomeIcon,
  InfoIcon,
  MenuIcon,
  MoonIcon,
  MoreHorizontalIcon,
  Package2Icon,
  PanelLeftIcon,
  SearchIcon,
  SunIcon,
  TrashIcon,
  User2Icon,
  UsersIcon,
  XIcon,
} from 'lucide-react';
import { useId } from 'react';

import { cn } from '@/utils/cn';

export { type LucideIcon } from 'lucide-react';

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  Activity: ActivityIcon,
  Apple: ({ className, ...props }: IconProps) => (
    <svg
      className={cn('size-6', className)}
      role="img"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="currentColor"
      />
    </svg>
  ),
  ArchiveX: ArchiveXIcon,
  Aria: ({ className, ...props }: IconProps) => (
    <svg
      className={cn('size-6', className)}
      fill="currentColor"
      role="img"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" />
    </svg>
  ),
  ArrowUpRight: ArrowUpRightIcon,
  Check: CheckIcon,
  ChevronDown: ChevronDownIcon,
  ChevronLeft: ChevronLeftIcon,
  ChevronRight: ChevronRightIcon,
  ChevronUp: ChevronUpIcon,
  Circle: CircleIcon,
  CircleAlert: CircleAlertIcon,
  CircleCheck: CircleCheckIcon,
  CircleUser: CircleUserIcon,
  CircleX: CircleXIcon,
  CreditCard: CreditCardIcon,
  DollarSign: DollarSignIcon,
  Folder: FolderIcon,
  GitHub: ({ className, ...props }: IconProps) => (
    <svg
      className={cn('size-6', className)}
      viewBox="0 0 438.549 438.549"
      {...props}
    >
      <path
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  Google: ({ className, ...props }: IconProps) => (
    <svg
      className={cn('size-6', className)}
      role="img"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
        fill="currentColor"
      />
    </svg>
  ),
  GripVertical: GripVerticalIcon,
  Home: HomeIcon,
  Info: InfoIcon,
  Logo: ({ className, ...props }: IconProps) => (
    <svg
      className={cn('size-6', className)}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect fill="none" height="256" width="256" />
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="208"
        x2="128"
        y1="128"
        y2="208"
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="192"
        x2="40"
        y1="40"
        y2="192"
      />
    </svg>
  ),
  Menu: MenuIcon,
  Moon: MoonIcon,
  MoreHorizontal: MoreHorizontalIcon,
  Npm: ({ className, ...props }: IconProps) => (
    <svg className={cn('size-6', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
        fill="currentColor"
      />
    </svg>
  ),
  Package2: Package2Icon,
  PanelLeft: PanelLeftIcon,
  Paypal: ({ className, ...props }: IconProps) => (
    <svg
      className={cn('size-6', className)}
      role="img"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
        fill="currentColor"
      />
    </svg>
  ),
  Pnpm: ({ className, ...props }: IconProps) => (
    <svg className={cn('size-6', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"
        fill="currentColor"
      />
    </svg>
  ),
  Radix: ({ className, ...props }: IconProps) => (
    <svg
      className={cn('size-6', className)}
      fill="none"
      viewBox="0 0 25 25"
      {...props}
    >
      <path
        d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
        fill="currentcolor"
      ></path>
      <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
      <path
        d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
        fill="currentcolor"
      ></path>
    </svg>
  ),
  React: ({ className, ...props }: IconProps) => (
    <svg className={cn('size-6', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
        fill="currentColor"
      />
    </svg>
  ),
  Search: SearchIcon,
  Spinner: ({ className, ...props }: IconProps) => (
    <svg
      className={cn('size-6', className)}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  Sun: SunIcon,
  Tailwind: ({ className, ...props }: IconProps) => (
    <svg className={cn('size-6', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
        fill="currentColor"
      />
    </svg>
  ),
  TanStack: ({ className, ...props }: IconProps) => {
    const id = useId();
    return (
      <svg
        className={cn('size-6', className)}
        version="1.0"
        viewBox="0 0 633 633"
        {...props}
      >
        <linearGradient
          gradientTransform="matrix(633 0 0 633 422177 -103358)"
          gradientUnits="userSpaceOnUse"
          id={`a-${id}`}
          x1="-666.45"
          x2="-666.45"
          y1="163.28"
          y2="163.99"
        >
          <stop offset="0" stopColor="#6BDAFF" />
          <stop offset=".32" stopColor="#F9FFB5" />
          <stop offset=".71" stopColor="#FFA770" />
          <stop offset="1" stopColor="#FF7373" />
        </linearGradient>
        <circle cx="316.5" cy="316.5" fill={`url(#a-${id})`} r="316.5" />

        <defs>
          <filter
            filterUnits="userSpaceOnUse"
            height="396.9"
            id={`am-${id}`}
            width="454"
            x="-137.5"
            y="412"
          >
            <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
          </filter>
        </defs>

        <mask
          height="396.9"
          id={`b-${id}`}
          maskUnits="userSpaceOnUse"
          width="454"
          x="-137.5"
          y="412"
        >
          <g filter={`url(#am-${id})`}>
            <circle cx="316.5" cy="316.5" fill="#fff" r="316.5" />
          </g>
        </mask>
        <g mask={`url(#b-${id})`}>
          <ellipse
            cx="89.5"
            cy="610.5"
            fill="#015064"
            rx="214.5"
            ry="186"
            stroke="#00CFE2"
            strokeWidth="25"
          />
        </g>
        <defs>
          <filter
            filterUnits="userSpaceOnUse"
            height="396.9"
            id={`ah-${id}`}
            width="454"
            x="316.5"
            y="412"
          >
            <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
          </filter>
        </defs>

        <mask
          height="396.9"
          id={`k-${id}`}
          maskUnits="userSpaceOnUse"
          width="454"
          x="316.5"
          y="412"
        >
          <g filter={`url(#ah-${id})`}>
            <circle cx="316.5" cy="316.5" fill="#fff" r="316.5" />
          </g>
        </mask>
        <g mask={`url(#k-${id})`}>
          <ellipse
            cx="543.5"
            cy="610.5"
            fill="#015064"
            rx="214.5"
            ry="186"
            stroke="#00CFE2"
            strokeWidth="25"
          />
        </g>
        <defs>
          <filter
            filterUnits="userSpaceOnUse"
            height="396.9"
            id={`ae-${id}`}
            width="454"
            x="-137.5"
            y="450"
          >
            <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
          </filter>
        </defs>

        <mask
          height="396.9"
          id={`j-${id}`}
          maskUnits="userSpaceOnUse"
          width="454"
          x="-137.5"
          y="450"
        >
          <g filter={`url(#ae-${id})`}>
            <circle cx="316.5" cy="316.5" fill="#fff" r="316.5" />
          </g>
        </mask>
        <g mask={`url(#j-${id})`}>
          <ellipse
            cx="89.5"
            cy="648.5"
            fill="#015064"
            rx="214.5"
            ry="186"
            stroke="#00A8B8"
            strokeWidth="25"
          />
        </g>
        <defs>
          <filter
            filterUnits="userSpaceOnUse"
            height="396.9"
            id={`ai-${id}`}
            width="454"
            x="316.5"
            y="450"
          >
            <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
          </filter>
        </defs>

        <mask
          height="396.9"
          id={`i-${id}`}
          maskUnits="userSpaceOnUse"
          width="454"
          x="316.5"
          y="450"
        >
          <g filter={`url(#ai-${id})`}>
            <circle cx="316.5" cy="316.5" fill="#fff" r="316.5" />
          </g>
        </mask>
        <g mask={`url(#i-${id})`}>
          <ellipse
            cx="543.5"
            cy="648.5"
            fill="#015064"
            rx="214.5"
            ry="186"
            stroke="#00A8B8"
            strokeWidth="25"
          />
        </g>
        <defs>
          <filter
            filterUnits="userSpaceOnUse"
            height="396.9"
            id={`aj-${id}`}
            width="454"
            x="-137.5"
            y="486"
          >
            <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
          </filter>
        </defs>

        <mask
          height="396.9"
          id={`h-${id}`}
          maskUnits="userSpaceOnUse"
          width="454"
          x="-137.5"
          y="486"
        >
          <g filter={`url(#aj-${id})`}>
            <circle cx="316.5" cy="316.5" fill="#fff" r="316.5" />
          </g>
        </mask>
        <g mask={`url(#h-${id})`}>
          <ellipse
            cx="89.5"
            cy="684.5"
            fill="#015064"
            rx="214.5"
            ry="186"
            stroke="#007782"
            strokeWidth="25"
          />
        </g>
        <defs>
          <filter
            filterUnits="userSpaceOnUse"
            height="396.9"
            id={`ag-${id}`}
            width="454"
            x="316.5"
            y="486"
          >
            <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
          </filter>
        </defs>

        <mask
          height="396.9"
          id={`g-${id}`}
          maskUnits="userSpaceOnUse"
          width="454"
          x="316.5"
          y="486"
        >
          <g filter={`url(#ag-${id})`}>
            <circle cx="316.5" cy="316.5" fill="#fff" r="316.5" />
          </g>
        </mask>
        <g mask={`url(#g-${id})`}>
          <ellipse
            cx="543.5"
            cy="684.5"
            fill="#015064"
            rx="214.5"
            ry="186"
            stroke="#007782"
            strokeWidth="25"
          />
        </g>
        <defs>
          <filter
            filterUnits="userSpaceOnUse"
            height="129.3"
            id={`af-${id}`}
            width="176.9"
            x="272.2"
            y="308"
          >
            <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
          </filter>
        </defs>

        <mask
          height="129.3"
          id={`f-${id}`}
          maskUnits="userSpaceOnUse"
          width="176.9"
          x="272.2"
          y="308"
        >
          <g filter={`url(#af-${id})`}>
            <circle cx="316.5" cy="316.5" fill="#fff" r="316.5" />
          </g>
        </mask>
        <g mask={`url(#f-${id})`}>
          <line
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="11"
            x1="436"
            x2="431"
            y1="403.2"
            y2="431.8"
          />

          <line
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="11"
            x1="291"
            x2="280"
            y1="341.5"
            y2="403.5"
          />

          <line
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="11"
            x1="332.9"
            x2="328.6"
            y1="384.1"
            y2="411.2"
          />

          <linearGradient
            gradientTransform="matrix(-184.16 -32.472 -11.461 64.997 -121359 -32126)"
            gradientUnits="userSpaceOnUse"
            id={`m-${id}`}
            x1="-670.75"
            x2="-671.59"
            y1="164.4"
            y2="164.49"
          >
            <stop offset="0" stopColor="#EE2700" />
            <stop offset="1" stopColor="#FF008E" />
          </linearGradient>

          <path
            clipRule="evenodd"
            d="m344.1 363 97.7 17.2c5.8 2.1 8.2 6.1 7.1 12.1s-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1 0.8-12.8s8.3-4.4 13.7-2.1l55.2 53.6z"
            fill={`url(#m-${id})`}
            fillRule="evenodd"
          />

          <line
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="7"
            x1="428.2"
            x2="429.1"
            y1="384.5"
            y2="378"
          />

          <line
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="7"
            x1="395.2"
            x2="396.1"
            y1="379.5"
            y2="373"
          />

          <line
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="7"
            x1="362.2"
            x2="363.1"
            y1="373.5"
            y2="367.4"
          />

          <line
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="7"
            x1="324.2"
            x2="328.4"
            y1="351.3"
            y2="347.4"
          />

          <line
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="7"
            x1="303.2"
            x2="307.4"
            y1="331.3"
            y2="327.4"
          />
        </g>
        <defs>
          <filter
            filterUnits="userSpaceOnUse"
            height="317.4"
            id={`ak-${id}`}
            width="280.6"
            x="73.2"
            y="113.8"
          >
            <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
          </filter>
        </defs>

        <mask
          height="317.4"
          id={`e-${id}`}
          maskUnits="userSpaceOnUse"
          width="280.6"
          x="73.2"
          y="113.8"
        >
          <g filter={`url(#ak-${id})`}>
            <circle cx="316.5" cy="316.5" fill="#fff" r="316.5" />
          </g>
        </mask>
        <g mask={`url(#e-${id})`}>
          <linearGradient
            gradientTransform="matrix(-100.18 48.861 97.976 200.88 -83342 -93.059)"
            gradientUnits="userSpaceOnUse"
            id={`n-${id}`}
            x1="-672.16"
            x2="-672.16"
            y1="165.03"
            y2="166.03"
          >
            <stop offset="0" stopColor="#A17500" />
            <stop offset="1" stopColor="#5D2100" />
          </linearGradient>

          <path
            clipRule="evenodd"
            d="m192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.1-3 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6s-10.8-51.9-22.1-99.6l-25.3 4.6"
            fill={`url(#n-${id})`}
            fillRule="evenodd"
          />
          <g stroke="#2F8A00">
            <linearGradient
              gradientTransform="matrix(92.683 4.8573 -2.0259 38.657 61680 -3088.6)"
              gradientUnits="userSpaceOnUse"
              id={`r-${id}`}
              x1="-660.23"
              x2="-660.23"
              y1="166.72"
              y2="167.72"
            >
              <stop offset="0" stopColor="#2F8A00" />
              <stop offset="1" stopColor="#90FF57" />
            </linearGradient>

            <path
              clipRule="evenodd"
              d="m195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"
              fill={`url(#r-${id})`}
              fillRule="evenodd"
              strokeWidth="13"
            />

            <linearGradient
              gradientTransform="matrix(110 5.7648 -6.3599 121.35 73933 -15933)"
              gradientUnits="userSpaceOnUse"
              id={`s-${id}`}
              x1="-661.36"
              x2="-661.36"
              y1="164.18"
              y2="165.18"
            >
              <stop offset="0" stopColor="#2F8A00" />
              <stop offset="1" stopColor="#90FF57" />
            </linearGradient>

            <path
              clipRule="evenodd"
              d="m194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.4 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20.2 49.6-53.2 49.6-53.2z"
              fill={`url(#s-${id})`}
              fillRule="evenodd"
              strokeWidth="13"
            />

            <linearGradient
              gradientTransform="matrix(62.954 3.2993 -3.5023 66.828 42156 -8754.1)"
              gradientUnits="userSpaceOnUse"
              id={`q-${id}`}
              x1="-656.79"
              x2="-656.79"
              y1="165.15"
              y2="166.15"
            >
              <stop offset="0" stopColor="#2F8A00" />
              <stop offset="1" stopColor="#90FF57" />
            </linearGradient>

            <path
              clipRule="evenodd"
              d="m195 183.9c-0.8-21.9 6-38 20.6-48.2s29.8-15.4 45.5-15.3c-6.1 21.4-14.5 35.8-25.2 43.4s-24.4 14.2-40.9 20.1z"
              fill={`url(#q-${id})`}
              fillRule="evenodd"
              strokeWidth="13"
            />

            <linearGradient
              gradientTransform="matrix(152.47 7.9907 -3.0936 59.029 101884 -4318.7)"
              gradientUnits="userSpaceOnUse"
              id={`p-${id}`}
              x1="-663.07"
              x2="-663.07"
              y1="165.44"
              y2="166.44"
            >
              <stop offset="0" stopColor="#2F8A00" />
              <stop offset="1" stopColor="#90FF57" />
            </linearGradient>

            <path
              clipRule="evenodd"
              d="m194.9 184.5c31.9-30 64.1-39.7 96.7-29s50.8 30.4 54.6 59.1c-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"
              fill={`url(#p-${id})`}
              fillRule="evenodd"
              strokeWidth="13"
            />

            <linearGradient
              gradientTransform="matrix(136.46 7.1517 -5.2163 99.533 91536 -11442)"
              gradientUnits="userSpaceOnUse"
              id={`o-${id}`}
              x1="-662.57"
              x2="-662.57"
              y1="164.44"
              y2="165.44"
            >
              <stop offset="0" stopColor="#2F8A00" />
              <stop offset="1" stopColor="#90FF57" />
            </linearGradient>

            <path
              clipRule="evenodd"
              d="m194.9 184.5c35.8-7.6 65.6-0.2 89.2 22s37.7 49 42.3 80.3c-39.8-9.7-68.3-23.8-85.5-42.4s-32.5-38.5-46-59.9z"
              fill={`url(#o-${id})`}
              fillRule="evenodd"
              strokeWidth="13"
            />

            <linearGradient
              gradientTransform="matrix(60.866 3.1899 -8.7773 167.48 41560 -25168)"
              gradientUnits="userSpaceOnUse"
              id={`l-${id}`}
              x1="-656.43"
              x2="-656.43"
              y1="163.86"
              y2="164.86"
            >
              <stop offset="0" stopColor="#2F8A00" />
              <stop offset="1" stopColor="#90FF57" />
            </linearGradient>

            <path
              clipRule="evenodd"
              d="m194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6s-3.6 63.1 8.7 99.6c27.4-40.3 43.2-69.6 47.4-88s5.6-44.1 4-77.2z"
              fill={`url(#l-${id})`}
              fillRule="evenodd"
              strokeWidth="13"
            />
            <path
              d="m196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4s-9.5 33-11.1 45.1"
              fill="none"
              strokeLinecap="round"
              strokeWidth="8"
            />
            <path
              d="m194.9 185.7c-24.4 1.7-43.8 9-58.1 21.8s-24.7 25.4-31.3 37.8"
              fill="none"
              strokeLinecap="round"
              strokeWidth="8"
            />
            <path
              d="m204.5 176.4c29.7-6.7 52-8.4 67-5.1s26.9 8.6 35.8 15.9"
              fill="none"
              strokeLinecap="round"
              strokeWidth="8"
            />
            <path
              d="m196.5 181.4c20.3 9.9 38.2 20.5 53.9 31.9s27.4 22.1 35.1 32"
              fill="none"
              strokeLinecap="round"
              strokeWidth="8"
            />
          </g>
        </g>
        <defs>
          <filter
            filterUnits="userSpaceOnUse"
            height="633"
            id={`al-${id}`}
            width="532"
            x="50.5"
            y="399"
          >
            <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
          </filter>
        </defs>

        <mask
          height="633"
          id={`d-${id}`}
          maskUnits="userSpaceOnUse"
          width="532"
          x="50.5"
          y="399"
        >
          <g filter={`url(#al-${id})`}>
            <circle cx="316.5" cy="316.5" fill="#fff" r="316.5" />
          </g>
        </mask>
        <g mask={`url(#d-${id})`}>
          <linearGradient
            gradientTransform="matrix(532 0 0 633 354760 -102959)"
            gradientUnits="userSpaceOnUse"
            id={`u-${id}`}
            x1="-666.06"
            x2="-666.23"
            y1="163.36"
            y2="163.75"
          >
            <stop offset="0" stopColor="#FFF400" />
            <stop offset="1" stopColor="#3C8700" />
          </linearGradient>

          <ellipse
            cx="316.5"
            cy="715.5"
            fill={`url(#u-${id})`}
            rx="266"
            ry="316.5"
          />
        </g>
        <defs>
          <filter
            filterUnits="userSpaceOnUse"
            height="283"
            id={`ad-${id}`}
            width="288"
            x="391"
            y="-24"
          >
            <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
          </filter>
        </defs>

        <mask
          height="283"
          id={`c-${id}`}
          maskUnits="userSpaceOnUse"
          width="288"
          x="391"
          y="-24"
        >
          <g filter={`url(#ad-${id})`}>
            <circle cx="316.5" cy="316.5" fill="#fff" r="316.5" />
          </g>
        </mask>
        <g mask={`url(#c-${id})`}>
          <linearGradient
            gradientTransform="matrix(227 0 0 227 151421 -37204)"
            gradientUnits="userSpaceOnUse"
            id={`t-${id}`}
            x1="-664.56"
            x2="-664.56"
            y1="163.79"
            y2="164.79"
          >
            <stop offset="0" stopColor="#FFDF00" />
            <stop offset="1" stopColor="#FF9D00" />
          </linearGradient>
          <circle cx="565.5" cy="89.5" fill={`url(#t-${id})`} r="113.5" />

          <linearGradient
            gradientTransform="matrix(30 0 0 1 19770 -253)"
            gradientUnits="userSpaceOnUse"
            id={`v-${id}`}
            x1="-644.5"
            x2="-645.77"
            y1="342"
            y2="342"
          >
            <stop offset="0" stopColor="#FFA400" />
            <stop offset="1" stopColor="#FF5E00" />
          </linearGradient>

          <line
            fill="none"
            stroke={`url(#v-${id})`}
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="12"
            x1="427"
            x2="397"
            y1="89"
            y2="89"
          />

          <linearGradient
            gradientTransform="matrix(26.5 0 0 5.5 17439 -1025.5)"
            gradientUnits="userSpaceOnUse"
            id={`aa-${id}`}
            x1="-641.56"
            x2="-642.83"
            y1="196.02"
            y2="196.07"
          >
            <stop offset="0" stopColor="#FFA400" />
            <stop offset="1" stopColor="#FF5E00" />
          </linearGradient>

          <line
            fill="none"
            stroke={`url(#aa-${id})`}
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="12"
            x1="430.5"
            x2="404"
            y1="55.5"
            y2="50"
          />

          <linearGradient
            gradientTransform="matrix(29 0 0 8 19107 -1361)"
            gradientUnits="userSpaceOnUse"
            id={`w-${id}`}
            x1="-643.73"
            x2="-645"
            y1="185.83"
            y2="185.9"
          >
            <stop offset="0" stopColor="#FFA400" />
            <stop offset="1" stopColor="#FF5E00" />
          </linearGradient>

          <line
            fill="none"
            stroke={`url(#w-${id})`}
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="12"
            x1="431"
            x2="402"
            y1="122"
            y2="130"
          />

          <linearGradient
            gradientTransform="matrix(24 0 0 13 15783 -2145)"
            gradientUnits="userSpaceOnUse"
            id={`ac-${id}`}
            x1="-638.94"
            x2="-640.22"
            y1="177.09"
            y2="177.39"
          >
            <stop offset="0" stopColor="#FFA400" />
            <stop offset="1" stopColor="#FF5E00" />
          </linearGradient>

          <line
            fill="none"
            stroke={`url(#ac-${id})`}
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="12"
            x1="442"
            x2="418"
            y1="153"
            y2="166"
          />

          <linearGradient
            gradientTransform="matrix(20 0 0 19 13137 -3096)"
            gradientUnits="userSpaceOnUse"
            id={`ab-${id}`}
            x1="-633.42"
            x2="-634.7"
            y1="172.41"
            y2="173.31"
          >
            <stop offset="0" stopColor="#FFA400" />
            <stop offset="1" stopColor="#FF5E00" />
          </linearGradient>

          <line
            fill="none"
            stroke={`url(#ab-${id})`}
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="12"
            x1="464"
            x2="444"
            y1="180"
            y2="199"
          />

          <linearGradient
            gradientTransform="matrix(13.83 0 0 22.85 9050 -3703.4)"
            gradientUnits="userSpaceOnUse"
            id={`y-${id}`}
            x1="-619.05"
            x2="-619.52"
            y1="170.82"
            y2="171.82"
          >
            <stop offset="0" stopColor="#FFA400" />
            <stop offset="1" stopColor="#FF5E00" />
          </linearGradient>

          <line
            fill="none"
            stroke={`url(#y-${id})`}
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="12"
            x1="491.4"
            x2="477.5"
            y1="203"
            y2="225.9"
          />

          <linearGradient
            gradientTransform="matrix(7.5 0 0 24.5 4860 -3953)"
            gradientUnits="userSpaceOnUse"
            id={`x-${id}`}
            x1="-578.5"
            x2="-578.63"
            y1="170.31"
            y2="171.31"
          >
            <stop offset="0" stopColor="#FFA400" />
            <stop offset="1" stopColor="#FF5E00" />
          </linearGradient>

          <line
            fill="none"
            stroke={`url(#x-${id})`}
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="12"
            x1="524.5"
            x2="517"
            y1="219.5"
            y2="244"
          />

          <linearGradient
            gradientTransform="matrix(.5 0 0 24.5 231.5 -3944)"
            gradientUnits="userSpaceOnUse"
            id={`z-${id}`}
            x1="666.5"
            x2="666.5"
            y1="170.31"
            y2="171.31"
          >
            <stop offset="0" stopColor="#FFA400" />
            <stop offset="1" stopColor="#FF5E00" />
          </linearGradient>

          <line
            fill="none"
            stroke={`url(#z-${id})`}
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="12"
            x1="564.5"
            x2="565"
            y1="228.5"
            y2="253"
          />
        </g>
      </svg>
    );
  },
  Trash: TrashIcon,
  Twitter: ({ className, ...props }: IconProps) => (
    <svg
      className={cn('size-6', className)}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),
  User2: User2Icon,
  Users: UsersIcon,
  X: XIcon,
  Yarn: ({ className, ...props }: IconProps) => (
    <svg className={cn('size-6', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z"
        fill="currentColor"
      />
    </svg>
  ),
};
