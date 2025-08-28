

import { AddOutlined, ChevronRightOutlined } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'
import './connectsec.scss'

const ConnectSec = () => {
  return (
    <div className='connectsec'>
        <div className='left-connect'>
            <div className='upper'>
                <div className='connect-one'> Let's Connect </div>
                <div className='all'> See all </div>
            </div>
            <div className='lower'>
                <div className='round-but one'>
                    <Image className='but-left' src='/lad2.jpg' alt='imgs' width={35} height={35} />
                    <div className='but-middle'> 
                        <div className='middle-top'>
                            <div className='name-div'> Randy Gouse</div>
                            <div className='role-div red'> Senior </div>
                        </div>
                        <div className='middle-bottom'> 
                            <div className='mid-bot-inner'> Cybersecurity specialist  </div>
                        </div>
                    </div>
                    <div className='but-right'>
                        <div className='but-right-span'>
                            <AddOutlined className='outline-icon' />
                        </div>
                    </div>
                </div>
                <div className='round-but two'>
                    <Image className='but-left' src='/lad1.jpg' alt='imgs' width={35} height={35} />
                    <div className='but-middle'> 
                        <div className='middle-top'>
                            <div className='name-div'> Giana Schleifer </div>
                            <div className='role-div blue'> Middle </div>
                        </div>
                        <div className='middle-bottom'> 
                            <div className='mid-bot-inner'>  UX/UI Designer  </div>
                        </div>
                    </div>
                    <div className='but-right'>
                        <div className='but-right-span'>
                            <AddOutlined className='outline-icon' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='right-connect'>
            <div className='unlock-div'> Unlock Premium Features </div>
            <div className='access-div'> get access to exclusive benefits and expand your freelancing  oppurtunities   </div>
            <div className='but-bottom'> 
                <div className='upgrade-text'> Upgrade Now </div>
                <ChevronRightOutlined className='chevron' />
            </div>
        </div>
    </div>
  )
}

export default ConnectSec