import React from 'react'

export default function Form4({ options }) {
	const _options = options || {
		title: "Sign into your account",
		logo: <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg" alt="Workflow" />,
	}

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
		<div className="max-w-md w-full space-y-8">
			<div>
				<div className="mx-auto">{_options.logo}</div>
				<h2 className="mt-6 text-center text-3xl font-medium text-gray-900">{_options.title}</h2>
			</div>
			<form className="mt-8 space-y-6" action="#" method="POST">
				<input type="hidden" name="remember" value="true" />
				<div className="rounded-md shadow-sm -space-y-px">
					<div>
						<label htmlFor="email-address" className="sr-only">Email address</label>
						<input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Email address" />
					</div>
					<div>
						<label htmlFor="password" className="sr-only">Password</label>
						<input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Password" />
					</div>
				</div>

				
				<div className="flex items-center justify-between">
				{ _options.remember &&
					<div className="flex items-center">
						<input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
						<label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
							Remember me
						</label>
					</div>
				}

				{ _options.forgot &&
						<div className="text-sm">
							<a href="#" className="font-medium text-blue-600 hover:text-blue-500">
								Forgot your password?
							</a>
						</div>
				}
				</div>

				<div>
					<button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
						<span className="absolute left-0 inset-y-0 flex items-center pl-3">
							<svg className="h-5 w-5 text-blue-500 group-hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
							</svg>
						</span>
						Sign in
					</button>
				</div>
			</form>
		</div>
	</div>
    )
}