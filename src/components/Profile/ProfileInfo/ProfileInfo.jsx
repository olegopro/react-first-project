import Preloader from '../../common/Preloader/Preloader'
import classes from './ProfileInfo.module.css'

const ProfileInfo = props => {
	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div>
			<div>
				<img src="https://placeimg.com/640/480/any" alt="main bg" />
			</div>
			<div className={classes.descriptionBlock}>
				<img src={props.profile.photos.large} alt="" />
				ava + desk
			</div>
		</div>
	)
}

export default ProfileInfo
