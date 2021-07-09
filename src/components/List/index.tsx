import React, { Component } from 'react'
import './index.css'
import {RootObject} from '../types'

interface IProps {
users: RootObject[]
isFirst: boolean
isLoading: boolean
}
interface IState {

}

export default class List extends Component<IProps, IState> {
  render() {
    const {users, isFirst, isLoading} = this.props
    return (
      <div className="row">
       {
         isFirst ? <h2>欢迎首次使用,请输入关键词进行搜索!!</h2> : 
         isLoading ? <h2>正在搜索中请稍后!</h2> :
         users.map((item: RootObject)=>{

          return (
           <div className="card" key={item.id}>
           <a href={item.html_url} target="_blank" rel="noreferrer" >
             <img src={item.avatar_url} style={{width: '100px'}} alt=""/>
           </a>
           <p className="card-text">{item.login}</p>
         </div>
          )
 
        })
       }
      </div>
    )
  }
}
