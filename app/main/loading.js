import SkeletonCard from '@/components/SkeletonCard'
import React from 'react'

export default function Loading() {
  return (
    <main className='max-w-[1100px] mx-auto '>
      <div className="grid grid-cols-3 gap-8 p-2 '">
        {"abcdefghi".split("").map(i => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  );
}
