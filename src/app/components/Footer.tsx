import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-cyan-600 body-font bg-slate-600">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-cyan-400">
     
      <span className="ml-3 text-xl">Naghmanas Blog</span>
    </a>
    <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200  text-cyan-500 sm:py-2 sm:mt-0 mt-4">
      © 2024 All right reserved 
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
     
      <Link href={"https://www.linkedin.com/in/naghmana-asif"} className="ml-3 text-cyan-500">
        <svg
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          />
          <circle cx={4} cy={4} r={2} stroke="none" />
        </svg>
      </Link>
    </span>
  </div>
</footer>

  )
}
