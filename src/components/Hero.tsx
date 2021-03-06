export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center space-y-10 mt-12 
            sm:mt-24 md:mt-32">
      <div className="space-y-4 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold capitalize">
          <span className="block">A basic Next.JS, TailwindCSS,</span>
          <span className="block">Typescript template</span>
        </h1>
        <h2 className="text-xl sm:text-2xl">
          Start your Next.JS project, with a basic skeleton rather than
          wasting the first couple of hours setting everything up from scratch.
        </h2>
      </div>
      <button
        type="button"
        onClick={() => null}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white
                rounded-md border-2 border-blue-600 hover:border-blue-700 
                text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600
                focus:ring-opacity-50 whitespace-nowrap"
      >
        Start here
      </button>
    </section>
  )
}