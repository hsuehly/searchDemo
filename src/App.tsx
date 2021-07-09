import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import {RootObject} from './components/types'
import { isFL } from './components/types'
interface IProps {
 
}
interface IState {
  users: RootObject[],
  isFirst: boolean,
  isLoading: boolean,
}
export default class App extends Component<IProps, IState> {

  public state = {
    users: [],
    isFirst: true,
    isLoading: false,
  }
  updataAppSate = (isLoading: boolean,users: RootObject[]): void => {
      this.setState({ users ,isLoading})
  }
  changeisFirstAndLoading = (obj: isFL)=>{
    this.setState({
      isFirst: obj.isFirst,
      isLoading: obj.isLoading
    })
  }

  
  render() {

    return (
      <div className="container">
        <Search updataAppSate={this.updataAppSate}  changeisFirstAndLoading={this.changeisFirstAndLoading} />
        <List {...this.state}/>
    </div>
    )
  }
}
