import React from 'react'
import { observer } from 'mobx-react'
import { observable, computed, configure } from 'mobx'

import API from '../api/index'
import Generic from '../util/generic'
import { Button } from 'react-bootstrap'

@observer
export default class Index extends React.Component {

  render() {
    return (
      <div>React + Mobx Starter</div>
    )
  }
}
