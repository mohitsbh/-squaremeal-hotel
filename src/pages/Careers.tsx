import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, Award, ArrowRight, Mail, Heart, Users, Star, Camera } from 'lucide-react'
import { SEO } from '@/components/shared/SEO'
import { fadeInUp, staggerContainer, staggerItem } from '@/animations'
import { Button } from '@/components/ui/button'

const perks = [
  { icon: Award, title: '30+ Years of Authority', desc: 'SquareMeal has been the market-leading independent restaurant commentator for more than 30 years.' },
  { icon: MapPin, title: 'Vauxhall, London', desc: 'Based in our Vauxhall office, surrounded by London\'s best restaurants, bars and event spaces.' },
  { icon: Clock, title: 'Flexible Working', desc: 'Enjoy one work-from-home day per week plus the energy of a collaborative office environment.' },
  { icon: Star, title: 'Eat & Explore', desc: 'Attend restaurants for review, discover exclusive event venues, and become a true hospitality insider.' },
  { icon: Camera, title: 'Creative Culture', desc: 'A creative, go-getting, happy environment where your ideas are heard and you can train in SEO and content creation.' },
  { icon: Heart, title: 'Career Development', desc: 'We strive to create a happy and fulfilling work environment where our employees have the opportunity to excel and succeed.' },
]

const jobs = [
  {
    title: 'Account Manager',
    type: 'Full-time, Permanent',
    location: 'Vauxhall, London',
    dept: 'Sales',
    description: 'Manage a portfolio of 200+ hospitality clients, building lasting relationships and driving account growth through upsells and cross-sells. Help clients achieve maximum ROI from their partnership with SquareMeal.',
    email: 'salesjobs@squaremeal.co.uk',
    note: 'Apply with CV',
  },
  {
    title: 'Key Account Manager',
    type: 'Full-time, Permanent',
    location: 'Vauxhall, London',
    dept: 'Sales',
    description: 'Sell digital advertising packages to the hospitality industry, targeting both new business and existing accounts. Minimum 3 years sales experience preferred. Knowledge of the restaurant and events industry is desirable but not essential.',
    email: 'salesjobs@squaremeal.co.uk',
    note: 'Apply with CV + covering letter',
  },
  {
    title: 'Business Development Executive',
    type: 'Full-time, Permanent',
    location: 'Vauxhall, London',
    dept: 'Sales',
    description: 'Create and close new opportunities using a consultative approach. Identify and qualify leads to grow SquareMeal\'s reach across restaurants, bars and event venues across the UK.',
    email: 'salesjobs@squaremeal.co.uk',
    note: 'Apply with CV',
  },
  {
    title: 'Restaurant Journalism Placement',
    type: 'Placement (4 weeks)',
    location: 'Vauxhall, London',
    dept: 'Editorial',
    description: 'Work experience for students or graduates interested in online journalism, restaurants, events and food. Join our editorial team, attend restaurants for review, write SEO-friendly content and create social video content. 4 days in office, 1 WFH day. Unpaid with one-off expenses payment.',
    email: 'editorial@squaremeal.co.uk',
    note: 'Apply to editorial',
  },
]

export default function Careers() {
  return (
    <>
      <SEO title="Careers at SquareMeal" description="Join the SquareMeal team. We're hiring Account Managers, Business Development Executives and offering journalism placements in London. Apply today." />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
        {/* Hero Banner */}
        <div
          className="relative h-[50vh] min-h-[400px] bg-rich-black flex items-center justify-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="text-center px-5">
            <h1 className="font-display text-5xl md:text-7xl text-white mb-4">Join the Team</h1>
            <p className="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              For more than 30 years, SquareMeal has been the market-leading independent restaurant commentator. We're always on the lookout for talented, bright people who share our enthusiasm for excellence in this fun and lively industry.
            </p>
          </motion.div>
        </div>

        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-20">
          {/* About SquareMeal */}
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
            <h2 className="font-display text-3xl md:text-4xl text-rich-black mb-6">About SquareMeal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                  SquareMeal is the UK's premier restaurant and venue guide. We review thousands of UK restaurants and bars through our team of independent critics and customer comments, and we curate the best event venues for private dining, conferences and weddings.
                </p>
                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                  We're a creative, go-getting, happy environment that strives to create a fulfilling workplace where our employees have the opportunity to excel and succeed.
                </p>
              </div>
              <div className="bg-soft-white border border-charcoal/5 p-8">
                <h3 className="font-display text-xl text-rich-black mb-3">Our Values</h3>
                <ul className="space-y-3">
                  {['Excellence in hospitality commentary', 'Independent and trusted reviews', 'Creativity and go-getting attitude', 'Supporting employee growth and success', 'Passion for restaurants, food and events'].map((v) => (
                    <li key={v} className="flex items-start gap-3 font-body text-sm text-on-surface-variant">
                      <ArrowRight className="w-4 h-4 text-champagne-gold mt-0.5 shrink-0" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Perks Grid */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
            <h2 className="font-display text-3xl text-rich-black mb-10">Culture &amp; Perks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map(p => (
                <motion.div key={p.title} variants={staggerItem} className="p-6 bg-soft-white border border-charcoal/5 hover:border-champagne-gold/20 transition-colors">
                  <p.icon className="w-8 h-8 text-champagne-gold mb-4" />
                  <h3 className="font-display text-lg text-rich-black mb-2">{p.title}</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Open Positions */}
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-display text-3xl text-rich-black mb-6">Open Positions</h2>
            <p className="font-body text-base text-on-surface-variant mb-10 max-w-2xl">
              We're always on the lookout for talented, bright people who share our enthusiasm for excellence in this fun and lively industry.
            </p>
            <div className="space-y-6">
              {jobs.map((job, i) => (
                <motion.div key={job.title} variants={staggerItem} className="group bg-soft-white border border-charcoal/5 p-6 md:p-8 hover:border-champagne-gold/20 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-display text-xl text-rich-black group-hover:text-champagne-gold transition-colors">{job.title}</h3>
                        <span className="text-xs font-body text-champagne-gold bg-champagne-gold/10 px-2 py-0.5">{job.dept}</span>
                      </div>
                      <p className="font-body text-sm text-on-surface-variant mb-3 leading-relaxed">{job.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-on-surface-variant mb-3">
                        <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{job.type}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-champagne-gold">
                        <Mail className="w-3.5 h-3.5" />
                        <span className="font-body text-xs">{job.email} — {job.note}</span>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <a href={`mailto:${job.email}`}>
                        <Button variant="outline" size="sm" className="whitespace-nowrap">Apply Now</Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Speculative Applications */}
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 p-10 md:p-14 bg-rich-black text-center">
            <h2 className="font-display text-3xl text-white mb-4">Don't See a Role That Fits?</h2>
            <p className="font-body text-base text-white/70 mb-8 max-w-xl mx-auto">
              We're always keen to hear from talented people. Send your CV to our recruitment team and we'll be in touch if a suitable opportunity arises.
            </p>
            <a href="mailto:salesjobs@squaremeal.co.uk">
              <Button className="bg-champagne-gold text-rich-black hover:bg-champagne-gold/90 px-8 py-6 text-base">
                Send Your CV
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <div className="flex items-center justify-center gap-2 mt-6 text-champagne-gold/80">
              <Mail className="w-4 h-4" />
              <span className="font-body text-sm">salesjobs@squaremeal.co.uk</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
