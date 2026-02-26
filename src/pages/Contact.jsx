import React, { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"

export default function Contact() {
  const [date, setDate] = useState()
  const [budget, setBudget] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full min-h-screen pt-20 max-md:pt-16">
      
      {/* Heading */}
      <div className="px-10 font-grotesk pb-10 max-md:px-4">
        <h1 className="leading-none -mb-3 text-9xl uppercase max-md:text-5xl max-md:mb-0">Let's Grow</h1>
        <h1 className="leading-none -mb-3 text-9xl uppercase max-md:text-5xl max-md:mb-0">Together</h1>
      </div>

      <div className="px-10 pb-30 max-md:px-4">
        <p>Fill The Form Below</p>
      </div>

      {/* Form Text Layout */}
      <form
        className="px-10 w-full max-md:px-4"
        action="https://formsubmit.co/dynamicdigitalforge@gmail.com"
        method="POST"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="/contact?success=1" />
        <input type="hidden" name="_subject" value="New DDF Contact Form Submission" />
        <input
          type="hidden"
          name="Desired Date"
          value={date ? format(date, "PPP") : ""}
        />
        <input type="hidden" name="Budget" value={budget} />
        <h1 className="font-light text-4xl font-plus leading-relaxed flex flex-wrap items-baseline gap-x-3 gap-y-4 max-md:text-2xl max-md:leading-snug">

          Hi! My name is{" "}
          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            className="border-b border-zinc-400 bg-transparent text-left placeholder:text-left focus:outline-none focus:ring-0 w-[320px] pb-1 text-base max-md:w-full max-md:text-lg"
          />{" "}
          
          and I work with{" "}
          <input
            type="text"
            name="Company"
            placeholder="Company Name"
            className="border-b border-zinc-400 bg-transparent text-left placeholder:text-left focus:outline-none focus:ring-0 w-[320px] pb-1 text-base max-md:w-full max-md:text-lg"
          />{" "}
          
          I'm looking for a partner to help me with{" "}
          <input
            type="text"
            name="Goal"
            placeholder="Your Goal"
            className="border-b border-zinc-400 bg-transparent text-left placeholder:text-left focus:outline-none focus:ring-0 w-[520px] pb-1 text-base max-md:w-full max-md:text-lg"
          />{" "}
          
          With an idea of having that completed{" "}

          {/* Modern Calendar */}
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <button className="border-b border-zinc-400 bg-transparent text-left focus:outline-none pb-1 w-[260px] text-base max-md:w-full max-md:text-lg">
                {date ? format(date, "PPP") : "Select Date"}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-2 bg-white rounded-xl shadow-xl border-none">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(selected) => {
                  setDate(selected)
                  setIsOpen(false)
                }}
                className="text-lg"
                initialFocus
              />
            </PopoverContent>
          </Popover>

          {" "}I am hoping to stay around a budget range of{" "}

          {/* ShadCN Select */}
          <Select onValueChange={setBudget}>
          <SelectTrigger className="border-b border-zinc-400 bg-transparent text-left focus:ring-0 focus:outline-none w-[220px] pb-1 text-base max-md:w-full max-md:text-lg">
            <SelectValue placeholder="Select Budget" />
          </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="5k">₹5k - ₹10k</SelectItem>
              <SelectItem value="10k">₹10k - ₹25k</SelectItem>
              <SelectItem value="25k">₹25k - ₹50k</SelectItem>
              <SelectItem value="50k">₹50k+</SelectItem>
            </SelectContent>
          </Select>

          {" "}You can reach me at{" "}
          
          <input
            type="email"
            name="Email"
            placeholder="Your Email"
            className="border-b border-zinc-400 bg-transparent text-left placeholder:text-left focus:outline-none focus:ring-0 w-[360px] pb-1 text-base max-md:w-full max-md:text-lg"
          />{" "}
          
          to start the conversation. Optionally, I'm sharing more:
        </h1>
        <div className="mt-8">
          <button
            type="submit"
            className="border border-zinc-600 px-6 py-2 rounded-full"
          >
            Submit
          </button>
        </div>
        {typeof window !== "undefined" && new URLSearchParams(window.location.search).get("success") === "1" && (
          <p className="mt-4 text-green-600">Message sent successfully.</p>
        )}
      </form>
    </div>
  )
}
