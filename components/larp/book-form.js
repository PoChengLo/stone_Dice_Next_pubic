import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import styles from '@/styles/larp/bookform.module.css'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'

export default function BookForm({
  larpName = '',
  price = 0,
  NameValue,
  allName,
  escapes = [],
}) {
  const router = useRouter()
  return (
    <>
      <div
        id={styles.bookForm}
        className="flex-fill position-relative align-content-between"
        style={{
          padding: '60px 64px 30px 64px',
          borderLeft: '1px solid #d7bf7d',
        }}
      >
        {/* 下拉式選單 */}
        {/* 主題 */}
        <div className="d-flex">
          <InputGroup className={styles.inputGroup}>
            <InputGroup.Text
              className={styles.inputGroupText}
              id="inputGroup-sizing-default"
            >
              主題
            </InputGroup.Text>
            <Form.Select
              aria-label="theme"
              aria-describedby="inputGroup-sizing-default"
            >
              <option disabled>=====請選擇主題=====</option>
              {escapes.map((v, i) => (
                <option
                  key={i}
                  value={v.id}
                  select={router.query.larpid === Number.toString(v.id)}
                >
                  {v.larp_name}
                </option>
              ))}
              {/* <option value={NameValue}>{allName}</option> */}
            </Form.Select>
          </InputGroup>
          {/* 館別 */}
          <InputGroup className={styles.inputGroup}>
            <InputGroup.Text
              className={styles.inputGroupText}
              id="inputGroup-sizing-default"
            >
              館別
            </InputGroup.Text>
            <Form.Select
              aria-label="loc"
              aria-describedby="inputGroup-sizing-default"
            >
              <option>=====請選擇館別=====</option>
              <option value="1">台北館</option>
              <option value="2">台中館</option>
              <option value="3">高雄館</option>
            </Form.Select>
          </InputGroup>
        </div>
        {/* 日期 */}
        <div className="d-flex">
          <InputGroup className={styles.inputGroup}>
            <InputGroup.Text
              className={styles.inputGroupText}
              id="inputGroup-sizing-default"
            >
              日期
            </InputGroup.Text>
            <Form.Control
              type="date"
              placeholder="請點選左方行事曆選擇日期"
              aria-label="Username"
              aria-describedby="inputGroup-sizing-default"
              readOnly=""
            />
          </InputGroup>
          {/* 時段 */}
          <InputGroup className={styles.inputGroup}>
            <InputGroup.Text
              className={styles.inputGroupText}
              id="inputGroup-sizing-default"
            >
              時段
            </InputGroup.Text>
            <Form.Select
              aria-label="loc"
              aria-describedby="inputGroup-sizing-default"
            >
              <option>=====請選擇時段=====</option>
              <option value="1">10:00</option>
              <option value="2">14:00</option>
              <option value="3">18:00</option>
            </Form.Select>
          </InputGroup>
        </div>
        {/* 人數 */}
        <div className="d-flex" style={{ width: '50%' }}>
          <InputGroup className={styles.inputGroup}>
            <InputGroup.Text
              className={styles.inputGroupText}
              id="inputGroup-sizing-default"
            >
              人數
            </InputGroup.Text>
            <Form.Select
              id="poepleAmount"
              aria-label="loc"
              aria-describedby="inputGroup-sizing-default"
            >
              <option>=====請選擇人數=====</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </Form.Select>
          </InputGroup>
        </div>
        {/* input */}
        {/* 姓名 */}
        <div className="d-flex">
          <InputGroup className={styles.inputGroup}>
            <InputGroup.Text
              className={styles.inputGroupText}
              id="inputGroup-sizing-default"
            >
              姓名
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="請輸入完整姓名"
              aria-label="Username"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          {/* 電話 */}
          <InputGroup className={styles.inputGroup}>
            <InputGroup.Text
              className={styles.inputGroupText}
              id="inputGroup-sizing-default"
            >
              手機
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="請輸入完整手機號碼，如09XX-XXX-XXX"
              aria-label="Mobile"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
        </div>
        {/* 信箱 */}
        <div className="d-flex">
          <InputGroup className={styles.inputGroup}>
            <InputGroup.Text
              className={styles.inputGroupText}
              id="inputGroup-sizing-default"
            >
              信箱
            </InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="請輸入有效電子信箱"
              aria-label="email"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          {/* 金額 */}
          <InputGroup
            className={`${styles.inputGroup} d-flex justify-content-between align-items-center`}
          >
            <InputGroup.Text
              className={styles.inputGroupText}
              id="inputGroup-sizing-default"
            >
              金額
            </InputGroup.Text>
            <h3 className={styles.secondaryText} style={{ margin: 0 }}>
              {price} 元
            </h3>
          </InputGroup>
        </div>
        <Link href={`/larp/check-page`}>
          <Button
            className="position-absolute end-0"
            style={{
              padding: '8px 29px',
              marginRight: 64,
              backgroundColor: '#FFFFFF',
              border: 'none',
              color: '#1f1f1f',
            }}
            type="submit"
          >
            預約
          </Button>
        </Link>
      </div>
    </>
  )
}
