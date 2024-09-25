import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import styles from '@/styles/larp/bookform.module.css'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function BookForm({
  price = 0,
  // NameValue,
  // allName,
  escapes = [],
  escape = [],
}) {
  const router = useRouter()
  // 儲存被選擇的主題id
  const [selectId, setSelectId] = useState('')
  const [selectedLocationId, setSelectedLocationId] = useState('') // 儲存當前選擇的館別

  // 儲存篩選後的館別
  const [filteredLocations, setFilteredLocations] = useState([])

  // 根據選擇的主題id 過濾對應的館別
  const filterLoc = (larpId) => {
    const locationInfo = escapes
      .filter((r) => r.id === larpId)
      .map((r) => ({
        loc_id: r.loc_id,
        loc_name: r.loc_name,
      }))

    // 刪除重複的館別
    const onlyLoc = locationInfo.filter(
      (v, i, esc) => esc.findIndex((loc) => loc.loc_id === v.loc_id) === i
    )
    console.log('Filtered Locations:', onlyLoc) // 檢查過濾結果

    // 把篩選出來的館別設定回去
    setFilteredLocations(onlyLoc)
  }
  console.log(filteredLocations)

  // 選擇主題的時候，重新過濾館別
  const larpChange = (e) => {
    const selectId = Number(e.target.value)
    setSelectId(selectId)
    setSelectedLocationId('') // 重置館別選項
    filterLoc(selectId)
  }

  // 根據escape.larp_name帶入預設主題
  useEffect(() => {
    const selectLarp = escapes.find((e) => e.larp_name === escape.larp_name)
    if (selectLarp) {
      setSelectId(selectLarp.id)
      filterLoc(selectLarp.id)
    }
  }, [escape.larp_name, escapes])

  const handleLocationChange = (e) => {
    const selectedLocationId = e.target.value // 取得選擇的館別ID
    setSelectedLocationId(selectedLocationId) // 設置選擇的館別狀態
    console.log('Selected Location ID:', selectedLocationId)
  }

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
              value={selectId}
              onChange={larpChange}
            >
              <option disabled value="">
                =====請選擇主題=====
              </option>
              {escapes
                .filter(
                  (v, i, esc) => esc.findIndex((item) => item.id === v.id) === i
                )
                .map((v, i) => (
                  <option key={i} value={v.id}>
                    {v.larp_name}
                  </option>
                ))}
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
              value={selectedLocationId} // 使用狀態來設置value
              onChange={handleLocationChange} // 使用函數
            >
              <option disabled value="">
                =====請選擇館別=====
              </option>
              {filteredLocations.map((loc) => (
                <option key={loc.loc_id} value={loc.loc_id}>
                  {loc.loc_name}
                </option>
              ))}
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
