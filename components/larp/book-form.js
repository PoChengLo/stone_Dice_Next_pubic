import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import styles from '@/styles/larp/bookform.module.css'
import Button from 'react-bootstrap/Button'
import useBookFormState from '@/hooks/use-bookform-state'

export default function BookForm({ escapes = [], escape = [], ordlist = [] }) {
  // 儲存被選擇的主題id
  const [selectId, setSelectId] = useState('')
  // 儲存當前選擇的館別
  const [selectedLocationId, setSelectedLocationId] = useState('')
  const [peoples, setPeoples] = useState([])
  // 儲存篩選後的館別
  const [filteredLocations, setFilteredLocations] = useState([])
  // 控制選中的人數選項
  const [selectPeople, setSelectPeople] = useState('')
  // 儲存手機號碼
  const [mobile, setMobile] = useState('')
  // 儲存單價
  const [uniPrice, setUniPrice] = useState(0)
  // 儲存總價
  const [totalPrice, setTotalPrice] = useState(0)
  // ---- 儲存被預約的時間 start ----
  const [selectDate, setSelectDate] = useState('') // 記錄被選定的日期
  // ---- 儲存被預約的時間 end ----

  // 初始化表單localStorage的值
  const initialFormValues = {
    larpName: selectId,
    loc: 0,
    date: '',
    datetime: '',
    name: '',
    people: 0,
    mobile: '',
    email: '',
    totalprice: 0,
  }
  // 使用 useBookFormState Hook 管理表單狀態
  const { formData, setFormData, BtnSubmit } = useBookFormState(
    'bookForm',
    initialFormValues
  )

  // 監聽 formData 狀態變化，並同步更新 localStorage
  useEffect(() => {
    if (formData) {
      localStorage.setItem('bookForm', JSON.stringify(formData))
    }
  }, [formData])

  // 處理輸入變更
  const handleInputChange = (e) => {
    const { name, value } = e.target
    // 更新表單數據，並將其保存到 localStorage 中
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

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

  // 選擇主題的時候，重新過濾館別
  const larpChange = (e) => {
    const selectId = Number(e.target.value)
    setSelectId(selectId)
    setSelectedLocationId('') // 重置館別選項
    setSelectPeople(0) // 重置人數選項
    filterLoc(selectId)
    setPeoples([])
    setUniPrice(selectId)

    // 根據選中的主題更新單價
    const selectPrice = escapes.find((r) => r.id === selectId)
    if (selectPrice) {
      setUniPrice(selectPrice.price)
    }

    // 根據選中的主題立即更新人數選項
    const selectLarp = escapes.find((r) => r.id === selectId)
    if (selectLarp) {
      const numRange = selectLarp.larp_people.match(/(\d+)-(\d+)/)
      if (numRange) {
        const min = parseInt(numRange[1], 10)
        const max = parseInt(numRange[2], 10)

        // 生成option選項
        const option = []
        for (let i = min; i <= max; i++) {
          option.push(i)
        }
        setPeoples(option)
      } else {
        setPeoples([])
      }
    }
  }

  const handleLocationChange = (e) => {
    const selectedLocationId = e.target.value // 取得選擇的館別ID
    setSelectedLocationId(selectedLocationId) // 設置選擇的館別狀態
  }

  // 手機號碼正規化
  const regex = /^09[0-9]{8}$/

  const mobileChange = (e) => {
    const value = e.target.value
    setMobile(value)
  }

  const isDisabled = ordlist.some((item) => {
    console.log(`Checking item:`, item) // 檢查每個 item 的內容
    console.log(`Comparing: ord_theme (${typeof item.ord_theme}) )`)
    console.log(
      `Comparing: parseInt(formData.loc) (${parseInt(
        formData.loc
      )}) === selectedLocationId (${selectedLocationId})`
    )
    console.log(
      `Comparing: formData.date (${formData.date}) === selectDate (${selectDate})`
    )
    console.log(`Comparing: item.ord_time (${item.ord_time}) === `)

    return (
      item.ord_theme === selectId &&
      parseInt(formData.loc) === selectedLocationId &&
      formData.date === selectDate &&
      item.ord_time
    )
  })

  console.log(`isDisabled: ${isDisabled}`)

  // 網站載入的時候，生成人數選項，只生成一次
  useEffect(() => {
    // 根據escape.larp_name帶入預設主題
    const selectLarp = escapes.find((e) => e.larp_name === escape.larp_name)
    if (selectLarp) {
      setSelectId(selectLarp.id)
      filterLoc(selectLarp.id)
      setUniPrice(selectLarp.price)

      // 將預設的主題寫入 localStorage
      setFormData((prevData) => ({
        ...prevData,
        larpName: selectLarp.id,
      }))

      // 根據預設主題生成對應的人數選項
      const numRange = selectLarp.larp_people.match(/(\d+)-(\d+)/)
      if (numRange) {
        const min = parseInt(numRange[1], 10)
        const max = parseInt(numRange[2], 10)
        const option = []
        for (let i = min; i <= max; i++) {
          option.push(i)
        }
        setPeoples(option)
      }
    }
  }, [escapes, escape.larp_name])

  // 選擇日期的時候，同步確認
  // useEffect(() => {
  //   if (selectDate) {
  //     fetch(
  //       `http://127.0.0.1:3006/larp/orded-time?larpName=1&loc=1&date=${selectDate}`
  //     )
  //       .then((res) => res.json)
  //       .then((result) => {
  //         setOrdedTime(result.ordedTime)
  //         console.log(ordedTime)
  //       })
  //       .catch((error) => console.error('此時段已額滿', error))
  //   }
  // }, [selectDate])

  // 選擇人數時，同步變更總金額
  useEffect(() => {
    const Total = uniPrice * selectPeople
    setTotalPrice(Total)
    setFormData((prevData) => ({
      ...prevData,
      totalprice: Total,
    }))
  }, [selectPeople])

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
              name="larpName"
              value={selectId}
              onChange={(e) => {
                larpChange(e)
                handleInputChange(e)
              }}
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
              name="loc"
              value={selectedLocationId} // 使用狀態來設置value
              onChange={(e) => {
                handleLocationChange(e)
                handleInputChange(e)
              }} // 使用函數
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
              name="date"
              onChange={(e) => {
                handleInputChange(e)
                setSelectDate(e.target.value)
              }}
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
              name="datetime"
              onChange={handleInputChange}
            >
              <option value="">=====請選擇時段=====</option>
              {['10:00', '14:00', '18:00'].map((v, i) => {
                // 檢查該時段是否已被預約
                console.log(selectId, parseInt(formData.loc), formData.date, v)
                const isDisabled = ordlist.some(
                  (item) =>
                    item.ord_theme === selectId &&
                    parseInt(formData.loc) === selectedLocationId &&
                    formData.date === selectDate &&
                    item.ord_time === v
                )
                console.log(
                  typeof ordlist.ord_theme,
                  typeof selectId,
                  typeof ordlist.ord_loc,
                  typeof selectedLocationId,
                  typeof formData.date,
                  typeof selectDate,
                  typeof ordlist.ord_time,
                  typeof v
                )

                return (
                  <option key={v} value={v} disabled={isDisabled}>
                    {v}
                  </option>
                )
              })}
              {/* <option value="10:00:00">10:00</option>
              <option value="14:00:00">14:00</option>
              <option value="18:00:00">18:00</option> */}
              {/* {['10:00', '14:00', '18:00'].map((v) => {
                console.log(ordlist)
                const isDisabled =
                  selectId === ordlist.ord_theme &&
                  filteredLocations === ordlist.ord_loc &&
                  selectDate === ordlist.ord_date &&
                  formData.datetime ===
                    ordlist.some((item) => item.ord_datetime.includes(v))
                console.log(typeof selectedLocationId)
                console.log(
                  `Comparing: ${selectId} === ${formData.ord_theme}, ${selectedLocationId} === ${formData.ord_loc}, ${formData.ord_date} === ${selectDate}`
                )
                return (
                  <option key={v} value={v} disabled={isDisabled}>
                    {v}
                  </option>
                )
              })} */}
            </Form.Select>
          </InputGroup>
        </div>
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
              name="name"
              type="text"
              placeholder="請輸入完整姓名"
              aria-label="Username"
              aria-describedby="inputGroup-sizing-default"
              onChange={handleInputChange}
            />
          </InputGroup>
          {/* 人數 */}
          <InputGroup className={styles.inputGroup}>
            <InputGroup.Text
              className={styles.inputGroupText}
              id="inputGroup-sizing-default"
            >
              人數
            </InputGroup.Text>
            <Form.Select
              id="peopleAmount"
              aria-label="loc"
              aria-describedby="inputGroup-sizing-default"
              name="people"
              value={selectPeople}
              onChange={(e) => {
                setSelectPeople(e.target.value)
                handleInputChange(e)
              }}
            >
              <option value={0}>=====請選擇人數=====</option>
              {peoples.map((v, i) => (
                <option key={i} value={v}>
                  {v} 位
                </option>
              ))}
            </Form.Select>
          </InputGroup>
        </div>
        {/* input */}
        <div className="d-flex">
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
              placeholder="請輸入完整手機號碼，如09XXXXXXXX"
              aria-label="Mobile"
              aria-describedby="inputGroup-sizing-default"
              maxLength={10}
              name="mobile"
              value={mobile}
              onChange={(e) => {
                mobileChange(e)
                handleInputChange(e)
              }}
            />
          </InputGroup>
          {/* 信箱 */}
          <InputGroup className={styles.inputGroup}>
            <InputGroup.Text
              className={styles.inputGroupText}
              id="inputGroup-sizing-default"
            >
              信箱
            </InputGroup.Text>
            <Form.Control
              name="email"
              type="email"
              placeholder="請輸入有效電子信箱"
              aria-label="email"
              aria-describedby="inputGroup-sizing-default"
              onChange={handleInputChange}
            />
          </InputGroup>
        </div>
        <div className="d-flex">
          {/* 金額 */}
          <InputGroup
            className={`${styles.inputGroup} d-flex justify-content-between align-items-center`}
          >
            <InputGroup.Text
              className={styles.inputGroupText}
              id="inputGroup-sizing-default"
            >
              價格
            </InputGroup.Text>
            <h3 className={styles.secondaryText} style={{ margin: 0 }}>
              {uniPrice} 元 / 位
            </h3>
          </InputGroup>
          <InputGroup
            className={`${styles.inputGroup} d-flex justify-content-between align-items-center`}
          >
            <InputGroup.Text
              className={styles.inputGroupText}
              id="inputGroup-sizing-default"
            >
              總金額
            </InputGroup.Text>
            <h3
              className={styles.secondaryText}
              style={{ margin: 0 }}
              name="totalprice"
            >
              {totalPrice.toLocaleString()} 元
            </h3>
          </InputGroup>
        </div>
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
          onClick={BtnSubmit}
        >
          預約
        </Button>
      </div>
    </>
  )
}
