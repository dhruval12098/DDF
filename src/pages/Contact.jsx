import React, { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"

export default function Contact() {
  const [date, setDate] = useState()

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
      <div className="px-10 w-full max-md:px-4">
        <h1 className="font-light text-4xl font-plus leading-relaxed flex flex-wrap items-baseline gap-x-3 gap-y-4 max-md:text-2xl max-md:leading-snug">

          Hi! My name is{" "}
          <input
            type="text"
            placeholder="Your Name"
            className="border-b border-zinc-400 bg-transparent text-left placeholder:text-left focus:outline-none focus:ring-0 w-[320px] pb-1 max-md:w-full"
          />{" "}
          
          and I work with{" "}
          <input
            type="text"
            placeholder="Company Name"
            className="border-b border-zinc-400 bg-transparent text-left placeholder:text-left focus:outline-none focus:ring-0 w-[320px] pb-1 max-md:w-full"
          />{" "}
          
          I’m looking for a partner to help me with{" "}
          <input
            type="text"
            placeholder="Your Goal"
            className="border-b border-zinc-400 bg-transparent text-left placeholder:text-left focus:outline-none focus:ring-0 w-[520px] pb-1 max-md:w-full"
          />{" "}
          
          With an idea of having that completed{" "}

          {/* Modern Calendar */}
          <Popover>
            <PopoverTrigger asChild>
              <button className="border-b border-zinc-400 bg-transparent text-left focus:outline-none pb-1 w-[260px] max-md:w-full">
                {date ? format(date, "PPP") : "Select Date"}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white rounded-xl shadow-xl border-none">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          {" "}I am hoping to stay around a budget range of{" "}

          {/* ShadCN Select */}
          <Select>
            <SelectTrigger className="border-b border-zinc-400 bg-transparent text-left focus:ring-0 focus:outline-none w-[220px] pb-1 max-md:w-full">
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
            placeholder="Your Email"
            className="border-b border-zinc-400 bg-transparent text-left placeholder:text-left focus:outline-none focus:ring-0 w-[360px] pb-1 max-md:w-full"
          />{" "}
          
          to start the conversation. Optionally, I’m sharing more:
        </h1>
      </div>
    </div>
  )
}
