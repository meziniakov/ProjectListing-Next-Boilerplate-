import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styles from './Nav.module.scss'

function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible)
  const ref = useRef(null)

  const handleHideDropdown = (event) => {
    if (event.key === 'Escape') {
      setIsComponentVisible(false)
    }
  }

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleHideDropdown, true)
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('keydown', handleHideDropdown, true)
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return { ref, isComponentVisible, setIsComponentVisible }
}

const Nav = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-2">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              ref={ref}
              type="button"
              onClick={() => setIsComponentVisible(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Открыть меню</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Image
                className="block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                width={30}
                height={30}
                alt="Workflow"
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href={'/'} className={styles.noactive}>

                  Главная
                </Link>
                <Link
                  href={'/bementor'}
                  className={styles.noactive}
                >
                  Стать ментором

                </Link>
                <Link
                  href={'/about'}
                  className={styles.noactive}
                >

                  О проекте                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative">
              <div>
                <button
                  ref={ref}
                  type="button"
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user"
                  name="user"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => setIsComponentVisible(true)}
                // onClick={select}
                >
                  <span className="sr-only">Open user menu</span>
                  <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    <svg
                      className="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                </button>
              </div>

              <div
                className={`${isComponentVisible ? '' : 'hidden'
                  } origin-top-right absolute right-0 mt-2 w-48 z-10 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="1"
              >
                <Link href={'/profile'} className="block px-4 py-2 text-sm text-gray-700">

                  Профиль

                </Link>
                <Link href={'/mentor/add'} className="block px-4 py-2 text-sm text-gray-700">

                  Стать ментором

                </Link>
                <Link href={''}>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    Выйти
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${isComponentVisible ? '' : 'hidden'} sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href={'/'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md block text-base font-medium">
            Главная
          </Link>
          <Link href={'/'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md block text-base font-medium">
            Менторы
          </Link>
          <Link href={'/about'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md block text-base font-medium">
            О проекте
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav