import Link from 'next/link'
import { useState } from 'react'

const SignInPage = () => {
  const initialState = { email: '', password: '' }
  const [userData, setUserData] = useState(initialState)
  const { email, password } = userData

  const [error, setError] = useState(null)

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)
  }
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Авторизация
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            или{' '}
            <Link href="/auth/signup">
              <a className="font-medium text-indigo-600 hover:text-indigo-500">
                зарегистрируйтесь
              </a>
            </Link>
          </p>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={handleChangeInput}
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
              <label htmlFor="password" className="sr-only">
                Пароль
              </label>
              <input
                value={password}
                type="password"
                onChange={handleChangeInput}
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Пароль"
              />
            </div>
            <div className=" text-red-700">
              {error?.response?.data?.message?.email && (
                <>{error.response.data.message.email[0]}</>
              )}
            </div>
            <div className=" text-red-700">
              {error?.response?.data?.message?.password && (
                <>{error.response.data.message.password[0]}</>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Забыли пароль?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default SignInPage
