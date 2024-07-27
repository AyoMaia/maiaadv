'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-white"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <Transition>
        <TransitionChild
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <PopoverOverlay className="fixed inset-0 bg-slate-300/50" />
        </TransitionChild>
        <TransitionChild
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          
        >
          <PopoverPanel className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5">
            <MobileNavLink href="#about">Sobre</MobileNavLink>
            <MobileNavLink href="#services">Serviços</MobileNavLink>
            <MobileNavLink href="#faqs">Dúvidas</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <Button href="https://wa.me/554892036767" target="_blank" color="blue">
              <span className='md:text-base text-xs'>
                Entrar em Contato
              </span>
            </Button>
          </PopoverPanel>
        </TransitionChild>
      </Transition>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="py-6">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center ">
            <Link href="#" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            
          </div>
          <div className="md:visible invisible md:flex md:gap-x-6 flex items-center justify-center">
              <NavLink href="#about">Sobre</NavLink>
              <NavLink href="#services">Serviços</NavLink>
              <NavLink href="#faqs">Dúvidas</NavLink>
            </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <Button href="https://wa.me/554892036767" target="_blank" color="blue" className='md:visible invisible'>
              <span className='md:text-base text-xs'>
                Entrar em <span className="hidden lg:inline">Contato</span>
              </span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
