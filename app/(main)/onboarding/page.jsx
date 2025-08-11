import React from 'react'
import  OnboardingForm from './_components/onboarding-form'
import { industries } from '../../data/industries'
import { getUserOnboardingStatus } from '../../../actions/user';
import { redirect } from 'next/navigation';

const OnboardingPage =  async () => {
    // revisa si el usuario esta autenticado en onboarding
    const { isOnboarded } = await getUserOnboardingStatus();

    //  si esta autenticado lo redirecciona hacia dashboard
    if (isOnboarded) {
        redirect("/dashboard")
    }
  return (
    <div>
        < OnboardingForm industries={industries}  />
    </div>
  )
}

export default OnboardingPage