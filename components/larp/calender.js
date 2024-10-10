import React, { useState, useEffect } from 'react'
import styles from '@/styles/larp/calender.module.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import useBookFormState from '@/hooks/use-bookform-state'

export default function Calender({ onDateChange }) {
  const initialFormValues = {
    date: '',
  }
  const { formData, setFormData } = useBookFormState('time', initialFormValues)

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
  const today = new Date()
  const [selectedDate, setSelectedDate] = useState('')
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())

  const getDaysInMonth = (month, year) => {
    const date = new Date(year, month, 1)
    const days = []
    const firstDayIndex = date.getDay()
    const lastDay = new Date(year, month + 1, 0).getDate()

    // 前面的空白日期
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(null)
    }

    // 月份的實際日期
    for (let i = 1; i <= lastDay; i++) {
      days.push(i)
    }

    return days
  }

  const days = getDaysInMonth(currentMonth, currentYear)

  const handleDateClick = (day) => {
    const selected = new Date(currentYear, currentMonth, day)
    setSelectedDate(selected)
    const formattedDate = formatDate(selected)
    onDateChange(formattedDate)
    setFormData((prevData) => ({
      ...prevData,
      date: formattedDate,
    }))
  }

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const formatDate = (date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  return (
    <div className={styles.container}>
      <div className={styles.calendar}>
        <div className={styles.header}>
          <FaAngleLeft variant="link" onClick={handlePreviousMonth} />
          <h3>
            {months[currentMonth]} {currentYear}
          </h3>
          <FaAngleRight variant="link" onClick={handleNextMonth} />
        </div>

        <div className={styles.days}>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(
            (day, index) => (
              <div key={index} className={styles.day_item}>
                {day}
              </div>
            )
          )}
        </div>

        <div className={styles.dates}>
          {days.map((day, index) => {
            const isToday =
              day === today.getDate() &&
              currentMonth === today.getMonth() &&
              currentYear === today.getFullYear()
            const isSelected =
              day &&
              selectedDate &&
              day === selectedDate.getDate() &&
              currentMonth === selectedDate.getMonth() &&
              currentYear === selectedDate.getFullYear()
            const isPast =
              day &&
              day < today.getDate() &&
              currentMonth === today.getMonth() &&
              currentYear === today.getFullYear()

            return (
              <div
                key={index}
                className={`${styles.date_item} ${
                  isToday ? styles.today : ''
                } ${isSelected ? styles.selected : ''} ${
                  isPast ? styles.past : ''
                }`}
                onClick={() => day && handleDateClick(day)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    day && handleDateClick(day)
                  }
                }}
                tabIndex={0}
                role="button"
                aria-disabled={isPast}
              >
                {day}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
