import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import ProfileLanding from '../../components/ProfileComponent/ProfileLanding'
import Header from '../../components/Bar/Header'
import Footer from '../../components/Bar/Footer'

const Profile = () => {
  return (
    <DefaultLayout>
      <Header/>
      <ProfileLanding/>
      <Footer/>
    </DefaultLayout>
  )
}

export default Profile
