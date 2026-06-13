import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AnimatePresence } from 'framer-motion'
import { MainLayout } from '@/layouts/MainLayout'
import { ScrollToTop } from '@/components/shared/ScrollToTop'
import Home from '@/pages/Home'
import Discover from '@/pages/Discover'
import RestaurantDetail from '@/pages/RestaurantDetail'
import Marketplace from '@/pages/Marketplace'
import VenueDetail from '@/pages/VenueDetail'
import Guides from '@/pages/Guides'
import Membership from '@/pages/Membership'
import BookingConfirmation from '@/pages/BookingConfirmation'
import MichelinGuide from '@/pages/MichelinGuide'
import PrivateDining from '@/pages/PrivateDining'
import WeddingVenues from '@/pages/WeddingVenues'
import RooftopDining from '@/pages/RooftopDining'
import GiftVouchers from '@/pages/GiftVouchers'
import EditorialPolicy from '@/pages/EditorialPolicy'
import ContactUs from '@/pages/ContactUs'
import Careers from '@/pages/Careers'
import FAQs from '@/pages/FAQs'
import Accessibility from '@/pages/Accessibility'
import Privacy from '@/pages/Privacy'
import Terms from '@/pages/Terms'
import SignIn from '@/pages/SignIn'
import Rewards from '@/pages/Rewards'
import Restaurants from '@/pages/Restaurants'
import LondonRestaurants from '@/pages/LondonRestaurants'
import RestaurantsNearMe from '@/pages/RestaurantsNearMe'
import BestRestaurants from '@/pages/BestRestaurants'
import Offers from '@/pages/Offers'
import Concierge from '@/pages/Concierge'
import ChristmasParties from '@/pages/ChristmasParties'
import ThingsToDo from '@/pages/ThingsToDo'
import EventVenues from '@/pages/EventVenues'
import EventSuppliers from '@/pages/EventSuppliers'
import Help from '@/pages/Help'

const queryClient = new QueryClient()

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="discover" element={<Discover />} />
            <Route path="restaurant/:slug" element={<RestaurantDetail />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="venue/:slug" element={<VenueDetail />} />
            <Route path="guides" element={<Guides />} />
            <Route path="membership" element={<Membership />} />
            <Route path="booking/confirmation" element={<BookingConfirmation />} />
            <Route path="michelin-guide" element={<MichelinGuide />} />
            <Route path="private-dining" element={<PrivateDining />} />
            <Route path="wedding-venues" element={<WeddingVenues />} />
            <Route path="rooftop-dining" element={<RooftopDining />} />
            <Route path="gift-vouchers" element={<GiftVouchers />} />
            <Route path="editorial-policy" element={<EditorialPolicy />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="careers" element={<Careers />} />
            <Route path="faqs" element={<FAQs />} />
            <Route path="accessibility" element={<Accessibility />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="restaurants" element={<Restaurants />} />
            <Route path="restaurants/london" element={<LondonRestaurants />} />
            <Route path="restaurants-near-me" element={<RestaurantsNearMe />} />
            <Route path="restaurants/best" element={<BestRestaurants />} />
            <Route path="best-restaurants-in-london" element={<BestRestaurants />} />
            <Route path="offers" element={<Offers />} />
            <Route path="concierge" element={<Concierge />} />
            <Route path="christmas-parties" element={<ChristmasParties />} />
            <Route path="things-to-do" element={<ThingsToDo />} />
            <Route path="event-party-venues" element={<EventVenues />} />
            <Route path="event-suppliers" element={<EventSuppliers />} />
            <Route path="help" element={<Help />} />
            <Route path="rewards" element={<Rewards />} />
          </Route>
          <Route path="sign-in" element={<SignIn />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  )
}
