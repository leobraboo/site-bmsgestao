"use client"
import { Header } from "@/components/Header"
import { Initial } from "@/components/Initial"
import { PreFooter } from "@/components/PreFooter"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header>
      <Initial />
      </Header>
      <PreFooter />
      <Footer />
    </>
  )
}
