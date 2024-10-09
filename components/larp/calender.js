import React, { useState } from 'react'
import styles from '@/styles/larp/calender.module.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

// 月份名稱
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

// 函數：獲取指定月份的天數
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate()
}

// 函數：將日期轉換為序數後綴（如：15 -> 15th）
function getOrdinalSuffix(day) {
  if (day > 3 && day < 21) return 'th' // 處理11到19
  switch (day % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}

const Calendar = () => {
  // 根據台灣時間獲取當前日期（UTC+8）
  const now = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Asia/Taipei' })
  )
  const currentDay = now.getDate()
  const currentMonth = now.getMonth()
  const currentYear = now.getFullYear()
  const currentDayOfWeek = now.toLocaleString('en-US', { weekday: 'long' })

  const [monthIndex, setMonthIndex] = useState(currentMonth)
  const [year, setYear] = useState(currentYear)
  const [selectedDate, setSelectedDate] = useState(null) // 狀態：保存選擇的日期

  // 函數：切換到下個月
  const nextMonth = () => {
    if (monthIndex === 11) {
      setMonthIndex(0)
      setYear(year + 1)
    } else {
      setMonthIndex(monthIndex + 1)
    }
  }

  // 函數：切換到上個月
  const prevMonth = () => {
    if (monthIndex === 0) {
      setMonthIndex(11)
      setYear(year - 1)
    } else {
      setMonthIndex(monthIndex - 1)
    }
  }

  // 獲取選擇的月份和年份的天數
  const monthDayCount = daysInMonth(monthIndex + 1, year)
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

  // 獲取該月份的第一天（0-6，0是星期天，1是星期一，...，6是星期六）
  const firstDayOfMonth = new Date(year, monthIndex, 1).getDay()

  // 調整以使星期一成為第一天
  const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1

  // 填充第一行空位，根據第一天是星期幾進行填充
  const emptyDays = Array.from({ length: adjustedFirstDay })

  // 判斷該日期是否早於今天
  const isDateInPast = (day) => {
    if (
      year < currentYear ||
      (year === currentYear && monthIndex < currentMonth)
    ) {
      return true
    }
    if (
      year === currentYear &&
      monthIndex === currentMonth &&
      day < currentDay
    ) {
      return true
    }
    return false
  }

  // 處理選擇日期的點擊事件
  const handleDateClick = (day) => {
    const selected = new Date(currentYear, currentMonth, day)
    setSelectedDate(selected)
  }

  // 函數：處理選擇的日期
  const setDataId = (day) => {
    if (!isDateInPast(day)) {
      // 禁止選擇今天之前的日期
      setSelectedDate(day)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.calendar}>
        <div className={styles.header}>
          {/* 顯示今天的詳細日期 */}
          {/* <h2>{`${currentDayOfWeek} ${currentDay}${getOrdinalSuffix(
            currentDay
          )}`}</h2> */}
          <FaAngleLeft
            onClick={prevMonth}
            onKeyDown={(e) => e.key === 'Enter' && prevMonth()}
            role="button"
            tabIndex="0"
          />
          <h3>
            {months[monthIndex]} {year}
          </h3>
          <FaAngleRight
            onClick={nextMonth}
            onKeyDown={(e) => e.key === 'Enter' && nextMonth()}
            role="button"
            tabIndex="0"
          />
        </div>
        <div className={styles.days}>
          {days.map((day, index) => (
            <div key={index} className={styles.day_item}>
              {day}
            </div>
          ))}
        </div>
        <div className={styles.dates}>
          {emptyDays.map((_, index) => (
            <div key={index} className={styles.empty_date}></div>
          ))}
          {[...Array(monthDayCount)].map((_, i) => {
            const dayNumber = i + 1
            const isToday =
              dayNumber === currentDay &&
              monthIndex === currentMonth &&
              year === currentYear
            const isSelected = dayNumber === selectedDate
            const inPast = isDateInPast(dayNumber)

            return (
              <div
                key={i}
                className={`${styles.date_item} ${
                  isToday ? styles.today : ''
                } ${isSelected ? styles.selected : ''} ${
                  inPast ? styles.past : ''
                }`}
                onClick={() => setDataId(dayNumber)}
                onKeyDown={(e) => e.key === 'Enter' && setDataId(dayNumber)}
                role="button"
                tabIndex="0"
              >
                {dayNumber}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Calendar
