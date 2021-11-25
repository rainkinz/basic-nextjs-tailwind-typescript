import { CodeIcon } from '@heroicons/react/outline';

export default function Header() {
  return (
    <header className="border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <p className="flex items-center space-x-1 text-blue-700">
          <CodeIcon className="w-8 h-8 flex-shrink-0" />
          <span className="font-bold text-lg tracking-tight whitespace-nowrap">
            Company Name
          </span>
        </p>
      </div>
    </header>
  )
}