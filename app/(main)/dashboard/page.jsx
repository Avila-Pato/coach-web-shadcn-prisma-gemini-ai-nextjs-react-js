import { getUserOnboardingStatus } from './../../../actions/user';
import DashboardView from "./_components/dashboard-view"

import { redirect } from 'next/navigation';
import React from 'react'

const IndustryInsighhtsPage = async () => {

const { isOnboarded } = await getUserOnboardingStatus();

    //  si esta autenticado lo redirecciona hacia onboarding
    if (isOnboarded) {
        redirect("/onboarding")
    }

    const insights = await getIndustryInsights();
  return (
    <div>
      <DashboardView  insights={insights}/>
    </div>
  )
}

export default IndustryInsighhtsPage