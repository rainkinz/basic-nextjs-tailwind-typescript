interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

export default function Button({ children, onClick, ...rest }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white
                rounded-md border-2 border-blue-600 hover:border-blue-700 
                text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600
                focus:ring-opacity-50 whitespace-nowrap"
      {...rest}
    >
      {children}
    </button>
  )
}