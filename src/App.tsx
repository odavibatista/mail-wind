import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50 grid place-content-center">
      <h1 className='text-center text-4xl'>Let's test you, Tailwind!</h1>
      <button
        className="
          w-fit mx-auto my-8 px-4 py-2 rounded-lg
          border-transparent hover:border-cyan-500 border-[1px]
          transition-colors"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </div>
  )
}

export default App
