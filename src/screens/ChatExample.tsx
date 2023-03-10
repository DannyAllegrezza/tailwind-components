import { Fragment, useState } from "react";
import { Menu, Dialog, Disclosure, Tab, Transition } from "@headlessui/react";
import {
  HomeIcon,
  ChatAltIcon,
  ChartSquareBarIcon,
  TrendingUpIcon,
  UsersIcon,
  CogIcon,
  LogoutIcon,
  SearchIcon,
  MenuAlt1Icon,
  XIcon,
  PlusIcon,
  EmojiHappyIcon,
  DotsHorizontalIcon,
  UserIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline";

const links = [
  { label: "Home", icon: HomeIcon, href: "#", isActive: false },
  {
    label: "Messages",
    icon: ChatAltIcon,
    href: "#",
    isActive: true,
    notificationCount: 5,
  },
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

export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUserDrawerOpen, setIsUserDrawerOpen] = useState(false);

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  function openSidebar() {
    setIsSidebarOpen(true);
  }

  function closeUserDrawer() {
    setIsUserDrawerOpen(false);
  }

  function openUserDrawer() {
    setIsUserDrawerOpen(true);
  }

  const iconSidebarElement = (
    <div className="flex h-full flex-col">
      <div className="flex flex-1 flex-col overflow-y-auto">
        {/* Logo */}
        <div className="mt-5 h-8 flex-shrink-0 px-4 text-heading">
          <svg
            viewBox="0 0 40 34"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full"
          >
            <path
              d="M9.15527e-05 33.3334H27.2917L40 22.1876H12.9167L9.15527e-05 33.3334Z"
              fillOpacity="0.5"
            />
            <path
              d="M40.0003 22.1874H12.7086L0.000320435 11.1457H27.0836L40.0003 22.1874Z"
              fillOpacity="0.7"
            />
            <path d="M9.15527e-05 11.1459H27.2917L40 5.34058e-05H12.9167L9.15527e-05 11.1459Z" />
          </svg>
        </div>
        <div className="mt-5 space-y-3 px-1 sm:px-2">
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
                } group relative flex h-10 w-10 items-center justify-center rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-heading/80`}
              >
                <Icon className="h-6 w-6 flex-shrink-0" />
                <span className="sr-only">{link.label}</span>
                {link.notificationCount ? (
                  <span className="absolute right-0 top-0 inline-block translate-x-2 -translate-y-2 rounded-lg bg-primary py-0.5 px-1 text-xs font-semibold text-white">
                    {link.notificationCount}
                  </span>
                ) : null}
              </a>
            );
          })}
        </div>
      </div>
      <div className="mb-2 space-y-3 px-1 sm:px-2">
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
              } group relative flex h-10 w-10 items-center justify-center rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-heading/80`}
            >
              <Icon className="h-6 w-6 flex-shrink-0" />
              <span className="sr-only">{link.label}</span>
              {link.notificationCount ? (
                <span className="absolute right-0 top-0 inline-block translate-x-2 -translate-y-2 rounded-lg bg-primary py-0.5 px-1 text-xs font-semibold text-white">
                  {link.notificationCount}
                </span>
              ) : null}
            </a>
          );
        })}
      </div>
    </div>
  );

  const fullSidebarElement = (
    <div className="flex h-full flex-col bg-layer-2">
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
    <nav className="flex h-16 flex-1 flex-shrink-0 items-center space-x-2 bg-layer-2 px-4 shadow">
      <div className="flex items-center space-x-2">
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
    </nav>
  );

  return (
    <div className="flex w-screen flex-col md:flex-row">
      {/* Mobile Navbar */}
      <div className="md:hidden">{navbarElement}</div>

      <div className="hidden w-16 flex-shrink-0 bg-layer-1 md:block">
        {iconSidebarElement}
      </div>

      <div className="flex-1">
        <div className="flex h-full">
          {/* Chat List */}
          <div className="w-full max-w-md bg-layer-2">
            <div className="z-10 flex h-full flex-col overflow-hidden">
              <div className="flex h-16 flex-shrink-0 items-center px-6">
                <h3 className="text-lg font-semibold text-heading">Messages</h3>
              </div>

              <hr className="border-hr dark:border-muted-1" />

              <div className="mt-4 px-6">
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

              <Tab.Group>
                <Tab.List className="mt-4 flex px-6 pb-4">
                  {["all", "unread", "unresolved", "filters"].map((tab) => (
                    <Tab key={tab} as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? "border-primary bg-primary text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
                              : "border-transparent bg-transparent text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:hover:bg-transparent disabled:hover:text-text"
                          } inline-flex basis-full cursor-pointer items-center justify-center rounded-full border-2 px-2 py-1 text-sm font-semibold capitalize focus:outline-none disabled:opacity-30`}
                        >
                          {tab}
                        </button>
                      )}
                    </Tab>
                  ))}
                </Tab.List>

                <hr className="border-hr dark:border-muted-1" />

                <Tab.Panels className="flex-1 overflow-y-auto scrollbar scrollbar-thin">
                  {["all", "unread", "unresolved"].map((tab) => {
                    const chatList = chatLists[tab];
                    return (
                      <Tab.Panel key={tab}>
                        <div className="p-0.5">
                          {chatList.map((chat, index) => (
                            <a
                              key={index}
                              href={chat.chatUser.href}
                              className={`${
                                chat.status === "active" ? "bg-layer-3" : ""
                              } relative flex items-center space-x-2.5 px-6 py-4 hover:bg-layer-3 focus:z-20 focus:outline-none focus:ring-2 focus:ring-heading/80`}
                            >
                              <div className="flex-shrink-0">
                                {chat.status === "unread" ? (
                                  <div className="relative inline-block">
                                    <img
                                      src={chat.chatUser.avatarImg}
                                      alt="avatar"
                                      className="inline-block h-10 w-10 rounded-full"
                                    />
                                    <svg
                                      fill="currentColor"
                                      viewBox="0 0 8 8"
                                      className="absolute -top-0.5 -right-0.5 block h-3.5 w-3.5 rounded-full text-primary"
                                    >
                                      <circle cx={4} cy={4} r={3} />
                                    </svg>
                                  </div>
                                ) : (
                                  <img
                                    src={chat.chatUser.avatarImg}
                                    alt="avatar"
                                    className="inline-block h-10 w-10 rounded-full"
                                  />
                                )}
                              </div>
                              <div>
                                <div className="flex items-center justify-between">
                                  <h3 className="text-base font-semibold text-heading">
                                    {chat.chatUser.name}
                                  </h3>
                                  <div className="flex items-center space-x-2">
                                    <div className="text-sm font-medium text-text">
                                      {chat.latestMessage.latestMessageAtString}
                                    </div>
                                    <div>
                                      <button
                                        type="button"
                                        className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none border-transparent bg-transparent p-2 font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
                                      >
                                        <DotsHorizontalIcon className="h-4 w-4" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <p className="text-sm font-medium text-text line-clamp-1">
                                  {chat.latestMessage.message}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </Tab.Panel>
                    );
                  })}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>

          <main className="flex-1">
            {/* Chat Conversation */}
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="mx-auto flex h-16 w-full max-w-xl items-center justify-between px-6">
                <div className="flex flex-1 items-center space-x-3">
                  <img
                    src={user.avatarImg}
                    alt="avatar"
                    className="inline-block h-10 w-10 rounded-full"
                  />
                  <span className="text-sm font-medium text-text">
                    {user.name}
                  </span>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={openUserDrawer}
                    className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none border-transparent bg-transparent p-2 font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
                  >
                    <DotsHorizontalIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <hr className="border-hr dark:border-muted-1" />

              {/* Content */}
              <div className="mx-auto max-w-xl flex-1 space-y-6 px-6 py-4 sm:py-6">
                {chatMessages.map((message, index) => (
                  // Chat Bubble
                  <div
                    key={index}
                    className={`${
                      message.sentBy === "me" ? "justify-end" : "justify-start"
                    } flex`}
                  >
                    <div
                      className={`${
                        message.sentBy === "me" ? "flex-row-reverse" : ""
                      } flex w-11/12`}
                    >
                      {message.sentBy === "me" ? null : (
                        <>
                          <img
                            src={message.avatar}
                            alt="avatar"
                            className="inline-block h-10 w-10 rounded-full"
                          />
                          <div className="mr-4" />
                        </>
                      )}
                      <div
                        className={`${
                          message.sentBy === "me"
                            ? "rounded-tr-none bg-blue-600"
                            : "rounded-tl-none bg-muted-1"
                        } relative max-w-xl rounded-xl px-4 py-2`}
                      >
                        <span
                          className={`${
                            message.sentBy === "me"
                              ? "text-white"
                              : "text-heading"
                          } text-sm font-medium`}
                        >
                          {message.message}
                        </span>
                        {message.reaction ? (
                          <span
                            className={`${
                              message.sentBy === "me"
                                ? "left-0 -translate-x-5 bg-muted-1"
                                : "right-0 translate-x-5 bg-blue-600"
                            } absolute top-0 flex h-8 w-8 -translate-y-3 transform items-center justify-center rounded-full p-2 text-xs`}
                          >
                            {message.reaction}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <hr className="border-hr dark:border-muted-1" />

              {/* Footer */}
              <div className="mx-auto flex h-16 w-full max-w-xl flex-shrink-0 items-center px-2 shadow-lg sm:px-6">
                <form className="flex flex-1 space-x-2">
                  <div className="flex-1">
                    <label
                      htmlFor="message"
                      className="sr-only block text-sm font-semibold text-heading"
                    >
                      Email
                    </label>
                    <input
                      id="message"
                      name="message"
                      placeholder="Message..."
                      className="block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
                  >
                    Send
                  </button>
                  <button
                    type="button"
                    className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none border-secondary bg-secondary p-2.5 font-semibold text-white shadow-sm hover:border-secondary-accent hover:bg-secondary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-secondary disabled:hover:bg-secondary disabled:hover:text-white dark:focus:ring-white/80"
                  >
                    <EmojiHappyIcon className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none border-secondary bg-secondary p-2.5 font-semibold text-white shadow-sm hover:border-secondary-accent hover:bg-secondary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-secondary disabled:hover:bg-secondary disabled:hover:text-white dark:focus:ring-white/80"
                  >
                    <PlusIcon className="h-6 w-6" />
                  </button>
                </form>
              </div>
            </div>

            {/* User Drawer */}
            <Transition appear show={isUserDrawerOpen} as={Fragment}>
              <Dialog as="div" onClose={closeUserDrawer}>
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

                <div className="fixed inset-0 flex justify-end">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="relative flex h-full w-screen max-w-sm flex-col bg-layer-2 shadow-2xl">
                      <div className="flex h-16 flex-shrink-0 items-center justify-between px-6">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-semibold text-heading"
                        >
                          Visitor Information
                        </Dialog.Title>

                        <button
                          type="button"
                          onClick={closeUserDrawer}
                          className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none border-transparent bg-transparent p-2 font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
                        >
                          <span className="sr-only">Close</span>
                          <XIcon className="h-5 w-5" />
                        </button>
                      </div>

                      <hr className="border-hr" />

                      <div className="flex-1 px-6 py-5 sm:py-6">
                        <div className="flex space-x-4">
                          <img
                            src={user.avatarImg}
                            alt="avatar"
                            className="inline-block h-16 w-16 rounded-full"
                          />
                          <div>
                            <div className="flex">
                              <div className="relative">
                                <h3 className="font-semibold text-heading">
                                  {user.name}
                                </h3>
                                {user.isOnline ? (
                                  <svg
                                    fill="currentColor"
                                    viewBox="0 0 8 8"
                                    className="absolute -right-2.5 top-0 h-2 w-2 text-green-500"
                                  >
                                    <circle cx={4} cy={4} r={3} />
                                  </svg>
                                ) : null}
                              </div>
                            </div>
                            <div className="mt-0.5 text-sm font-semibold text-heading">
                              {user.email}
                            </div>
                            <div className="mt-1 text-xs font-semibold text-text">
                              {user.location}
                            </div>
                          </div>
                        </div>

                        <a
                          href="#"
                          className="mt-8 inline-flex w-full cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
                        >
                          <UserIcon className="mr-2 h-5 w-5" />
                          Visitor Profile
                        </a>

                        <div className="mt-8 flex flex-col space-y-2">
                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="relative flex w-full items-center justify-between rounded-lg border border-muted-1 bg-layer-2 px-4 py-2 text-sm font-semibold text-heading hover:bg-muted-1 focus:z-10 focus:outline-none focus:ring-2 focus:ring-heading/80 dark:border-0 dark:bg-layer-3">
                                  Basic Information
                                  <ChevronUpIcon
                                    className={`${
                                      open
                                        ? "rotate-180 text-heading"
                                        : "text-text"
                                    } h-5 w-5`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 py-6 text-sm text-text">
                                  <dl className="space-y-6">
                                    <div>
                                      <dt className="text-sm text-heading">
                                        Bio
                                      </dt>
                                      <dd className="mt-1 text-sm text-text">
                                        {user.basicInformation.bio}
                                      </dd>
                                    </div>
                                    <div>
                                      <dt className="text-sm text-heading">
                                        Phone
                                      </dt>
                                      <dd className="mt-1 text-sm text-text">
                                        {user.basicInformation.phone}
                                      </dd>
                                    </div>
                                    <div>
                                      <dt className="text-sm text-heading">
                                        Website
                                      </dt>
                                      <dd className="mt-1 text-sm text-text">
                                        {user.basicInformation.website}
                                      </dd>
                                    </div>
                                  </dl>
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>

                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="relative flex w-full items-center justify-between rounded-lg border border-muted-1 bg-layer-2 px-4 py-2 text-sm font-semibold text-heading hover:bg-muted-1 focus:z-10 focus:outline-none focus:ring-2 focus:ring-heading/80 dark:border-0 dark:bg-layer-3">
                                  Assigned Operator
                                  <ChevronUpIcon
                                    className={`${
                                      open
                                        ? "rotate-180 text-heading"
                                        : "text-text"
                                    } h-5 w-5`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 py-6 text-sm text-text">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Velit, facere nesciunt
                                  placeat est tempore excepturi eum quasi
                                  quibusdam voluptatibus qui!
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>

                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="relative flex w-full items-center justify-between rounded-lg border border-muted-1 bg-layer-2 px-4 py-2 text-sm font-semibold text-heading hover:bg-muted-1 focus:z-10 focus:outline-none focus:ring-2 focus:ring-heading/80 dark:border-0 dark:bg-layer-3">
                                  Data
                                  <ChevronUpIcon
                                    className={`${
                                      open
                                        ? "rotate-180 text-heading"
                                        : "text-text"
                                    } h-5 w-5`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 py-6 text-sm text-text">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Velit, facere nesciunt
                                  placeat est tempore excepturi eum quasi
                                  quibusdam voluptatibus qui!
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>

                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="relative flex w-full items-center justify-between rounded-lg border border-muted-1 bg-layer-2 px-4 py-2 text-sm font-semibold text-heading hover:bg-muted-1 focus:z-10 focus:outline-none focus:ring-2 focus:ring-heading/80 dark:border-0 dark:bg-layer-3">
                                  Last Profile Events
                                  <ChevronUpIcon
                                    className={`${
                                      open
                                        ? "rotate-180 text-heading"
                                        : "text-text"
                                    } h-5 w-5`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 py-6 text-sm text-text">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Velit, facere nesciunt
                                  placeat est tempore excepturi eum quasi
                                  quibusdam voluptatibus qui!
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        </div>
                      </div>

                      <div className="flex h-16 flex-shrink-0 items-center justify-center bg-layer-3 px-6 shadow-lg">
                        <button
                          type="button"
                          onClick={closeUserDrawer}
                          className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-critical bg-critical px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-critical-accent hover:bg-critical-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-critical disabled:hover:bg-critical disabled:hover:text-white dark:focus:ring-white/80"
                        >
                          Block User
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition>
          </main>
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
                {fullSidebarElement}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

const user = {
  avatarImg: "/assets/avatars/nicholas-turner.png",
  name: "Nicholas Turner",
  email: "nicholas.turner@gmail.com",
  location: "San Francisco, US",
  href: "#",
  isOnline: true,
  basicInformation: {
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus praesentium, ad quo quia consequuntur voluptatum, suscipit laboriosam qui fugit omnis et amet magni? Mollitia ducimus dolorum, asperiores perferendis quas facere!",
    phone: "(555) 123-4567",
    website: "nicholasturner.com",
  },
};

const message =
  "Lorem ipsum, dolor sit amet consectetur elit est adipisicing. Deserunt sint iusto ut quam incidunt eius! Cum, ipsam aspernatur. Deserunt.";

const chatLists = {
  all: [
    {
      status: "unread",
      chatUser: {
        name: "Cedric Green",
        href: "#",
        avatarImg: "/assets/avatars/cedric-green.png",
      },
      latestMessage: {
        message: message,
        latestMessageAtString: "5min",
      },
    },
    {
      status: "active",
      chatUser: {
        name: "Nicholas Turner",
        href: "#",
        avatarImg: "/assets/avatars/nicholas-turner.png",
      },
      latestMessage: {
        message: message,
        latestMessageAtString: "5min",
      },
    },
    {
      status: "read",
      chatUser: {
        name: "Dianne Russell",
        href: "#",
        avatarImg: "/assets/avatars/dianne-russell.png",
      },
      latestMessage: { message: message, latestMessageAtString: "5min" },
    },
    {
      status: "read",
      chatUser: {
        name: "Randy Warren",
        href: "#",
        avatarImg: "/assets/avatars/randy-warren.png",
      },
      latestMessage: { message: message, latestMessageAtString: "5min" },
    },
    {
      status: "read",
      chatUser: {
        name: "Saul Tran",
        href: "#",
        avatarImg: "/assets/avatars/saul-tran.png",
      },
      latestMessage: { message: message, latestMessageAtString: "5min" },
    },
    {
      status: "read",
      chatUser: {
        name: "Irina Zaytesev",
        href: "#",
        avatarImg: "/assets/avatars/irina-zaytesev.png",
      },
      latestMessage: { message: message, latestMessageAtString: "5min" },
    },
    {
      status: "read",
      chatUser: {
        name: "Pasquale Blanco",
        href: "#",
        avatarImg: "/assets/avatars/pasquale-blanco.png",
      },
      latestMessage: { message: message, latestMessageAtString: "5min" },
    },
    {
      status: "read",
      chatUser: {
        name: "Valentin Burger",
        href: "#",
        avatarImg: "/assets/avatars/valentin-burger.png",
      },
      latestMessage: { message: message, latestMessageAtString: "5min" },
    },
    {
      status: "read",
      chatUser: {
        name: "Kathryn Murphy",
        href: "#",
        avatarImg: "/assets/avatars/kathryn-murphy.png",
      },
      latestMessage: { message: message, latestMessageAtString: "5min" },
    },
    {
      status: "read",
      chatUser: {
        name: "Arlene McCoy",
        href: "#",
        avatarImg: "/assets/avatars/arlene-mccoy.png",
      },
      latestMessage: { message: message, latestMessageAtString: "5min" },
    },
    {
      status: "read",
      chatUser: {
        name: "Annette Black",
        href: "#",
        avatarImg: "/assets/avatars/annette-black.png",
      },
      latestMessage: { message: message, latestMessageAtString: "5min" },
    },
    {
      status: "unread",
      chatUser: {
        name: "Cedric Green",
        href: "#",
        avatarImg: "/assets/avatars/cedric-green.png",
      },
      latestMessage: {
        message: message,
        latestMessageAtString: "5min",
      },
    },
    {
      status: "active",
      chatUser: {
        name: "Nicholas Turner",
        href: "#",
        avatarImg: "/assets/avatars/nicholas-turner.png",
      },
      latestMessage: {
        message: message,
        latestMessageAtString: "5min",
      },
    },
    {
      status: "read",
      chatUser: {
        name: "Dianne Russell",
        href: "#",
        avatarImg: "/assets/avatars/dianne-russell.png",
      },
      latestMessage: { message: message, latestMessageAtString: "5min" },
    },
    {
      status: "read",
      chatUser: {
        name: "Randy Warren",
        href: "#",
        avatarImg: "/assets/avatars/randy-warren.png",
      },
      latestMessage: { message: message, latestMessageAtString: "5min" },
    },
    {
      status: "read",
      chatUser: {
        name: "Saul Tran",
        href: "#",
        avatarImg: "/assets/avatars/saul-tran.png",
      },
      latestMessage: { message: message, latestMessageAtString: "5min" },
    },
    {
      status: "read",
      chatUser: {
        name: "Irina Zaytesev",
        href: "#",
        avatarImg: "/assets/avatars/irina-zaytesev.png",
      },
      latestMessage: { message: message, latestMessageAtString: "5min" },
    },
    {
      status: "read",
      chatUser: {
        name: "Pasquale Blanco",
        href: "#",
        avatarImg: "/assets/avatars/pasquale-blanco.png",
      },
      latestMessage: { message: message, latestMessageAtString: "5min" },
    },
    {
      status: "read",
      chatUser: {
        name: "Valentin Burger",
        href: "#",
        avatarImg: "/assets/avatars/valentin-burger.png",
      },
      latestMessage: { message: message, latestMessageAtString: "5min" },
    },
    {
      status: "read",
      chatUser: {
        name: "Kathryn Murphy",
        href: "#",
        avatarImg: "/assets/avatars/kathryn-murphy.png",
      },
      latestMessage: { message: message, latestMessageAtString: "5min" },
    },
    {
      status: "read",
      chatUser: {
        name: "Arlene McCoy",
        href: "#",
        avatarImg: "/assets/avatars/arlene-mccoy.png",
      },
      latestMessage: { message: message, latestMessageAtString: "5min" },
    },
    {
      status: "read",
      chatUser: {
        name: "Annette Black",
        href: "#",
        avatarImg: "/assets/avatars/annette-black.png",
      },
      latestMessage: { message: message, latestMessageAtString: "5min" },
    },
  ],
  unread: [
    {
      status: "read",
      chatUser: {
        name: "Cedric Green",
        href: "#",
        avatarImg: "/assets/avatars/matthew.png",
      },
      latestMessage: {
        message: message,
        latestMessageAtString: "5min",
      },
    },
  ],
  unresolved: [],
};

const chatMessages = [
  {
    sentBy: "other",
    avatar: "/assets/avatars/nicholas-turner.png",
    message:
      "Hi Matthew, I've submitted my identification, just as you requested.",
  },
  {
    sentBy: "me",
    avatar: "/assets/avatars/matthew.png",
    message:
      "Perfect! Thank you, Nicholas! I will go ahead and approve your account for higher limits 🙌",
    reaction: "🎉",
  },
  {
    sentBy: "other",
    avatar: "/assets/avatars/nicholas-turner.png",
    message: "Great! Thanks so much! 🙂",
    reaction: "👍",
  },
  {
    sentBy: "me",
    avatar: "/assets/avatars/matthew.png",
    message:
      "Your account has been approved for our highest limits tier! We also reduced the taker fee to 0.01%!",
  },
  {
    sentBy: "other",
    avatar: "/assets/avatars/nicholas-turner.png",
    message: "That was fast! Thanks so much Matthew!",
  },
  {
    sentBy: "me",
    avatar: "/assets/avatars/matthew.png",
    message:
      "Sure thing! Let me know if there's anything else I can do for you.",
  },
  {
    sentBy: "other",
    avatar: "/assets/avatars/nicholas-turner.png",
    message: "Much appreciated.",
  },
];
