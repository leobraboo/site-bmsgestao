"use client"
import { Header } from "@/components/Header"
import { Initial } from "@/components/Initial"
import { Description } from "@/components/Description"
import { Excel } from "@/components/Excel"
import { Sectors } from "@/components/Sectors"
import { Plans } from "@/components/Plans"
import { Specialist } from "@/components/Specialist"
import { PreFooter } from "@/components/PreFooter"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header>
        <Initial />
      </Header>
      <Description />
      <Excel />
      <Sectors />
      <Plans />
      <Specialist />
      <PreFooter />
      <Footer />
    </>
  )
}
