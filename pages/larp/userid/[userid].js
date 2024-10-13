import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function UserId() {
  const [ordData, setOrdData] = useState({})
  const router = useRouter()

  const getData = async (userid) => {
    const baseURL = `http://127.0.0.1:3006/larp/userid/${userid}`
    if (!userid) return
    try {
      const res = await fetch(baseURL)
      const resData = await res.json()

      if (Array.isArray(resData) && resData.length > 0) {
        setOrdData(resData)
        console.log(resData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (router.isReady) {
      const { userid } = router.query
      getData(userid)
    }
  }, [router.isReady])

  return (
    <div>
      {ordData.map((v) => (
        <div key={v.user_id}>{v.user_id}</div>
      ))}
      我是內容
    </div>
  )
}
