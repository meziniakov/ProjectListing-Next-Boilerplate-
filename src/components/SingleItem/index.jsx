import Image from 'next/image'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line, Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const SingleItem = ({ item }) => {
  const averageStaff = {
    labels: ['2017', '2018', '2019', '2020'],
    datasets: [
      {
        label: 'Среднесписочная численность',
        data: [
          `${item['КЧ* 2017 (Факт)']}`,
          `${item['КЧ* 2018 (Факт)']}`,
          `${item['КЧ* 2019 (Факт)']}`,
          `${item['КЧ* 2020 (Факт)']}`,
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  const revenue = {
    labels: ['2017', '2018', '2019', '2020', '2021'],
    datasets: [
      {
        label: 'Общая выручка',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [
          `${item[' ФВ* 2017 (Факт) ']}`,
          `${item[' ФВ* 2018 (Факт) ']}`,
          `${item[' ФВ* 2019 (Факт) ']}`,
          `${item[' ФВ* 2020 (Факт) ']}`,
          `${item[' ФВ* 2021 (Факт) ']}`,
        ],
      },
    ],
  }

  return (
    <div className="container mx-auto mt-7 grid lg:grid-cols-3 gap-7">
      <div className="grid h-max grid-cols-1 rounded-xl border p-7">
        <div className="h-max relative text-center">
          <button>
            <span className="absolute hover:cursor-pointer right-2 top-2 z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="#ff385c"
                viewBox="0 0 32 32"
                stroke="#fff"
                strokeWidth={2}
              >
                <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
              </svg>
            </span>
          </button>
          <div className="relative w-max mx-auto">
            <Image
              height={160}
              width={160}
              alt={item['Наименование']}
              className="rounded-full object-cover"
              src={item.avatar ? item.avatar : '/vercel.svg'}
            />
          </div>
          <h3 className="text-center text-lg font-bold">
            {item['Наименование']}
          </h3>
          <p className="text-base font-light text-center text mb-0">
            {/* {item.job} */}
          </p>
          <p className="inline-flex text-xs justify-center w-full text-neutral-400">
            <svg
              viewBox="0 0 12 16"
              fill="none"
              className="mr-2 h-4 w-4 text-neutral-400"
            >
              <path
                d="M11.5 6c0 4.5-5.5 9.5-5.5 9.5S.5 10.5.5 6a5.5 5.5 0 1111 0v0z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M6 8.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            {item['Регион МИП']}
            {/* {item.country}, {item.city} (+05:00 UTC) */}
          </p>
        </div>
        {/* <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
      </div> */}
        <div className="h-max">
          <div className="rounded-md shadow">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-lg md:px-10"
            >
              Написать
            </a>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 grid grid-cols-1 gap-7">
        <div className="h-max col-span-2 rounded-xl p-7 border">
          <h3 className="text-xl font-bold">Динамика выручки</h3>
          <Line
            datasetIdKey="id"
            data={revenue}
            options={{ responsive: false }}
            width={800}
            height={400}
          />
        </div>
        <div className="h-max col-span-2 rounded-xl p-7 border">
          <h3 className="text-xl font-bold">Динамика численности</h3>
          <Bar
            datasetIdKey="staff"
            data={averageStaff}
            options={{ responsive: false }}
            width={800}
            height={400}
          />
        </div>

        <div className="h-max col-span-2 rounded-xl p-7 border">
          <h3 className="text-xl font-bold">Рейтинг</h3>
          <p className="text-center">Нет рейтинга</p>
        </div>
      </div>
    </div>
  )
}

export default SingleItem
