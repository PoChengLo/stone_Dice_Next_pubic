import React from 'react'
import Link from 'next/link'
import styles from '@/styles/user-profile/footer.module.scss'

export default function Footer() {
  const bubbles = Array.from({ length: 128 }, () => ({
    size: `${2 + Math.random() * 4}rem`,
    distance: `${6 + Math.random() * 4}rem`,
    position: `${-5 + Math.random() * 110}%`,
    time: `${2 + Math.random() * 2}s`,
    delay: `${-1 * (2 + Math.random() * 2)}s`,
  }))

  return (
    <>
      <div className={styles.main}></div>
      <div className={styles.footer}>
        <div className={styles.bubbles}>
          {bubbles.map((bubble, index) => (
            <div
              key={index}
              className={styles.bubble}
              style={{
                '--size': bubble.size,
                '--distance': bubble.distance,
                '--position': bubble.position,
                '--time': bubble.time,
                '--delay': bubble.delay,
              }}
            ></div>
          ))}
        </div>
        <div className={styles.content}>
          <div>
            <div>
              <b>Eldew</b>
              <Link href="#">Secuce</Link>
              <Link href="#">Drupand</Link>
              <Link href="#">Oceash</Link>
              <Link href="#">Ugefe</Link>
              <Link href="#">Babed</Link>
            </div>
            <div>
              <b>Spotha</b>
              <Link href="#">Miskasa</Link>
              <Link href="#">Agithe</Link>
              <Link href="#">Scesha</Link>
              <Link href="#">Lulle</Link>
            </div>
            <div>
              <b>Chashakib</b>
              <Link href="#">Chogauw</Link>
              <Link href="#">Phachuled</Link>
              <Link href="#">Tiebeft</Link>
              <Link href="#">Ocid</Link>
              <Link href="#">Izom</Link>
              <Link href="#">Ort</Link>
            </div>
            <div>
              <b>Athod</b>
              <Link href="#">Pamuz</Link>
              <Link href="#">Vapert</Link>
              <Link href="#">Neesk</Link>
              <Link href="#">Omemanen</Link>
            </div>
          </div>
          <div>
            <Link
              className={styles.image}
              href="https://codepen.io/z-"
              target="_blank"
              style={{
                backgroundImage: `url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg")`,
              }}
            ></Link>
            <p>©2024 Not Really</p>
          </div>
        </div>
      </div>

      <svg style={{ position: 'fixed', top: '100vh' }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </>
  )
}
