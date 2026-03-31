import { useState, useCallback } from 'react'
import { questions } from './data/questions'

export default function App() {
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const [shuffled] = useState(() => [...questions].sort(() => Math.random() - 0.5))

  const current = shuffled[index]
  const total = shuffled.length
  const answered = selected !== null

  const navigate = useCallback((next: number) => {
    setRevealed(false)
    setSelected(null)
    setIndex(next)
  }, [])

  const progress = ((index + 1) / total) * 100

  const getOptionStyle = (letter: string) => {
    const isCorrect = letter === current.answer
    const isSelected = letter === selected

    if (!answered && !revealed) {
      // not yet interacted — hoverable
      return 'bg-white text-black cursor-pointer hover:bg-gray-50'
    }

    if (revealed && !answered) {
      // only "show answer" was clicked, no selection
      return isCorrect
        ? 'bg-black text-white cursor-default'
        : 'bg-white text-black opacity-40 cursor-default'
    }

    // user selected something
    if (isSelected && isCorrect) {
      // correct pick → solid black fill
      return 'bg-black text-white cursor-default'
    }
    if (isSelected && !isCorrect) {
      // wrong pick → strikethrough + dim
      return 'bg-white text-black opacity-40 line-through cursor-default'
    }
    if (!isSelected && isCorrect && answered) {
      // reveal the real answer after wrong selection
      return 'bg-black text-white cursor-default'
    }
    // other options → dim
    return 'bg-white text-black opacity-30 cursor-default'
  }

  const getBadge = (letter: string) => {
    if (!answered) return null
    const isCorrect = letter === current.answer
    const isSelected = letter === selected
    if (isSelected && isCorrect) return <span className="ml-auto shrink-0 text-white text-xs font-bold">✓</span>
    if (isSelected && !isCorrect) return <span className="ml-auto shrink-0 text-black text-xs font-bold opacity-50">✗</span>
    if (!isSelected && isCorrect) return <span className="ml-auto shrink-0 text-white text-xs font-bold">✓</span>
    return null
  }

  const statusBanner = () => {
    if (!answered) return null
    const correct = selected === current.answer
    return (
      <div className={`px-8 py-3 border-b border-black text-xs uppercase tracking-widest font-bold
        ${correct ? 'bg-black text-white' : 'bg-white text-black border-t'}`}>
        {correct ? '✓ Correct' : `✗ Wrong — correct answer: ${current.answer}`}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-black font-mono flex flex-col items-center px-4 py-5">

      {/* Header */}
      <div className="w-full max-w-2xl mb-6">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
          Databricks Certified Machine Learning Associate
        </p>
        <h1 className="text-xl font-bold tracking-tight">Quiz Prep</h1>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-2xl mb-2">
        <div className="h-px bg-gray-200 w-full">
          <div
            className="h-px bg-black transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-xs text-gray-400 uppercase tracking-widest">
            {index + 1} / {total}
          </span>
          <span className="text-xs text-gray-400 uppercase tracking-widest">
            {current.section}
          </span>
        </div>
      </div>

      {/* Card */}
      <div className="w-full max-w-2xl border border-black mt-4">

        {/* Question */}
        <div className="p-8 border-b border-black">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
            Question 
          </p>
          <p className="text-base leading-relaxed font-semibold">
            {current.question}
          </p>
        </div>

        {/* Status banner */}
        {statusBanner()}

        {/* Options */}
        <div className="divide-y divide-gray-100">
          {current.options.map((opt, i) => {
            const letter = ['A', 'B', 'C', 'D'][i]
            return (
              <div
                key={i}
                onClick={() => { if (!answered) setSelected(letter) }}
                className={`flex gap-4 px-8 py-4 text-sm leading-relaxed transition-all duration-200 ${getOptionStyle(letter)}`}
              >
                <span className="font-bold shrink-0">{letter}.</span>
                <span className="flex-1">{opt.replace(/^[A-D]\.\s*/, '')}</span>
                {getBadge(letter)}
              </div>
            )
          })}
        </div>

        {/* Explanation */}
        {(revealed || answered) && (
          <div className="px-8 py-6 border-t border-black bg-white">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
              Explanation
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              {current.explanation}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex border-t border-black divide-x divide-black">
          <button
            onClick={() => navigate(Math.max(index - 1, 0))}
            disabled={index === 0}
            className="flex-1 py-4 text-xs uppercase tracking-widest
              hover:bg-gray-50 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
          >
            ← Prev
          </button>

          <button
            onClick={() => setRevealed(r => !r)}
            className="flex-1 py-4 text-xs uppercase tracking-widest font-bold
              bg-black text-white hover:opacity-80 transition-opacity"
          >
            {revealed ? 'Hide' : 'Show Answer'}
          </button>

          <button
            onClick={() => navigate(Math.min(index + 1, total - 1))}
            disabled={index === total - 1}
            className="flex-1 py-4 text-xs uppercase tracking-widest
              hover:bg-gray-50 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
          >
            Next →
          </button>
        </div>
      </div>

      <div className="mt-7 w-full max-w-2xl  flex flex-col items-center gap-2">
        <p className="text-[11px] text-gray-400 text-center leading-tight">
          This quiz is for study purposes only. Questions and explanations are AI-generated based on the official Databricks ML Associate exam guide and may not reflect the exact wording or content of the actual exam. Always refer to official Databricks documentation.
        </p>
        <a href="https://boyealhagie.com" target="_blank" rel="noreferrer"
          className="text-xs text-gray-300 uppercase tracking-widest hover:text-black transition-colors">
          by alhagie boye
        </a>
      </div>
    </div>
  )
}
