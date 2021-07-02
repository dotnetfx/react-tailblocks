import React, { useEffect, useState } from 'react'
import { LockClosedIcon, CubeIcon } from '@heroicons/react/outline'

export default function Reset1({ title, logo, loginUrl, onReset, action, error }) {
	const [email, setEmail] = useState(null)
	const [errorMsg, setErrorMsg] = useState(error)
	
	const _loginUrl = loginUrl
	const _title = title || "Reset Account Password"
	const _logo = logo || <CubeIcon className="p-2 mx-auto w-16 h-16 text-white bg-blue-500 rounded-full" />

	useEffect(() => {
		setErrorMsg(error)
	}, [error])

	const isValid = () => {
		setErrorMsg(null)
		if (email) {
			if (email.includes("@") && email.includes(".")) return true

			setErrorMsg(`Email address must be in a valid format.`)
			return false
		}

		setErrorMsg("Email is required.")
		return false
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<div className="mx-auto">{_logo}</div>
					<h2 className="mt-6 text-center text-3xl font-medium text-gray-900">{_title}</h2>
				</div>
				<form className="mt-8 space-y-6" method="POST" action={action}>
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<label htmlFor="email-address" className="sr-only">Email address</label>
							<input id="username" name="username" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border 
							border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
								placeholder="Email address"
								onChange={(e) => { setEmail(e.target.value) }}
							/>
						</div>
					</div>

					<div className="flex items-center justify-center">
						{_loginUrl &&
							<div className="text-sm">
								<a href={_loginUrl} className="font-medium text-blue-600 hover:text-blue-500">
									Sign in instead?
								</a>
							</div>
						}
					</div>
					{errorMsg &&
						<div className="text-red-500">{errorMsg}</div>
					}

					<div>
						<button type={action ? "submit" : "button"} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 
						hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							onClick={() => { if (onReset && isValid()) onReset({ username: email }) }}
						>
							<span className="absolute left-0 inset-y-0 flex items-center pl-3">
								<LockClosedIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400" />
							</span>
							Reset
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}