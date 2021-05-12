import Preloader from 'components/common/Preloader/Preloader'
import React from 'react'
import { Suspense } from 'react'

export const WithSuspense = Component => {
	return props => (
		<Suspense fallback={<Preloader />}>
			<Component {...props} />
		</Suspense>
	)
}
