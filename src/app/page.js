"use client"
import { Header } from "@/components/Header"
import { Initial } from "@/components/Initial"
import { Description } from "@/components/Description"
import { Stars } from "@/components/Stars"
import { Plans } from "@/components/Plans"
import { Questions } from "@/components/Questions"
import { PreFooter } from "@/components/PreFooter"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header>
        <Initial />
      </Header>
      <Description />
      <Stars />
      <Plans />
      <Questions />
      <PreFooter />
      <Footer />
    </>
  )
}
