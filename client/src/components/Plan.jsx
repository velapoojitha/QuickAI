import React from 'react'
import { PricingTable } from '@clerk/clerk-react'

const Plan = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 z-20 my-20">
      <div className="text-center mb-12">
        <h2 className="text-slate-700 text-4xl font-semibold">
          Choose Your Plan
        </h2>
        <p className="text-gray-500 max-w-md mx-auto mt-2">
          Start for free and scale up as you grow. Find the perfect plan for your content creation needs.
        </p>
      </div>

      {/* Limit the width of PricingTable */}
      <div className="mx-auto max-w-3xl">
        <PricingTable />
      </div>
    </div>
  )
}

export default Plan
