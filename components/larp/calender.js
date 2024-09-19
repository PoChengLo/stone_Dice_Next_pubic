import React from 'react'
import styles from '@/styles/larp/calender.module.css'

export default function Calender() {
  return (
    <div className={styles.bookContainer}>
      <div className={styles.calendar}>
        <div className={styles.front}>
          <div className={styles.currentDate}>
            <h1>Friday 15th</h1>
            <h1>January 2025</h1>
          </div>
          <div className={styles.currentMonth}>
            <ul className={styles.weekDays}>
              <li>MON</li>
              <li>TUE</li>
              <li>WED</li>
              <li>THU</li>
              <li>FRI</li>
              <li>SAT</li>
              <li>SUN</li>
            </ul>
            <div className={styles.weeks}>
              <div className={styles.first}>
                <span className={styles.lastMonth}>28</span>
                <span className={styles.lastMonth}>29</span>
                <span className={styles.lastMonth}>30</span>
                <span className={styles.lastMonth}>31</span>
                <span>01</span>
                <span>02</span>
                <span>03</span>
              </div>
              <div className={styles.second}>
                <span>04</span>
                <span>05</span>
                <span className={styles.event}>06</span>
                <span>07</span>
                <span>08</span>
                <span>09</span>
                <span>10</span>
              </div>
              <div className={styles.third}>
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>
                <span className={styles.active}>15</span>
                <span>16</span>
                <span>17</span>
              </div>
              <div className={styles.fourth}>
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span>21</span>
                <span>22</span>
                <span>23</span>
                <span>24</span>
              </div>
              <div className={styles.fifth}>
                <span>25</span>
                <span>26</span>
                <span>27</span>
                <span>28</span>
                <span>29</span>
                <span>30</span>
                <span>31</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
