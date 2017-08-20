import React, { Component } from 'react'
import { Drawer, MenuItem } from 'material-ui'

export default class LeftDrawer extends Component {
  render() {
    return (
      <Drawer
        docked={true}
        open={true}
        containerStyle={{'position': 'absolute', 'top': '64px', 'background':'#e9e9e9'}}
      >
        <MenuItem>Test</MenuItem>
      </Drawer>
    )
  }
}