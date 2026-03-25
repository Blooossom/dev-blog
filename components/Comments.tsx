'use client'

import Giscus from '@giscus/react'

export default function Comments() {
  return (
    <div className="mt-16 pt-12 border-t border-outline-variant/20">
      <h2 className="font-headline font-bold text-lg text-on-surface mb-8">Comments</h2>
      <Giscus
        repo={process.env.NEXT_PUBLIC_GISCUS_REPO as `${string}/${string}`}
        repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID ?? ''}
        category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY ?? 'General'}
        categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID ?? ''}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="ko"
        loading="lazy"
      />
    </div>
  )
}
