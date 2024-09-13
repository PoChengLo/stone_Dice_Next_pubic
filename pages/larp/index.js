import React from 'react'
import { Image } from 'react-bootstrap'
import LarpTitle from '@/components/larp/larp-title'

export default function LarpPage() {
  return (
    <>
      {/* 置頂大圖 */}
      <Image
        src="https://i.postimg.cc/qqgTnCn5/image.png"
        alt="石之骰密室逃脫"
        width={'100%'}
        height={'auto'}
      />
      <LarpTitle />
    </>
  )
}
