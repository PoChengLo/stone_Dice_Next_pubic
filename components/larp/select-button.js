import React, { useState } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { BsListUl } from 'react-icons/bs'
import styles from '@/styles/larp/dropdowm.module.css'
import Form from 'react-bootstrap/Form'

export default function SelectButton({ tag = '' }) {
  const [fantasyChecked, setFantasyChecked] = useState(false)

  const handleFantasyChange = () => {
    setFantasyChecked(!fantasyChecked)
  }

  return (
    <ButtonGroup>
      <DropdownButton
        as={ButtonGroup}
        title={
          <>
            <BsListUl />
            <p style={{ margin: '0 0 0 18px', display: 'inline-block' }}>
              篩選小助理
            </p>
          </>
        }
        id={`${styles.select} bg-vertical-dropdown-1`}
      >
        <Form.Group className="mb-3" style={{ paddingLeft: '10px' }}>
          <Form.Check
            type="checkbox"
            label={tag}
            checked={fantasyChecked}
            onChange={handleFantasyChange}
            id="fantasyCheckbox"
          />
        </Form.Group>
      </DropdownButton>
    </ButtonGroup>
  )
}
