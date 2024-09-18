import React, { useState } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { BsListUl } from 'react-icons/bs'
import styles from '@/styles/larp/dropdowm.module.css'
import Form from 'react-bootstrap/Form'

export default function SelectButton() {
  const [fantasyChecked, setFantasyChecked] = useState(false)
  const [adventureChecked, setAdventureChecked] = useState(false)

  const handleFantasyChange = () => {
    setFantasyChecked(!fantasyChecked)
  }

  const handleAdventureChange = () => {
    setAdventureChecked(!adventureChecked)
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
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="奇幻"
            checked={fantasyChecked}
            onChange={handleFantasyChange}
            id="fantasyCheckbox"
          />
          <Form.Check
            type="checkbox"
            label="冒險"
            checked={adventureChecked}
            onChange={handleAdventureChange}
            id="adventureCheckbox"
          />
        </Form.Group>
      </DropdownButton>
    </ButtonGroup>
  )
}
