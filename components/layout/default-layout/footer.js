import React from 'react'
import Link from 'next/link'
import styles from '@/styles/user-profile/footer.module.scss'

export default function Footer() {
  const bubbles = Array.from({ length: 128 }, () => ({
    size: `${2 + Math.random() * 4}rem`,
    distance: `${6 + Math.random() * 4}rem`,
    position: `${-5 + Math.random() * 102}%`,
    time: `${2 + Math.random() * 2}s`,
    delay: `${-1 * (2 + Math.random() * 2)}s`,
  }))

  return (
    <>
      <div className={`${styles.main} primary-text position-relative`}>
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
          <div
            className={`${styles.content} d-flex justify-content-between align-items-start`}
          >
            <div>
              <h4>聯絡我們</h4>
              <h5 style={{ marginTop: '8px' }}>
                地址: 高雄市前金區中正四路211號8號樓之1
              </h5>
              <h5>電話: (07) 969-9885</h5>
              <h5>
                電子郵件: <a href="#">info@stone.com</a>
              </h5>
            </div>

            <div>
              <h4>導覽</h4>
              <div>
                <div className="d-flex-column justify-content-evenly">
                  <Link href="/">首頁</Link>
                  <Link href="/user-profile/login">登入會員</Link>
                  <Link href="/board-game">桌遊商城</Link>
                  <Link href="/larp">密室逃脫</Link>
                  <Link href="/mystery-game">劇本殺</Link>
                </div>
                <div>
                  <Link href="/about">關於我們</Link>
                  <Link href="/">常見問題</Link>
                  <Link href="/">隱私政策</Link>
                  <Link href="/">使用條款</Link>
                </div>
              </div>
            </div>

            <div>
              <h4>社交媒體</h4>
              <div className="d-flex-column">
                <a href="https://www.facebook.com" target="_blank">
                  Facebook
                </a>{' '}
                <a href="https://www.instagram.com" target="_blank">
                  Instagram
                </a>{' '}
                <a href="https://www.twitter.com" target="_blank">
                  Twitter
                </a>{' '}
                <a href="https://www.linkedin.com" target="_blank">
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <h4>訂閱電子報</h4>
              <div className="d-flex flex-direction-column">
                <input
                  type="email"
                  placeholder="輸入你的電子郵件"
                  style={{
                    border: 'none',
                    borderRadius: '5px',
                    height: '40px',
                    fontSize: '14px',
                    backgroundColor: '#F0F0F0',
                    marginTop: '4px',
                  }}
                />
                <button
                  style={{
                    width: '60px',
                    height: '40px',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '14px',
                    alignSelf: 'center',
                    marginTop: '4px',
                  }}
                  type="submit"
                >
                  訂閱
                </button>
              </div>
            </div>
            <div
              className="position-absolute"
              style={{
                top: '150px',
                left: 'calc((100% - 221.2px) / 2)',
                marginTop: '10px',
              }}
            >
              <p>CopyRight © 2024 The Dice In The Stone</p>
            </div>
            <div
              className="position-absolute"
              style={{
                top: '150px',
                right: '50px',
                marginTop: '10px',
                fontSize: '16px',
              }}
            >
              <p>
                designed by{' '}
                <Link href="https://codepen.io/z-">codepen.io/z-</Link>
              </p>
            </div>
          </div>
        </div>

        {/* bubble的圖案 不可刪 */}
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
      </div>
    </>
  )
}
