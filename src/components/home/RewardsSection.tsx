import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/animations';
import { Link } from 'react-router-dom';
import { Gift, ArrowRight } from 'lucide-react';

const rewards = [
  {
    name: 'The Grafton',
    location: 'Kentish Town, London NW5 3LG',
    points: 100,
    offer: 'For all diners any day, every time',
    cuisine: ['British', 'Burgers', 'Gastropub'],
    price: '£30-£49',
  },
  {
    name: 'Michael Caines at The Stafford London',
    location: "St James's, London SW1A 1NJ",
    points: 100,
    offer: 'For all diners any day, every time',
    cuisine: ['Modern European', 'Afternoon tea'],
    price: 'Over £80',
  },
  {
    name: 'Hawksmoor Manchester',
    location: 'Greater Manchester M3 3WB',
    points: 100,
    offer: 'For all diners any day, every time',
    cuisine: ['British', 'Steak'],
    price: '£50-£79',
  },
  {
    name: 'Drummond Villa',
    location: 'Camden Town, London NW1 2HN',
    points: 15,
    pointsLabel: 'for every £1 spent',
    offer: 'for lunchtime diners',
    cuisine: ['Indian'],
    price: 'Under £30',
  },
];

export default function RewardsSection() {
  return (
    <section className="bg-rich-black px-5 py-20 md:px-20">
      <motion.div
        className="mx-auto max-w-[1440px]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="mb-12 text-center" variants={staggerItem}>
          <div className="mb-4 flex items-center justify-center gap-2">
            <Gift className="text-champagne-gold h-6 w-6" />
            <h2 className="text-soft-white text-3xl font-bold md:text-4xl">
              SquareMeal Restaurant Rewards
            </h2>
          </div>
          <p className="text-soft-white/70 mx-auto mt-3 max-w-2xl text-lg">
            A generous restaurant loyalty program with exclusive offers that
            rewards you every time you dine out.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {rewards.map((restaurant) => (
            <motion.div
              key={restaurant.name}
              variants={staggerItem}
              className="border-soft-white/10 bg-soft-white/5 flex flex-col gap-4 rounded-xl border p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-soft-white text-xl font-semibold">
                    {restaurant.name}
                  </h3>
                  <p className="text-soft-white/60 mt-1 text-sm">
                    {restaurant.location}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1 rounded-lg bg-gradient-to-br from-yellow-600/20 to-yellow-700/10 px-3 py-1.5">
                  <span className="text-champagne-gold text-lg font-bold">
                    {restaurant.points}
                  </span>
                  <div className="flex flex-col text-xs leading-tight">
                    <span className="text-champagne-gold/80 font-semibold">
                      Points
                    </span>
                    {restaurant.pointsLabel && (
                      <span className="text-champagne-gold/60">
                        {restaurant.pointsLabel}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-soft-white/80 text-sm">{restaurant.offer}</p>

              <div className="mt-auto flex flex-wrap items-center gap-2">
                {restaurant.cuisine.map((tag) => (
                  <span
                    key={tag}
                    className="text-soft-white/70 border-soft-white/10 rounded-full border px-3 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
                <span className="text-champagne-gold/70 ml-auto text-sm font-medium">
                  {restaurant.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12 text-center" variants={staggerItem}>
          <Link
            to="/membership"
            className="text-champagne-gold hover:text-champagne-gold/80 inline-flex items-center gap-2 text-lg font-semibold transition-colors"
          >
            View all rewards
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
