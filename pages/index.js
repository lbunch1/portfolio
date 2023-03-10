import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [theme, setTheme] = useState('dark')

  const sun = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
  </svg>)

  const moon = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
  </svg>
  )


  useEffect(() => {
    if (!localStorage.theme) {
      localStorage.setItem('theme', 'dark')
    }
    const body = document.querySelector('body')
    if (localStorage.theme === "dark") {
      body.classList.add('dark-mode')
      setTheme('dark')
    } else if (localStorage.theme === "light") {
      body.classList.remove('dark-mode')
      setTheme('light')
    }
  }, [])

  function toggleTheme() {
    (localStorage.theme === "dark") ?
      localStorage.setItem('theme', 'light') :
      localStorage.setItem('theme', 'dark')
    const body = document.querySelector('body')
    body.classList.toggle('dark-mode')
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <>
      <Head>
        <title>Logan Bunch - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <button onClick={toggleTheme} className={styles.theme}>
          {theme === 'dark' ? sun : moon}
        </button>
        <h1 className={styles.large}>Logan Bunch</h1>
        <h2>Front-end Web Developer</h2>
        <br />
        <div className={styles.snippet}>
          Logan is a front-end web developer with an itch to learn. He has chosen to work primarily with Nextjs due to its ability impliment strong back-end features without the need for independently hosted back-end systems. He is capable of applying styles via Tailwindcss or plain css.<br /><br />Logan is also an avid user of free and open source software. As his skills develop, he looks forward to contributing to many projects in the future.</div>
        <a href="https://smhsclassof1970.com/" target="_blank" rel="noreferrer" className={styles.card}>
          <h2>
            San Marino High School Class of 1970
          </h2>
          <p>
            High school class reunion website intended to deliver information on past and future events.
          </p>
          <h4>Technologies used:</h4>
          <ul>
            <li>Nuxt3(Vue3)</li>
            <li>Tailwindcss</li>
            <li>Supabase(for authentication)</li>
          </ul>
        </a>
        <a href="https://github.com/lbunch1/qa-dashboard" target="_blank" rel="noreferrer" className={styles.card}>
          <h2>Quality Assurance Data Tracker</h2>
          <p>A portal designed for daily data input, documentation output, data analysis, and a wiki containing informative articles pertaining to the quality assurance department.</p>
          <h4>Technologies used:</h4>
          <ul>
            <li>Nextjs</li>
            <li>Tailwindcss</li>
            <li>MongoDB (MongoDB Atlas)</li>
          </ul>
          <p className={styles.inform}>*Link directs to source code as the tool is linked to a database containing proprietary information*</p>
        </a>
        <a href="https://anothermcguffin.com" target="_blank" rel="noreferrer" className={styles.card}>
          <h2>Another Mcguffin - Band Website</h2>
          <p>A single page website to showcase a small band and link to their socials.</p>
          <h4>Technologies used:</h4>
          <ul>
            <li>Nextjs</li>
            <li>Tailwindcss</li>
          </ul>
        </a>
        <a href="https://lbunch1.github.io/final-project/" target="_blank" rel="noreferrer" className={styles.card}>
          <h2>Analogue Insights - Art Gallery</h2>
          <p>A faux art gallery website featuring entirely A.I. generated art, artists and text content. Submitted as a final project for university web developement course.</p>
          <h4>Technologies used:</h4>
          <ul>
            <li>HTML/CSS</li>
            <li>Vanilla Javascript</li>
          </ul>
        </a>
      </main>
      <footer className={styles.footer}>
        &copy;Copyright Logan Bunch {String(new Date().getFullYear())}
      </footer>
    </>
  )
}
