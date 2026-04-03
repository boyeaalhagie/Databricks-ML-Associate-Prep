// THIS IS THE MAIN REACT COMPONENT FOR THE QUIZ APP. 

//It manages state for the current question index, whether the answer is revealed, and which option is selected. It also handles shuffling questions and options, and rendering the UI.


import { useState, useCallback, useMemo } from 'react'
import { questions } from './data/databricks-ml-associate'

// This function shuffles options and remap the correct answer letter to the new position. this ensures the correct answer is always in a different position each time the app loads, preventing memorization of option order and encouraging true understanding of the material. The shuffling is done once per question and stored in state to maintain consistency as the user navigates through the quiz.
function shuffleOptions(options: string[], correctLetter: string) {
  const letters = ['A', 'B', 'C', 'D']
  const correctIndex = letters.indexOf(correctLetter)
  const correctText = options[correctIndex]

  // pair each option with its text, shuffle, reassign letters
  const pairs = options.map((text, i) => ({ letter: letters[i], text }))
  for (let i = pairs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pairs[i], pairs[j]] = [pairs[j], pairs[i]]
  }

  const newOptions = pairs.map((p, i) => ({ letter: letters[i], text: p.text }))
  const newCorrect = newOptions.find(o => o.text === correctText)!.letter
  return { newOptions, newCorrect }
}

export default function App() {
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)

  // Shuffle question order once
  const [shuffled] = useState(() => [...questions].sort(() => Math.random() - 0.5))

  // Shuffle each question's options once, keyed by question id
  const shuffledOptions = useMemo(() =>
    Object.fromEntries(
      shuffled.map(q => [q.id, shuffleOptions(q.options, q.answer)])
    ), [shuffled])

  const current = shuffled[index]
  const { newOptions, newCorrect } = shuffledOptions[current.id]
  const total = shuffled.length
  const answered = selected !== null

  const navigate = useCallback((next: number) => {
    setRevealed(false)
    setSelected(null)
    setIndex(next)
  }, [])

  const progress = ((index + 1) / total) * 100

  const getOptionStyle = (letter: string) => {
    const isCorrect = letter === newCorrect
    const isSelected = letter === selected

    if (!answered && !revealed) return 'bg-white text-black cursor-pointer hover:bg-gray-50'

    if (revealed && !answered) {
      return isCorrect
        ? 'bg-black text-white cursor-default'
        : 'bg-white text-black opacity-40 cursor-default'
    }

    if (isSelected && isCorrect)  return 'bg-black text-white cursor-default'
    if (isSelected && !isCorrect) return 'bg-white text-black opacity-40 line-through cursor-default'
    if (!isSelected && isCorrect) return 'bg-black text-white cursor-default'
    return 'bg-white text-black opacity-30 cursor-default'
  }

  const getBadge = (letter: string) => {
    if (!answered) return null
    const isCorrect = letter === newCorrect
    const isSelected = letter === selected

    // Show ✓ for correct selections, ✗ for incorrect selections, and also show ✓ for 
    // the correct answer if it wasn't selected. This provides clear feedback on what 
    // the right answer was and whether the user's choice was correct or not.
    if (isSelected && isCorrect)  return <span className="ml-auto shrink-0 text-white text-xs font-bold">✓</span>
    if (isSelected && !isCorrect) return <span className="ml-auto shrink-0 text-black text-xs font-bold opacity-50">✗</span>
    if (!isSelected && isCorrect) return <span className="ml-auto shrink-0 text-white text-xs font-bold">✓</span>
    return null
  }

  return (
    <div className="min-h-screen bg-white text-black font-mono flex flex-col items-center px-4 py-5">

      {/* Header */}
      <div className="w-full max-w-2xl mb-6">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
          <span className="sm:hidden">Databricks Certified ML Associate</span>
          <span className="hidden sm:inline">Databricks Certified Machine Learning Associate</span>
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
          <span className="text-xs text-gray-400 uppercase tracking-widest">{index + 1} / {total}</span>
          <span className="text-xs text-gray-400 uppercase tracking-widest">{current.section}</span>
        </div>
      </div>

      {/* Card */}
      <div className="w-full max-w-2xl border border-black mt-4">

        {/* Question */}
        <div className="p-8 border-b border-black">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Question</p>
          <p className="text-base leading-relaxed font-semibold">{current.question}</p>
        </div>

        {/* Options */}
        <div className="divide-y divide-gray-100">
          {newOptions.map(({ letter, text }) => (
            <div
              key={letter}
              onClick={() => { if (!answered) setSelected(letter) }}
              className={`flex gap-4 px-8 py-4 text-sm leading-relaxed transition-all duration-200 ${getOptionStyle(letter)}`}
            >
              <span className="font-bold shrink-0">{letter}.</span>
              <span className="flex-1">{text.replace(/^[A-D]\.\s*/, '')}</span>
              {getBadge(letter)}
            </div>
          ))}
        </div>

        {/* Explanation */}
        {(revealed || answered) && (
          <div className="px-8 py-6 border-t border-black bg-white">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Explanation</p>
            <p className="text-sm leading-relaxed text-gray-700">{current.explanation}</p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex border-t border-black divide-x divide-black">
          <button
            onClick={() => navigate(Math.max(index - 1, 0))}
            disabled={index === 0}
            className="flex-1 py-4 text-xs uppercase tracking-widest hover:bg-gray-50 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
          >
            ← Prev
          </button>
          <button
            onClick={() => setRevealed(r => !r)}
            className="flex-1 py-4 text-xs uppercase tracking-widest font-bold bg-black text-white hover:opacity-80 transition-opacity"
          >
            {revealed ? 'Hide' : 'Show Answer'}
          </button>
          <button
            onClick={() => navigate(Math.min(index + 1, total - 1))}
            disabled={index === total - 1}
            className="flex-1 py-4 text-xs uppercase tracking-widest hover:bg-gray-50 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
          >
            Next →
          </button>
        </div>
      </div>

      <div className="mt-auto pt-10 w-full max-w-2xl flex flex-col items-center gap-2">
        {/* Disclaimer */}
        <p className="hidden sm:block text-[11px] text-gray-400 text-center leading-tight">
          This quiz is for study purposes only. Questions and explanations are AI-generated based on the official Databricks ML Associate exam guide and may not reflect the exact wording or content of the actual exam.
        </p>
        
        <div className="flex flex-row justify-center w-full items-center gap-12">
          {/* OFFICIAL DATABRICKS CERTIFIED MACHINE LEARNING ASSOCIATE EXAM GUIDE */}
          <a
            href="https://www.databricks.com/sites/default/files/2025-02/databricks-certified-machine-learning-associate-exam-guide-1-mar-2025.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
          >
            Exam Guide ↗
          </a>

          {/* CREATED BY */}
          <a href="https://boyealhagie.com" target="_blank" rel="noreferrer"
            className="text-[11px] text-gray-300 uppercase tracking-widest hover:text-black transition-colors">
            by alhagie boye
          </a>

          {/* AFTER TAKING THE EXAM I CAME ACROSS THIS RESOURCE. */}
          <a
            href="https://www.certsafari.com/databricks/ml-engineer-associate"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
          >
            CertSafari ↗
          </a>
        </div>
      </div>
    </div>
  )
}
