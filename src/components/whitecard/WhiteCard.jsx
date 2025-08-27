import React from 'react'
import './whitecard.scss'
import { CreditCard, KeyboardArrowDownOutlined } from '@mui/icons-material'

const WhiteCard = () => {
  return (
    <div className='whitecard'>
      <div className='top'>
        <CreditCard className='credit-icon'/>
        <span className='logo-span'> Income Tracker </span>
        <div className='pop-down'>
          <div className='week'> Week </div>
          <KeyboardArrowDownOutlined className='keyboard-icon' />
        </div>
      </div>
      <div className='mid'>
        <p className='mid-para'>
          Track changes in income overtime and access detailed data on each project and payments received
        </p>
      </div>
      <div className='bot'>
        <div className='bot-left'>
          <div className='bot-left-top'> +20%  </div>
          <div className='bot-left-bottom'> This week's income is higher than last week's </div>
        </div>
        <div className='bot-right'>
          <div className='graph'> Graph </div>
        </div>
      </div>
    </div>
  )
}

export default WhiteCard