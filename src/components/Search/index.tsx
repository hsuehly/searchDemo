import React, { Component } from 'react'
import { RootObject, isFL} from '../types'

interface IProps {
  updataAppSate: (isLoading: boolean,users: RootObject[])=>void
  changeisFirstAndLoading:(obj: isFL)=>void
 
}
interface IState {

}
export default class Search extends Component<IProps, IState> {

  searchKeyword = React.createRef<HTMLInputElement>()
  handleSearch= () => {
    // console.log(this.searchKeyword.current?.value)
    console.log(this.props)
 
    const { value } = this.searchKeyword.current!
    this.props.changeisFirstAndLoading({isFirst: false, isLoading: true})
    console.log(value)
    const url: string  = `https://api.github.com/search/users?q=${value}`
    fetch(url)
    .then(res=>res.json())
    .then(res=>{
      console.log(res)
      this.props.updataAppSate(false,res.items)
    })

  } 
 
 
  render() {
    
    return (
      <section className="jumbotron">
      <h3 className="jumbotron-heading">搜索GITHUB用户名</h3>
      <div>
        <input type="text" ref={this.searchKeyword} placeholder="请输入要搜索的关键字"/>&nbsp;<button onClick={this.handleSearch}>搜索</button>
      </div>
    </section>
    )
  }
}
