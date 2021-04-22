import classes from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = props => {
    let path = '/dialogs/' + props.id
    // console.log(props.name)
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem
