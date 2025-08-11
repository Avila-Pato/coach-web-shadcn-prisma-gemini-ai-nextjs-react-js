import { getUserOnboardingStatus } from '@/actions/user';
import { redirect } from 'next/navigation';
import React from 'react'

const IndustryInsighhtsPage = async () => {

const { isOnboarded } = await getUserOnboardingStatus();

    //  si esta autenticado lo redirecciona hacia onboarding
    if (isOnboarded) {
        redirect("/onboarding")
    }


  return (
    <div>DashboadPage</div>
  )
}

export default IndustryInsighhtsPage