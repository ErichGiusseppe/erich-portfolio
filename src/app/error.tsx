'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h2 className="font-headline text-3xl italic text-on-surface mb-4">
          Something went wrong
        </h2>
        <p className="font-body text-on-surface-variant mb-8">
          An unexpected error occurred. Try refreshing the page.
        </p>
        <button
          onClick={reset}
          className="gradient-cta text-on-primary font-label font-semibold px-6 py-3 rounded-xl"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
