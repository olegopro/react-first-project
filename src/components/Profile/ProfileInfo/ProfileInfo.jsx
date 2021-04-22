import classes from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div>
            <div>
                <img src="https://placeimg.com/640/480/any" alt="main bg" />
            </div>
            <div className={classes.descriptionBlock}>ava + desk</div>
        </div>
    )
}

export default ProfileInfo
