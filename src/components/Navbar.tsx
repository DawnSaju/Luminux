"use client"

import Link from "next/link"
import { Button } from '@/components/ui/button'
import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet'
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Navbar() {
    const { data: session } = useSession();

    return (
        <div className="flex items-center justify-between px-6 py-4 bg-transparent">
          <div className="container flex items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2" prefetch={false}>
            <span className="sr-only">Luminux</span>
            <Health className="h-6 w-6" />
            <span className="font-bold tracking-tight">Luminux</span>
          </Link>
           <nav className="hidden space-x-4 text-sm font-medium lg:flex">
            <Link
              href="#home"
              className="text-gray-900 hover:text-gray-900/90 dark:text-gray-50 dark:hover:text-gray-50/90"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-gray-900 hover:text-gray-900/90 dark:text-gray-50 dark:hover:text-gray-50/90"
              prefetch={false}
            >
              Features
            </Link>
            <Link
              href="#process"
              className="text-gray-900 hover:text-gray-900/90 dark:text-gray-50 dark:hover:text-gray-50/90"
              prefetch={false}
            >
              Process
            </Link>
            <Link
              href="#team"
              className="text-gray-900 hover:text-gray-900/90 dark:text-gray-50 dark:hover:text-gray-50/90"
              prefetch={false}
            >
              Team
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            { session ? (
              <Button
                onClick={() => signOut({ callbackUrl: '/', redirect:true })}
                className="text-sm font-medium text-gray-500  dark:text-gray-400 dark:hover:bg-gray-500/40 dark:hover:text-white bg-transparent"
                prefetch={false}
              >
                Sign out
              </Button>
            ) : (
              <Button
                onClick={() => signIn('luminux', { callbackUrl: '/chat' })} 
                className="text-sm font-medium text-gray-500  dark:text-gray-400 dark:hover:bg-gray-500/40 dark:hover:text-white bg-transparent"
                prefetch={false}
              >
                Sign in
              </Button>
            )}
            { session ? (
              <Link
                href={"/chat"}
                className="inline-block text-sm font-medium rounded-md border border-transparent shadow-sm h-8 px-3 flex items-center justify-center bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Chat
              </Link>
            ) : (
              <Link
              href="#"
              className="inline-block text-sm font-medium rounded-md border border-transparent shadow-sm h-8 px-3 flex items-center justify-center bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Get Started
            </Link>
            )}
          </div>
          </div>
        </div>
    )
}
function Health(props) {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#fff"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M96 352L96 96c0-35.3 28.7-64 64-64l256 0c35.3 0 64 28.7 64 64l0 197.5c0 17-6.7 33.3-18.7 45.3l-58.5 58.5c-12 12-28.3 18.7-45.3 18.7L160 416c-35.3 0-64-28.7-64-64zM272 128c-8.8 0-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16l-32 0zm24 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-160 0C60.9 512 0 451.1 0 376L0 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 224c0 48.6 39.4 88 88 88l160 0z"/>
      </svg>
    )
  }