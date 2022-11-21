import React from 'react'

import PageLayout from '../layout/pageLayout'
import ProfileContainer from '../container/profile'
import Layout from '../layout/layout'

const Profile = () => {
  return (
    <PageLayout>
        <Layout>
            <ProfileContainer />
        </Layout>
    </PageLayout>
  )
}

export default Profile