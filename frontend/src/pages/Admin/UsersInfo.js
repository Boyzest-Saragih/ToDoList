import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import Users from '../../components/Admin/Users'
import Header from '../../components/Bar/Header'
import Footer from '../../components/Bar/Footer'

const UsersInfo = () => {
  return (
    <DefaultLayout>
        <Header/>
        <Users/>
        <Footer/>
    </DefaultLayout>
  )
}

export default UsersInfo
