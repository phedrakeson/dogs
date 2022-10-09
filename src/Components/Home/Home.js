import React from 'react'
import { Feed } from '../../Shared/Feed/Feed'
import { Head } from '../../Shared/Helpers/Head/Head'
import styles from './Home.module.css'

const Home = () => {
  return (
    <section className='container mainContainer'>
      <Head title="Photos" description="Home page that shows a feed of photos" />
      <Feed />
    </section>
  )
}

export default Home