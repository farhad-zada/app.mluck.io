"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header({ title }: { title: string }) {
  const [wallet, setWallet] = useState<boolean>(false);

  function connectWallet() {
    setWallet(true);
  }

  return (
    <header className="bg-green-700 px-8 py-5 md:px-28 md:py-12 bg-[url('/assets/hero.webp')] bg-center bg-cover relative before:absolute before:inset-0 before:bg-black/40 before:content-['']">
      <div className="wrapper container mx-auto relative z-10">
        <nav className="flex flex-col lg:flex-row gap-3 lg:items-center lg:mb-8">
          <div className="flex items-center justify-between mb-8 lg:mb-0 md:mb-8 grow">
            <Link
              href="/"
              className="size-5 bg-red shrink-0 w-10 md:w-16 inline-block h-fit"
            >
              <img className="w-20" src="/assets/logo.svg" alt="Mluck Logo" />
            </Link>
            <div>
              {wallet ? (
                <Link
                  className="bg-gradient-green flex w-fit items-center py-2 px-3 md:py-2 md:px-4 text-white font-semibold text-sm md:text-base rounded-2xl md:rounded-3xl"
                  href="/account"
                >
                  <img
                    src="/assets/icon-digital-wallet.svg"
                    alt="Digital Wallet"
                    className="h-4 md:h-auto"
                  />
                  <span className="ml-2">Account</span>
                </Link>
              ) : (
                <button
                  onClick={connectWallet}
                  id="connectWallet"
                  className="bg-gradient-green flex w-fit items-center py-2 px-3 md:py-2 md:px-4 text-white font-semibold text-sm md:text-base rounded-2xl md:rounded-3xl"
                >
                  <img
                    src="/assets/icon-digital-wallet.svg"
                    alt="Digital Wallet"
                    className="h-4 md:h-auto"
                  />
                  <span className="ml-2">Connect Wallet</span>
                </button>
              )}
            </div>
          </div>
          {wallet && (
            <div
              className="items-center flex justify-between lg:justify-start gap-3 mb-6 lg:mb-0 grow-0"
              id="wallet"
            >
              <div className="p-3 text-white border rounded-2xl md:rounded-3xl py-2 px-3 md:py-2 md:px-4 inline-block text-sm text-center w-40">
                0x8sw123fsaasx13
              </div>
              <Link
                href="/dashboard"
                className="p-3 text-white border rounded-2xl md:rounded-3xl py-2 px-6 md:py-[6px] md:px-6 inline-block font-bold text-center w-40 text-sm md:text-base"
              >
                Dashboard
              </Link>
            </div>
          )}
        </nav>
        <h1 className="text-center font-bold text-4xl text-white">{title}</h1>
      </div>
    </header>
  );
}
