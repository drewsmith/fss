import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'

export default class Nav extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <AppBar
                title="FullStackSpring.com"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap={this.props.drawerHandler}
                style={{'background': '#333333', 'color':'#FFFFFF'}}
            />
        )
    }
}