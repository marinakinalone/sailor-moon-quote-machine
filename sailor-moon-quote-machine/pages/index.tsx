import type { NextPage } from 'next'
import Head from 'next/head'
import { colors } from '../data/colors';
import { quotes } from '../data/smquotes';
import Image from 'next/image'
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [quoteNb, setQuoteNb] = useState(0)
  const [colorNb, setColorNb] = useState(0)
  const [loading, setLoading] = useState(true)

  const randomize = (length: number) => {
    let random = Math.floor(Math.random() * length);
    return random
  } //TODO move it to another file :)

  useEffect(() => {
    const getQuoteAndColor = () => {
      setQuoteNb(randomize(quotes.length));
      setColorNb(randomize(colors.length))
      setTimeout(() => {
        setLoading(false)
      }, 500)
     }
     getQuoteAndColor();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])
  const handleClick = () => true;
  return (
    <div className={styles.container}>
      <Head>
        <title>Sailor Moon Quote Machine</title>
        <meta name="description" content="a machine that generates random sailor moon quotes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {loading? (<></>):(
        <>
        {/* <section className="container" id="img-box">
          <img src={arrayOfImg[this.state.quoteNb]} alt="sailor moon illustration" />
        </section> */}
        <section className="container" id="quote-box" style={{backgroundColor: colors[colorNb]}}>
          <p id="text">{quotes[quoteNb].text}</p>
          <p id="author">- {quotes[quoteNb].author}</p>
          {/* <button onClick={handleClick()} id="new-quote">new quote</button> */}
        </section>
        </>
        )}
    
      </main>

      <footer className={styles.footer}>
        <p>illustrations from <a href="https://sailormoonscreencaps.tumblr.com" target="_blank">sailor moon screencaps</a></p>
        <p>sailor moon quote machine by <a href="https://kinalone.dev" target="_blank">mks</a></p>
      </footer>
    </div>
  )
}

export default Home
