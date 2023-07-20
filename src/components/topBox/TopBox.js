import React from 'react'
import './TopBox.scss'
import profile from '../../assets/pic_vivek.jpg'
import { currencyFormat } from '../../helpers'

export default function TopBox() {
  return (
    <div className='TopBox flex-column'>
        <h1>Top Deals</h1>
        <div className="list-items flex-column">
            <div className="user flex">
                <div className="img"><img src={profile} alt="" /></div>
                <div className="user-info flex-column">
                    <div className="name">Vivek Chhabra</div>
                    <div className="email">vivekcb8642@gmail.com</div>
                </div>
                <div className="amt">{currencyFormat(555)}</div>
            </div>
            <div className="user flex">
                <div className="img"><img src={profile} alt="" /></div>
                <div className="user-info flex-column">
                    <div className="name">Vivek Chhabra</div>
                    <div className="email">vivekcb8642@gmail.com</div>
                </div>
                <div className="amt">{currencyFormat(555)}</div>
            </div>
            <div className="user flex">
                <div className="img"><img src={profile} alt="" /></div>
                <div className="user-info flex-column">
                    <div className="name">Vivek Chhabra</div>
                    <div className="email">vivekcb8642@gmail.com</div>
                </div>
                <div className="amt">{currencyFormat(555)}</div>
            </div>
            <div className="user flex">
                <div className="img"><img src={profile} alt="" /></div>
                <div className="user-info flex-column">
                    <div className="name">Vivek Chhabra</div>
                    <div className="email">vivekcb8642@gmail.com</div>
                </div>
                <div className="amt">{currencyFormat(555)}</div>
            </div>
            <div className="user flex">
                <div className="img"><img src={profile} alt="" /></div>
                <div className="user-info flex-column">
                    <div className="name">Vivek Chhabra</div>
                    <div className="email">vivekcb8642@gmail.com</div>
                </div>
                <div className="amt">{currencyFormat(555)}</div>
            </div>
            <div className="user flex">
                <div className="img"><img src={profile} alt="" /></div>
                <div className="user-info flex-column">
                    <div className="name">Vivek Chhabra</div>
                    <div className="email">vivekcb8642@gmail.com</div>
                </div>
                <div className="amt">{currencyFormat(555)}</div>
            </div>
            <div className="user flex">
                <div className="img"><img src={profile} alt="" /></div>
                <div className="user-info flex-column">
                    <div className="name">Vivek Chhabra</div>
                    <div className="email">vivekcb8642@gmail.com</div>
                </div>
                <div className="amt">{currencyFormat(555)}</div>
            </div>
            <div className="user flex">
                <div className="img"><img src={profile} alt="" /></div>
                <div className="user-info flex-column">
                    <div className="name">Vivek Chhabra</div>
                    <div className="email">vivekcb8642@gmail.com</div>
                </div>
                <div className="amt">{currencyFormat(555)}</div>
            </div>
        </div>
    </div>
  )
}
