import "chart.js/auto";
import { ReactNode, Fragment, useState } from "react";
import { Menu, Dialog, Tab, Transition } from "@headlessui/react";
import { Chart as ChartJS } from "chart.js";
import { Bar, Line, ChartProps } from "react-chartjs-2";
import {
  HomeIcon,
  ChartSquareBarIcon,
  TrendingUpIcon,
  UsersIcon,
  CogIcon,
  LogoutIcon,
  BellIcon,
  MoonIcon,
  SearchIcon,
  MenuAlt1Icon,
  XIcon,
  FilterIcon,
  CalendarIcon,
  ArrowCircleUpIcon,
  ArrowCircleDownIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

const links = [
  { label: "Home", icon: HomeIcon, href: "#", isActive: true },
  {
    label: "Metrics",
    icon: ChartSquareBarIcon,
    href: "#",
    notificationCount: 0,
    isActive: false,
  },
  {
    label: "Forecast",
    icon: TrendingUpIcon,
    href: "#",
    isActive: false,
  },
  { label: "Customers", icon: UsersIcon, href: "#", isActive: false },
];

const bottomLinks = [
  {
    label: "Settings",
    icon: CogIcon,
    href: "#",
    isActive: false,
    notificationCount: 0,
  },
  { label: "Logout", icon: LogoutIcon, href: "#", isActive: false },
];

// Chart setup
ChartJS.defaults.font.family = "Inter";
ChartJS.defaults.scale.grid.drawOnChartArea = false;
ChartJS.defaults.scale.grid.drawBorder = false;
ChartJS.defaults.elements.point.radius = 0;
ChartJS.defaults.scale.ticks.color = "#abadc6";
ChartJS.defaults.datasets.line.borderColor = "#2563eb";
ChartJS.defaults.datasets.bar.borderColor = "#2563eb";
ChartJS.defaults.datasets.bar.backgroundColor = "#2563eb";
ChartJS.defaults.datasets.bar.borderRadius = 4;
ChartJS.defaults.datasets.bar.maxBarThickness = 28;

export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  function openSidebar() {
    setIsSidebarOpen(true);
  }

  const maxSourceView = Math.max(...sourcesChart.map((source) => source.value));
  const maxPageView = Math.max(...pagesChart.map((page) => page.value));

  const sidebarElement = (
    <div className="relative z-30 flex h-full flex-col bg-layer-2 shadow">
      <div className="flex flex-1 flex-col overflow-y-auto">
        {/* Logo */}
        <div className="mt-5 h-8 flex-shrink-0 px-4 text-heading">
          <svg
            viewBox="0 0 233 38"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full"
          >
            <path
              d="M0 37.9999H31.062L45.526 25.2937H14.7011L0 37.9999Z"
              fillOpacity="0.5"
            />
            <path
              d="M45.5264 25.2938H14.4644L0.000392914 12.7063H30.8253L45.5264 25.2938Z"
              fillOpacity="0.8"
            />
            <path d="M0 12.7064H31.062L45.526 0.000110626H14.7011L0 12.7064Z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M157.151 10.4691L157.176 10.5121L162.137 7.64336V31.0121H157.151V10.4691ZM200.848 10.2374L205.834 7.35432V19.8407H206.103L211.861 13.0066H217.584L210.913 20.8019L217.923 31.0121H212.083L207.18 23.756L205.834 25.2916V31.0121H200.848V10.2374ZM73.8279 13.9092H68.9711C68.7838 12.0219 67.2975 10.92 64.8749 10.92C62.3938 10.92 61.0245 12.0571 61.0245 13.6044C60.9894 15.3276 62.7332 16.1013 64.8164 16.5819L66.9698 17.0977C71.1362 18.0355 74.1439 20.1572 74.1556 24.1545C74.1439 28.5504 70.7032 31.352 64.8515 31.352C59.035 31.352 55.325 28.6676 55.1963 23.4746H60.1C60.2638 25.8777 62.1598 27.0968 64.793 27.0968C67.3677 27.0968 69.0296 25.9011 69.0413 24.1428C69.0296 22.5251 67.5784 21.7749 64.9685 21.1419L62.3587 20.4854C58.3094 19.5125 55.8166 17.4845 55.8283 13.9444C55.8049 9.58365 59.6552 6.67651 64.91 6.67651C70.2467 6.67651 73.7577 9.63054 73.8279 13.9092ZM86.6316 28.5152C85.7539 30.1915 84.0335 31.352 81.3768 31.352C77.9478 31.352 75.4081 29.5468 75.4081 25.9832C75.4081 21.9624 78.6032 20.7668 82.161 20.4385C85.2857 20.1338 86.5146 19.9814 86.5146 18.8208V18.7505C86.5146 17.2735 85.5432 16.4178 83.8462 16.4178C82.0556 16.4178 80.9906 17.2969 80.6512 18.4926L76.0401 18.1175C76.7306 14.8353 79.5628 12.7721 83.8696 12.7721C87.8722 12.7721 91.5002 14.5774 91.5002 18.8677V31.0121H86.7721V28.5152H86.6316ZM80.1714 25.8191C80.1714 27.1906 81.2715 27.9057 82.8046 27.9057C84.9932 27.9057 86.5497 26.4638 86.5497 24.5765V22.6658C85.9528 23.0643 84.1739 23.3222 83.0855 23.4746C81.33 23.7208 80.1714 24.4124 80.1714 25.8191ZM98.8464 31.352C101.503 31.352 103.223 30.1915 104.101 28.5152H104.242V31.0121H108.97V18.8677C108.97 14.5774 105.342 12.7721 101.339 12.7721C97.0323 12.7721 94.2001 14.8353 93.5097 18.1175L98.1207 18.4926C98.4601 17.2969 99.5251 16.4178 101.316 16.4178C103.013 16.4178 103.984 17.2735 103.984 18.7505V18.8208C103.984 19.9814 102.755 20.1338 99.6305 20.4385C96.0727 20.7668 92.8777 21.9624 92.8777 25.9832C92.8777 29.5468 95.4173 31.352 98.8464 31.352ZM100.274 27.9057C98.741 27.9057 97.6409 27.1906 97.6409 25.8191C97.6409 24.4124 98.7995 23.7208 100.555 23.4746C101.643 23.3222 103.422 23.0643 104.019 22.6658V24.5765C104.019 26.4638 102.463 27.9057 100.274 27.9057ZM129.143 13.9092H124.286C124.099 12.0219 122.612 10.92 120.19 10.92C117.709 10.92 116.339 12.0571 116.339 13.6044C116.304 15.3276 118.048 16.1013 120.131 16.5819L122.285 17.0977C126.451 18.0355 129.459 20.1572 129.47 24.1545C129.459 28.5504 126.018 31.352 120.166 31.352C114.35 31.352 110.64 28.6676 110.511 23.4746H115.415C115.579 25.8777 117.474 27.0968 120.108 27.0968C122.682 27.0968 124.344 25.9011 124.356 24.1428C124.344 22.5251 122.893 21.7749 120.283 21.1419L117.673 20.4854C113.624 19.5125 111.131 17.4845 111.143 13.9444C111.12 9.58365 114.97 6.67651 120.225 6.67651C125.561 6.67651 129.072 9.63054 129.143 13.9092ZM137.211 31.0121H147.451C152.835 31.0121 155.702 28.1987 155.702 24.3772C155.702 20.8254 153.163 18.6802 150.436 18.5512V18.3168C152.928 17.7541 154.766 15.984 154.766 13.159C154.766 9.56021 152.098 7.00474 146.808 7.00474H137.211V31.0121ZM142.278 26.8624V20.4854H146.527C148.961 20.4854 150.471 21.8921 150.471 23.8732C150.471 25.6784 149.242 26.8624 146.41 26.8624H142.278ZM142.278 17.0508V11.1076H146.129C148.376 11.1076 149.652 12.2681 149.652 14.003C149.652 15.902 148.107 17.0508 146.035 17.0508H142.278ZM172.391 31.3637C177.844 31.3637 181.238 27.6243 181.238 22.0797C181.238 16.4998 177.844 12.7721 172.391 12.7721C166.937 12.7721 163.543 16.4998 163.543 22.0797C163.543 27.6243 166.937 31.3637 172.391 31.3637ZM172.414 27.4954C169.898 27.4954 168.611 25.1861 168.611 22.0445C168.611 18.9029 169.898 16.5819 172.414 16.5819C174.884 16.5819 176.171 18.9029 176.171 22.0445C176.171 25.1861 174.884 27.4954 172.414 27.4954ZM199.411 24.4124C199.177 28.5504 196.169 31.3637 191.383 31.3637C185.847 31.3637 182.535 27.554 182.535 22.0797C182.535 16.5584 185.905 12.7721 191.359 12.7721C196.052 12.7721 199.2 15.5034 199.411 19.6649H194.706C194.437 17.8713 193.267 16.6639 191.441 16.6639C189.124 16.6639 187.602 18.6098 187.602 22.0093C187.602 25.4557 189.112 27.4133 191.441 27.4133C193.15 27.4133 194.414 26.3349 194.706 24.4124H199.411ZM224.936 12.7721C229.477 12.7721 232.145 14.8235 232.59 18.141L228.026 18.4223C227.78 17.2618 226.75 16.3123 225.018 16.3123C223.473 16.3123 222.256 17.0156 222.268 18.0941C222.256 18.9615 222.876 19.5359 224.55 19.8993L227.803 20.5558C231.291 21.2708 232.988 22.8299 233 25.4322C232.988 28.9841 229.652 31.3637 224.994 31.3637C220.231 31.3637 217.305 29.242 216.837 25.7956L221.741 25.5377C222.045 27.003 223.227 27.765 225.006 27.765C226.75 27.765 227.909 27.003 227.932 25.9363C227.909 25.0337 227.195 24.4593 225.626 24.1428L222.513 23.5215C219.002 22.8182 217.305 21.0715 217.317 18.3754C217.305 14.9056 220.337 12.7721 224.936 12.7721Z"
            />
          </svg>
        </div>
        <div className="mt-5 space-y-1 px-1 sm:px-2">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`${
                  link.isActive
                    ? "bg-layer-3 text-heading"
                    : "text-text hover:bg-layer-3 hover:text-heading"
                } group relative flex items-center rounded-xl px-2 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-heading/80`}
              >
                <Icon className="mr-3 h-6 w-6 flex-shrink-0" />
                <span className="flex-1 font-semibold">{link.label}</span>
                {link.notificationCount ? (
                  <span className="ml-3 inline-block rounded-lg bg-primary py-0.5 px-2 text-sm font-semibold text-white">
                    {link.notificationCount}
                  </span>
                ) : null}
              </a>
            );
          })}
        </div>
      </div>
      <div className="mb-2 space-y-1 px-1 sm:px-2">
        {bottomLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              className={`${
                link.isActive
                  ? "bg-layer-3 text-heading"
                  : "text-text hover:bg-layer-3 hover:text-heading"
              } group relative flex items-center rounded-xl px-2 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-heading/80`}
            >
              <Icon className="mr-3 h-6 w-6 flex-shrink-0" />
              <span className="flex-1 font-semibold">{link.label}</span>
              {link.notificationCount ? (
                <span className="ml-3 inline-block rounded-lg bg-primary py-0.5 px-2 text-sm font-semibold text-white">
                  {link.notificationCount}
                </span>
              ) : null}
            </a>
          );
        })}
      </div>
    </div>
  );

  const navbarElement = (
    <nav className="relative z-20 flex h-16 flex-1 shrink-0 items-center space-x-2 bg-layer-2 px-4 shadow sm:px-6">
      <div className="flex items-center space-x-2 md:hidden">
        <button
          type="button"
          onClick={openSidebar}
          className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none border-transparent bg-transparent p-2.5 font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
        >
          <MenuAlt1Icon className="h-6 w-6" />
        </button>
        {/* Logo */}
        <div className="h-7 text-heading">
          <svg
            viewBox="0 0 233 38"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full"
          >
            <path
              d="M0 37.9999H31.062L45.526 25.2937H14.7011L0 37.9999Z"
              fillOpacity="0.5"
            />
            <path
              d="M45.5264 25.2938H14.4644L0.000392914 12.7063H30.8253L45.5264 25.2938Z"
              fillOpacity="0.8"
            />
            <path d="M0 12.7064H31.062L45.526 0.000110626H14.7011L0 12.7064Z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M157.151 10.4691L157.176 10.5121L162.137 7.64336V31.0121H157.151V10.4691ZM200.848 10.2374L205.834 7.35432V19.8407H206.103L211.861 13.0066H217.584L210.913 20.8019L217.923 31.0121H212.083L207.18 23.756L205.834 25.2916V31.0121H200.848V10.2374ZM73.8279 13.9092H68.9711C68.7838 12.0219 67.2975 10.92 64.8749 10.92C62.3938 10.92 61.0245 12.0571 61.0245 13.6044C60.9894 15.3276 62.7332 16.1013 64.8164 16.5819L66.9698 17.0977C71.1362 18.0355 74.1439 20.1572 74.1556 24.1545C74.1439 28.5504 70.7032 31.352 64.8515 31.352C59.035 31.352 55.325 28.6676 55.1963 23.4746H60.1C60.2638 25.8777 62.1598 27.0968 64.793 27.0968C67.3677 27.0968 69.0296 25.9011 69.0413 24.1428C69.0296 22.5251 67.5784 21.7749 64.9685 21.1419L62.3587 20.4854C58.3094 19.5125 55.8166 17.4845 55.8283 13.9444C55.8049 9.58365 59.6552 6.67651 64.91 6.67651C70.2467 6.67651 73.7577 9.63054 73.8279 13.9092ZM86.6316 28.5152C85.7539 30.1915 84.0335 31.352 81.3768 31.352C77.9478 31.352 75.4081 29.5468 75.4081 25.9832C75.4081 21.9624 78.6032 20.7668 82.161 20.4385C85.2857 20.1338 86.5146 19.9814 86.5146 18.8208V18.7505C86.5146 17.2735 85.5432 16.4178 83.8462 16.4178C82.0556 16.4178 80.9906 17.2969 80.6512 18.4926L76.0401 18.1175C76.7306 14.8353 79.5628 12.7721 83.8696 12.7721C87.8722 12.7721 91.5002 14.5774 91.5002 18.8677V31.0121H86.7721V28.5152H86.6316ZM80.1714 25.8191C80.1714 27.1906 81.2715 27.9057 82.8046 27.9057C84.9932 27.9057 86.5497 26.4638 86.5497 24.5765V22.6658C85.9528 23.0643 84.1739 23.3222 83.0855 23.4746C81.33 23.7208 80.1714 24.4124 80.1714 25.8191ZM98.8464 31.352C101.503 31.352 103.223 30.1915 104.101 28.5152H104.242V31.0121H108.97V18.8677C108.97 14.5774 105.342 12.7721 101.339 12.7721C97.0323 12.7721 94.2001 14.8353 93.5097 18.1175L98.1207 18.4926C98.4601 17.2969 99.5251 16.4178 101.316 16.4178C103.013 16.4178 103.984 17.2735 103.984 18.7505V18.8208C103.984 19.9814 102.755 20.1338 99.6305 20.4385C96.0727 20.7668 92.8777 21.9624 92.8777 25.9832C92.8777 29.5468 95.4173 31.352 98.8464 31.352ZM100.274 27.9057C98.741 27.9057 97.6409 27.1906 97.6409 25.8191C97.6409 24.4124 98.7995 23.7208 100.555 23.4746C101.643 23.3222 103.422 23.0643 104.019 22.6658V24.5765C104.019 26.4638 102.463 27.9057 100.274 27.9057ZM129.143 13.9092H124.286C124.099 12.0219 122.612 10.92 120.19 10.92C117.709 10.92 116.339 12.0571 116.339 13.6044C116.304 15.3276 118.048 16.1013 120.131 16.5819L122.285 17.0977C126.451 18.0355 129.459 20.1572 129.47 24.1545C129.459 28.5504 126.018 31.352 120.166 31.352C114.35 31.352 110.64 28.6676 110.511 23.4746H115.415C115.579 25.8777 117.474 27.0968 120.108 27.0968C122.682 27.0968 124.344 25.9011 124.356 24.1428C124.344 22.5251 122.893 21.7749 120.283 21.1419L117.673 20.4854C113.624 19.5125 111.131 17.4845 111.143 13.9444C111.12 9.58365 114.97 6.67651 120.225 6.67651C125.561 6.67651 129.072 9.63054 129.143 13.9092ZM137.211 31.0121H147.451C152.835 31.0121 155.702 28.1987 155.702 24.3772C155.702 20.8254 153.163 18.6802 150.436 18.5512V18.3168C152.928 17.7541 154.766 15.984 154.766 13.159C154.766 9.56021 152.098 7.00474 146.808 7.00474H137.211V31.0121ZM142.278 26.8624V20.4854H146.527C148.961 20.4854 150.471 21.8921 150.471 23.8732C150.471 25.6784 149.242 26.8624 146.41 26.8624H142.278ZM142.278 17.0508V11.1076H146.129C148.376 11.1076 149.652 12.2681 149.652 14.003C149.652 15.902 148.107 17.0508 146.035 17.0508H142.278ZM172.391 31.3637C177.844 31.3637 181.238 27.6243 181.238 22.0797C181.238 16.4998 177.844 12.7721 172.391 12.7721C166.937 12.7721 163.543 16.4998 163.543 22.0797C163.543 27.6243 166.937 31.3637 172.391 31.3637ZM172.414 27.4954C169.898 27.4954 168.611 25.1861 168.611 22.0445C168.611 18.9029 169.898 16.5819 172.414 16.5819C174.884 16.5819 176.171 18.9029 176.171 22.0445C176.171 25.1861 174.884 27.4954 172.414 27.4954ZM199.411 24.4124C199.177 28.5504 196.169 31.3637 191.383 31.3637C185.847 31.3637 182.535 27.554 182.535 22.0797C182.535 16.5584 185.905 12.7721 191.359 12.7721C196.052 12.7721 199.2 15.5034 199.411 19.6649H194.706C194.437 17.8713 193.267 16.6639 191.441 16.6639C189.124 16.6639 187.602 18.6098 187.602 22.0093C187.602 25.4557 189.112 27.4133 191.441 27.4133C193.15 27.4133 194.414 26.3349 194.706 24.4124H199.411ZM224.936 12.7721C229.477 12.7721 232.145 14.8235 232.59 18.141L228.026 18.4223C227.78 17.2618 226.75 16.3123 225.018 16.3123C223.473 16.3123 222.256 17.0156 222.268 18.0941C222.256 18.9615 222.876 19.5359 224.55 19.8993L227.803 20.5558C231.291 21.2708 232.988 22.8299 233 25.4322C232.988 28.9841 229.652 31.3637 224.994 31.3637C220.231 31.3637 217.305 29.242 216.837 25.7956L221.741 25.5377C222.045 27.003 223.227 27.765 225.006 27.765C226.75 27.765 227.909 27.003 227.932 25.9363C227.909 25.0337 227.195 24.4593 225.626 24.1428L222.513 23.5215C219.002 22.8182 217.305 21.0715 217.317 18.3754C217.305 14.9056 220.337 12.7721 224.936 12.7721Z"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-1 space-x-1.5">
        <div className="hidden md:block">
          <div>
            <label
              htmlFor="Search"
              className="sr-only block text-sm font-semibold text-heading"
            >
              Search
            </label>
            <div className="relative flex">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex flex-shrink-0 items-center pl-4 focus-within:z-20">
                <SearchIcon className="h-5 w-5 text-text" />
              </div>
              <input
                id="price"
                name="price"
                placeholder="Search"
                className="block w-full rounded-xl border-2 border-layer-3 bg-muted-1 px-4 py-2.5 pl-11 pr-14 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex flex-shrink-0 items-center pr-4 focus-within:z-20">
                <kbd className="rounded-md bg-muted-3 px-2 py-1 font-sans text-sm text-text">
                  ⌘ K
                </kbd>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-shrink-0 items-center space-x-3">
        <button
          type="button"
          className="inline-flex hidden cursor-pointer items-center justify-center rounded-xl border-none border-transparent bg-transparent p-2.5 font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text sm:flex"
        >
          <BellIcon className="h-6 w-6" />
        </button>
        <button
          type="button"
          className="inline-flex hidden cursor-pointer items-center justify-center rounded-xl border-none border-transparent bg-transparent p-2.5 font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text sm:flex"
        >
          <MoonIcon className="h-6 w-6" />
        </button>
        <Menu as="div" className="relative">
          <Menu.Button type="button">
            <img
              src="/assets/avatars/nicholas-turner.png"
              alt="avatar"
              className="inline-block h-8 w-8 rounded-full"
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl bg-layer-3 py-3 shadow-xl focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-muted-1 text-heading" : "text-text"
                    } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-semibold`}
                  >
                    Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-muted-1 text-heading" : "text-text"
                    } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-semibold`}
                  >
                    Settings
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-muted-1 text-heading" : "text-text"
                    } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-semibold`}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );

  return (
    <div className="flex h-screen w-screen">
      <div className="hidden w-64 flex-shrink-0 md:block">{sidebarElement}</div>

      <div className="relative w-full flex-1 md:overflow-hidden">
        {navbarElement}

        <div className="md:absolute md:inset-x-0 md:top-16 md:bottom-0">
          <div className="h-full py-8 px-6 scrollbar md:overflow-y-auto md:px-8">
            {/* Settings Screen Content */}
            <main className="mx-auto max-w-content-xl">
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="text-sm font-semibold">
                <ol className="flex items-center space-x-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-2 text-heading"
                    >
                      <HomeIcon className="h-5 w-5" />
                      <span>Home</span>
                    </a>
                  </li>
                </ol>
              </nav>

              <header className="mt-6 flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
                <h1 className="text-3xl font-semibold text-heading">
                  Dashboard
                </h1>
                <div className="flex space-x-2">
                  <div className="relative w-full lg:w-auto">
                    <button
                      type="button"
                      className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 text-sm font-semibold  text-text shadow-sm hover:text-heading focus:text-heading focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-text dark:focus:ring-white/80"
                    >
                      <FilterIcon className="mr-2 h-5 w-5" />
                      Filter
                    </button>
                  </div>
                  <div className="w-full lg:w-auto">
                    <label
                      htmlFor="range"
                      className="sr-only block text-sm font-semibold text-heading"
                    >
                      Range
                    </label>
                    <div className="relative flex">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex flex-shrink-0 items-center pl-4 focus-within:z-20">
                        <CalendarIcon className="h-5 w-5 text-text" />
                      </div>
                      <select
                        id="range"
                        name="range"
                        className="block w-full rounded-xl border-2 border-muted-3 bg-transparent py-2.5 pl-11 pl-4 pr-8 font-medium text-text focus:border-primary disabled:opacity-30 sm:text-sm"
                      >
                        <option>This week</option>
                        <option>This month</option>
                        <option>This quarter</option>
                        <option>This year</option>
                      </select>
                    </div>
                  </div>
                </div>
              </header>

              <div className="mt-4 flex flex-col space-y-6 md:mt-5 xl:grid xl:grid-cols-2 xl:gap-4 xl:space-y-0">
                <div className="rounded-xl bg-layer-2">
                  <LineChartSection
                    title="Monthly Recurring Revenue"
                    value="$15,356"
                    difference={24.2}
                    chartData={mrrChartData}
                    chartOptions={mrrChartOptions}
                  />
                </div>

                <div className="rounded-xl bg-layer-2">
                  <LineChartSection
                    title="Net Revenue"
                    value="$168,024"
                    difference={16.2}
                    chartData={netRevenueChartData}
                    chartOptions={netRevenueChartOptions}
                  />
                </div>

                <div className="col-span-2 rounded-xl bg-layer-2">
                  <BarChartSection
                    title="New Users"
                    value="36"
                    difference={-0.2}
                    chartData={newUsersChartData}
                    chartOptions={newUsersChartOptions}
                  />
                </div>

                <div className="rounded-xl bg-layer-2 py-6 px-8">
                  <h2 className="text-lg font-semibold text-heading">
                    Top Referral Sources
                  </h2>
                  <div className="mt-4 flex items-center justify-between text-sm font-semibold text-text">
                    <div>Source</div>
                    <div className="w-10">Views</div>
                  </div>
                  <div className="mt-1 space-y-1">
                    {sourcesChart.map((source) => (
                      <div
                        key={source.value}
                        className="flex items-center justify-between space-x-12"
                      >
                        <HorizontalBar
                          value={source.value}
                          maxValue={maxSourceView}
                          label={source.label}
                        />
                        <div className="w-10 text-xs text-heading">
                          {numberFormatter.format(source.value)}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-transparent bg-transparent px-3 py-2 text-xs font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
                    >
                      More details
                    </button>
                  </div>
                </div>

                <div className="rounded-xl bg-layer-2 py-6 px-8">
                  <h2 className="text-lg font-semibold text-heading">
                    Top Pages
                  </h2>
                  <div className="mt-4 flex items-center justify-between text-sm font-semibold text-text">
                    <div>Page</div>
                    <div className="w-10">Views</div>
                  </div>
                  <div className="mt-1 space-y-1">
                    {pagesChart.map((page) => (
                      <div
                        key={page.value}
                        className="flex items-center justify-between space-x-12"
                      >
                        <HorizontalBar
                          value={page.value}
                          maxValue={maxPageView}
                          label={page.label}
                        />
                        <div className="w-10 text-xs text-heading">
                          {numberFormatter.format(page.value)}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-transparent bg-transparent px-3 py-2 text-xs font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
                    >
                      More details
                    </button>
                  </div>
                </div>

                <div className="col-span-2 rounded-xl bg-layer-2 px-8 py-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-heading">
                      Recent Customers
                    </h2>
                    <div>
                      <label
                        htmlFor="search"
                        className="sr-only block text-sm font-semibold text-heading"
                      >
                        Search
                      </label>
                      <div className="relative flex">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex flex-shrink-0 items-center pl-4 focus-within:z-20">
                          <SearchIcon className="h-5 w-5 text-text" />
                        </div>
                        <input
                          id="search"
                          name="search"
                          placeholder="Quick Search"
                          className="block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 pl-11 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 overflow-x-auto scrollbar">
                    <table className="w-full">
                      <thead className="text-xs font-semibold uppercase text-text">
                        <tr>
                          <th className="whitespace-nowrap bg-layer-2 py-3 px-4 text-left font-semibold text-text">
                            Client/Invoice
                          </th>
                          <th className="whitespace-nowrap bg-layer-2 py-3 px-4 text-left font-semibold text-text">
                            Email
                          </th>
                          <th className="whitespace-nowrap bg-layer-2 py-3 px-4 text-left font-semibold text-text">
                            Payment Method
                          </th>
                          <th className="whitespace-nowrap bg-layer-2 py-3 px-4 text-left font-semibold text-text">
                            Created
                          </th>
                          <th className="whitespace-nowrap bg-layer-2 py-3 px-4 text-left font-semibold text-text">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-sm font-medium">
                        {recentCustomers.map((customer, index) => {
                          const isHighlighted = index % 2 === 0;
                          return (
                            <tr key={customer.email}>
                              <td
                                className={`${
                                  isHighlighted ? "bg-layer-3" : "bg-layer-2"
                                } whitespace-nowrap py-3 px-4 text-heading`}
                              >
                                {customer.client}
                              </td>
                              <td
                                className={`${
                                  isHighlighted ? "bg-layer-3" : "bg-layer-2"
                                } whitespace-nowrap py-3 px-4 text-heading`}
                              >
                                {customer.email}
                              </td>
                              <td
                                className={`${
                                  isHighlighted ? "bg-layer-3" : "bg-layer-2"
                                } whitespace-nowrap py-3 px-4 text-heading`}
                              >
                                <div className="flex items-center space-x-2">
                                  <div className="w-8 flex-shrink-0">
                                    <img
                                      src={
                                        paymentMethodThumbnailImageMapper[
                                          customer.paymentMethod.type
                                        ]
                                      }
                                      alt={`${customer.paymentMethod.type} logo`}
                                    />
                                  </div>
                                  <span>
                                    •••• {customer.paymentMethod.last4}
                                  </span>
                                </div>
                              </td>
                              <td
                                className={`${
                                  isHighlighted ? "bg-layer-3" : "bg-layer-2"
                                } whitespace-nowrap py-3 px-4 text-heading`}
                              >
                                {customer.createdAtString}
                              </td>
                              <td
                                className={`${
                                  isHighlighted ? "bg-layer-3" : "bg-layer-2"
                                } whitespace-nowrap py-0 px-4 text-heading`}
                              >
                                <button
                                  type="button"
                                  className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none border-transparent bg-transparent p-2 font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
                                >
                                  <DotsHorizontalIcon className="h-4 w-4" />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-2 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-transparent bg-transparent px-3 py-2 text-xs font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
                    >
                      View all records
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Transition appear show={isSidebarOpen} as={Fragment}>
        <Dialog as="div" onClose={closeSidebar}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-layer-1/60 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex h-full w-screen max-w-xs flex-col bg-layer-2 shadow-2xl">
                <div className="absolute -right-14 top-0 flex w-14 justify-center pt-2">
                  <button
                    type="button"
                    onClick={closeSidebar}
                    className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none border-transparent bg-transparent p-2 font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-5 w-5" />
                  </button>
                </div>
                {sidebarElement}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

type LineChartSectionProps = {
  title: string;
  value: string;
  difference: number;
  chartData: ChartProps<"line">["data"];
  chartOptions: ChartProps<"line">["options"];
};

function LineChartSection({
  title,
  value,
  difference,
  chartData,
  chartOptions,
}: LineChartSectionProps) {
  const DifferenceIcon =
    difference > 0 ? ArrowCircleUpIcon : ArrowCircleDownIcon;

  return (
    <div className="w-full px-8 py-6">
      <dt className="text-lg font-semibold text-heading">{title}</dt>
      <div className="mt-2" />
      <div className="flex items-center space-x-4">
        <dd className="text-3xl font-semibold text-heading">{value}</dd>
        <dd
          className={`flex items-center space-x-2 ${
            difference > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          <DifferenceIcon className="h-5 w-5" />
          <span className="text-lg font-semibold">{Math.abs(difference)}%</span>
        </dd>
      </div>
      <div className="mt-5" />

      <Line width={1000} height={366} data={chartData} options={chartOptions} />
    </div>
  );
}

type BarChartSectionProps = {
  title: string;
  value: string;
  difference: number;
  chartData: ChartProps<"bar">["data"];
  chartOptions: ChartProps<"bar">["options"];
};

function BarChartSection({
  title,
  value,
  difference,
  chartData,
  chartOptions,
}: BarChartSectionProps) {
  const DifferenceIcon =
    difference > 0 ? ArrowCircleUpIcon : ArrowCircleDownIcon;

  return (
    <div className="py-6 px-8">
      <div className="flex justify-between">
        <div>
          <dt className="text-lg font-semibold text-heading">{title}</dt>
          <div className="mt-2" />
          <div className="flex items-center space-x-4">
            <dd className="text-3xl font-semibold text-heading">{value}</dd>
            <dd
              className={`flex items-center space-x-2 ${
                difference > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              <DifferenceIcon className="h-5 w-5" />
              <span className="text-lg font-semibold">
                {Math.abs(difference)}%
              </span>
            </dd>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-transparent bg-transparent px-3 py-2 text-xs font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
          >
            View all
          </button>
        </div>
      </div>

      <div className="mt-5" />

      <Bar width={1000} height={238} data={chartData} options={chartOptions} />
    </div>
  );
}

type HorizontalBarProps = {
  label: ReactNode;
  value: number;
  maxValue: number;
};

function HorizontalBar({ label, value, maxValue }: HorizontalBarProps) {
  return (
    <div className="relative flex h-8 flex-1 items-center">
      <div
        style={{ width: `${(value / maxValue) * 100}%` }}
        className="absolute inset-y-0 left-0 z-10 rounded-r-md bg-layer-3"
      />
      <div className="z-20 pl-2 text-xs text-heading">{label}</div>
    </div>
  );
}

// Helpers
const numberFormatter = Intl.NumberFormat("en", { notation: "compact" });

// Fixtures
const allMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const mrrChartData = {
  labels: allMonths,
  datasets: [
    {
      label: "",
      data: [
        40, 1400, 3900, 5400, 5400, 4700, 9200, 10800, 10200, 14000, 17500,
        19500,
      ],
    },
  ],
};

const mrrChartOptions = {
  scales: {
    y: {
      min: 0,
      ticks: { stepSize: 5000 },
    },
  },
  plugins: { legend: { display: false } },
};

export const netRevenueChartData = {
  labels: allMonths,
  datasets: [
    {
      label: "",
      data: [
        40, 5000, 7000, 7500, 25000, 60000, 83333, 125000, 115000, 160000,
        175000, 195000,
      ],
    },
  ],
};

export const netRevenueChartOptions = {
  scales: {
    y: {
      min: 0,
      ticks: { stepSize: 50000 },
    },
  },
  plugins: { legend: { display: false } },
};

export const newUsersChartData = {
  labels: allMonths,
  datasets: [
    {
      label: "",
      data: [50, 105, 290, 310, 350, 390, 410, 480, 520, 570, 590, 560],
    },
  ],
};

export const newUsersChartOptions = { plugins: { legend: { display: false } } };

export const sourcesChart = [
  {
    label: (
      <div className="flex items-center">
        <svg viewBox="0 0 48 48" className="mr-4 h-6 w-6">
          <path
            fill="#FFC107"
            d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
          />
          <path
            fill="#FF3D00"
            d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
          />
          <path
            fill="#4CAF50"
            d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
          />
          <path
            fill="#1976D2"
            d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
          />
        </svg>
        Google
      </div>
    ),
    value: 30900,
  },
  {
    label: (
      <div className="flex items-center">
        <svg viewBox="0 0 24 24" className="mr-4 h-6 w-6">
          <path
            d="M0 0H24V24H0V0ZM12.8 13.446L17.139 5.143H15.268C13.8393 7.82167 12.893 9.75033 12.429 10.929L12.054 11.889L11.734 11.139C10.8752 8.98934 9.8653 6.90313 8.712 4.896L8.841 5.139H6.857L11.143 13.339V18.859H12.8V13.446Z"
            fill="#F37E12"
          />
        </svg>
        Hacker News
      </div>
    ),
    value: 25300,
  },
  {
    label: (
      <div className="flex items-center">
        <svg viewBox="0 0 25 24" className="mr-4 h-6 w-6">
          <path
            d="M4.16553 6H7.16553V18H4.16553V6ZM10.1655 6H13.1655V10.5H17.1655V6H20.1655V18H17.1655V13.5H13.1655V18H10.1655V6Z"
            fill="white"
          />
        </svg>
        Indie Hackers
      </div>
    ),
    value: 22100,
  },
  {
    label: (
      <div className="flex items-center">
        <svg viewBox="0 0 25 24" className="mr-4 h-6 w-6">
          <g clipPath="url(#clip0_631_1521)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.1655 0C5.53553 0 0.165527 5.37 0.165527 12C0.165527 17.31 3.60053 21.795 8.37053 23.385C8.97053 23.49 9.19553 23.13 9.19553 22.815C9.19553 22.53 9.18053 21.585 9.18053 20.58C6.16553 21.135 5.38553 19.845 5.14553 19.17C5.01053 18.825 4.42553 17.76 3.91553 17.475C3.49553 17.25 2.89553 16.695 3.90053 16.68C4.84553 16.665 5.52053 17.55 5.74553 17.91C6.82553 19.725 8.55053 19.215 9.24053 18.9C9.34553 18.12 9.66053 17.595 10.0055 17.295C7.33553 16.995 4.54553 15.96 4.54553 11.37C4.54553 10.065 5.01053 8.985 5.77553 8.145C5.65553 7.845 5.23553 6.615 5.89553 4.965C5.89553 4.965 6.90053 4.65 9.19553 6.195C10.1555 5.925 11.1755 5.79 12.1955 5.79C13.2155 5.79 14.2355 5.925 15.1955 6.195C17.4905 4.635 18.4955 4.965 18.4955 4.965C19.1555 6.615 18.7355 7.845 18.6155 8.145C19.3805 8.985 19.8455 10.05 19.8455 11.37C19.8455 15.975 17.0405 16.995 14.3705 17.295C14.8055 17.67 15.1805 18.39 15.1805 19.515C15.1805 21.12 15.1655 22.41 15.1655 22.815C15.1655 23.13 15.3905 23.505 15.9905 23.385C18.3727 22.5807 20.4427 21.0497 21.9092 19.0074C23.3757 16.965 24.1648 14.5143 24.1655 12C24.1655 5.37 18.7955 0 12.1655 0Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_631_1521">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.165527)"
              />
            </clipPath>
          </defs>
        </svg>
        GitHub
      </div>
    ),
    value: 12000,
  },
  {
    label: (
      <div className="flex items-center">
        <svg
          viewBox="0 0 25 24"
          fill="currentColor"
          className="text-twitter mr-4 h-6 w-6"
        >
          <path d="M23.8085 4.93708C22.9735 5.30708 22.0765 5.55708 21.1335 5.67008C22.1065 5.08787 22.8345 4.17154 23.1815 3.09208C22.2674 3.63507 21.2669 4.01727 20.2235 4.22208C19.5219 3.47294 18.5926 2.9764 17.5799 2.80955C16.5671 2.6427 15.5276 2.81487 14.6228 3.29933C13.7179 3.78379 12.9983 4.55344 12.5757 5.48878C12.1531 6.42412 12.0511 7.47283 12.2855 8.47208C10.4332 8.37907 8.62117 7.89763 6.96696 7.05898C5.31276 6.22034 3.85338 5.04324 2.68354 3.60408C2.28354 4.29408 2.05354 5.09408 2.05354 5.94608C2.05309 6.71307 2.24197 7.46832 2.60342 8.14481C2.96486 8.8213 3.4877 9.39812 4.12554 9.82408C3.38582 9.80054 2.66241 9.60066 2.01554 9.24108V9.30108C2.01546 10.3768 2.38757 11.4195 3.06872 12.2521C3.74987 13.0847 4.69811 13.656 5.75254 13.8691C5.06632 14.0548 4.34688 14.0821 3.64854 13.9491C3.94604 14.8747 4.52553 15.6841 5.30591 16.264C6.08628 16.8439 7.02846 17.1653 8.00054 17.1831C6.35037 18.4785 4.31243 19.1812 2.21454 19.1781C1.84292 19.1782 1.47162 19.1565 1.10254 19.1131C3.23202 20.4823 5.71088 21.2089 8.24254 21.2061C16.8125 21.2061 21.4975 14.1081 21.4975 7.95208C21.4975 7.75208 21.4925 7.55008 21.4835 7.35008C22.3948 6.69105 23.1814 5.87497 23.8065 4.94008L23.8085 4.93708Z" />
        </svg>
        Twitter
      </div>
    ),
    value: 9000,
  },
  {
    label: (
      <div className="flex items-center">
        <svg viewBox="0 0 25 24" className="mr-4 h-6 w-6">
          <g clipPath="url(#clip0_631_1539)">
            <path
              d="M22.8409 24.0011C23.5724 24.0011 24.1655 23.408 24.1655 22.6765V1.32557C24.1655 0.593945 23.5724 0.000976562 22.8409 0.000976562H1.49012C0.758402 0.000976562 0.165527 0.593945 0.165527 1.32557V22.6765C0.165527 23.408 0.758402 24.0011 1.49012 24.0011H22.8409Z"
              fill="#395185"
            />
            <path
              d="M16.725 24.0012V14.7071H19.8447L20.3117 11.0851H16.725V8.77247C16.725 7.72379 17.0162 7.00913 18.5201 7.00913L20.4381 7.00829V3.76876C20.1062 3.7246 18.9677 3.62598 17.6432 3.62598C14.8778 3.62598 12.9846 5.31394 12.9846 8.41388V11.0851H9.85693V14.7071H12.9846V24.0012H16.725Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_631_1539">
              <rect
                x="0.165527"
                y="0.000976562"
                width="24"
                height="24"
                rx="4"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
        Facebook
      </div>
    ),
    value: 4500,
  },
];

export const pagesChart = [
  {
    label: "/",
    value: 30900,
  },
  {
    label: "/pricing",
    value: 25300,
  },
  {
    label: "/sign-up",
    value: 22100,
  },
  {
    label: "/landing-1",
    value: 12000,
  },
  {
    label: "/landing-2",
    value: 9000,
  },
  {
    label: "/about",
    value: 4500,
  },
];

const recentCustomers = [
  {
    client: "James Kirk",
    email: "james.kirk@gmail.com",
    paymentMethod: { type: "mastercard", last4: "4479" },
    createdAtString: "3/22/22",
  },
  {
    client: "Bilbo Baggins",
    email: "bilbo.baggins@gmail.com",
    paymentMethod: { type: "visa", last4: "4252" },
    createdAtString: "3/20/22",
  },
  {
    client: "Jay Gatsby",
    email: "jay.gatsby@gmail.com",
    paymentMethod: { type: "mastercard", last4: "9342" },
    createdAtString: "2/28/22",
  },
  {
    client: "Frodo Baggins",
    email: "frodo.baggins@gmail.com",
    paymentMethod: { type: "visa", last4: "4267" },
    createdAtString: "2/27/22",
  },
  {
    client: "Harry Potter",
    email: "harry.potter@gmail.com",
    paymentMethod: { type: "visa", last4: "3256" },
    createdAtString: "2/15/22",
  },
  {
    client: "Snoop Dogg",
    email: "snoop.doubleg@gmail.com",
    paymentMethod: { type: "mastercard", last4: "6719" },
    createdAtString: "1/29/22",
  },
];

const paymentMethodThumbnailImageMapper = {
  visa: "/assets/payment-methods/visa-thumbnail.png",
  mastercard: "/assets/payment-methods/mastercard-thumbnail.png",
};
