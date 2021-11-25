import Link from 'next/link';
import { CodeIcon } from '@heroicons/react/outline';

export default function Logo() {
  return (
    <Link href="/">
      <a className="flex items-center space-x-1 text-blue-700">
        <CodeIcon className="w-8 h-8 flex-shrink-0" />
        <span className="font-bold text-lg tracking-tight whitespace-nowrap">
          Company Name
        </span>
      </a>
    </Link>
  )
}