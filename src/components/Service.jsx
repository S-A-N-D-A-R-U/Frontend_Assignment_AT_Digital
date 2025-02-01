import { Section } from 'lucide-react'
import React from 'react'
import ServiceCard from './ServiceCard'


const Service = () => {
  return (
    <section className="container mx-auto  max-w-7xl flex flex-col ">
        <ServiceCard imgURL="/image 2.webp" title="Web & Mobile App Development" description="Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online." reverse={false} />
        <ServiceCard imgURL="/image 1.webp"  title="Digital Strategy Consulting" description="Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business." reverse={true}/>
    </section>
  )
}

export default Service
