import React from 'react'
import HeroHeader from './Components/Header'
import WhyDSASection from './Components/WhyDSA'
import ProgramHighlights from './Components/ProgramHighlight'
import MentorInfo from './Components/MentorInfor'
import SuccessStories from './Components/Achievement'
import CohortPlans from './Components/CohortPlan'
import TrainingMethodology from './Components/TrainingMethology'
import ProgramPricing from './Components/ProgramPricing'
import ReferralSupport from './Components/Referral'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <HeroHeader />
      <WhyDSASection/>
      <ProgramHighlights/>
      <MentorInfo/>
      <SuccessStories/>
      <CohortPlans/>
      <TrainingMethodology/>
      <ProgramPricing/>
      <ReferralSupport/>
      <Footer/>
    </div>
  )
}

export default App
