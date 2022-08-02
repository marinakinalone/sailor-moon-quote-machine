import type { NextPage } from 'next'
import Head from 'next/head'
import { colors } from '../data/colors';
import { quotes } from '../data/smquotes';
import Image from 'next/image'
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.scss'
import cx from 'classnames';

const Home: NextPage = () => {
  const [quoteNb, setQuoteNb] = useState(0)
  const [colorNb, setColorNb] = useState(0)
  const [loading, setLoading] = useState(true)

  const randomize = (length: number) => {
    let random = Math.floor(Math.random() * length);
    return random
  }

  useEffect(() => {
    const getQuoteAndColor = () => {
      setQuoteNb(randomize(quotes.length));
      setColorNb(randomize(colors.length));
      setTimeout(() => {
        setLoading(false)
      }, 1000)
     }
     getQuoteAndColor();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])
  const handleClick = () => {
    setLoading(true)
  };
  return (
    <>
      <Head>
        <title>Sailor Moon Quote Machine</title>
        <meta name="description" content="a machine that generates random sailor moon quotes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {loading? (
        <>
          <section className={ cx(styles.container, styles.container__img, styles.container__loader)} style={{backgroundColor: colors[randomize(colors.length)]}}><div className={styles.loader}></div></section>
          <section className={ cx(styles.container, styles.container__quote, styles.container__loader)} style={{backgroundColor: colors[randomize(colors.length)]}}><div className={styles.loader}></div></section>
        </>
        ):(
        <div className={styles.main__container}>
        <section className={ cx(styles.container, styles.container__img)}>
          <Image
            src={`/resources/screenshots/${quoteNb}.png`}
            alt="screenshot from the sailor moon anime"
            width="280px"
            height="280px"
          />
        </section>
        <section className={cx(styles.container, styles.container__quote)} style={{backgroundColor: colors[colorNb]}}>
          <p className={styles.container__text}>{quotes[quoteNb].text}</p>
          <p className={styles.container__author}>- {quotes[quoteNb].author}</p>
          <button className={styles.container__button} onClick={() => handleClick()} id="new-quote">new quote</button>
        </section>
        </div>
        )}
    
      </main>

      <footer className={styles.footer}>
        <p>illustrations from <a href="https://sailormoonscreencaps.tumblr.com" target="_blank" rel="noreferrer">sailor moon screencaps</a></p>
        <p>sailor moon quote machine by <a href="https://kinalone.dev" target="_blank" rel="noreferrer">mks</a></p>
      </footer>
    </>
  )
}

export default Home
