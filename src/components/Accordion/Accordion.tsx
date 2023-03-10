import { Fragment, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/outline";

export default function Page() {
  return (
    <div className="flex w-96 flex-col space-y-2">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="relative flex w-full items-center justify-between rounded-lg border border-muted-1 bg-layer-2 px-4 py-2 text-sm font-semibold text-heading hover:bg-muted-1 focus:z-10 focus:outline-none focus:ring-2 focus:ring-heading/80 dark:border-0 dark:bg-layer-3">
              What is your refund policy?
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 text-heading" : "text-text"
                } h-5 w-5`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 py-2">
              If you&apos;re unhappy with your purchase for any reason, email us
              within 90 days and we&apos;ll refund you in full, no questions
              asked.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="relative flex w-full items-center justify-between rounded-lg border border-muted-1 bg-layer-2 px-4 py-2 text-sm font-semibold text-heading hover:bg-muted-1 focus:z-10 focus:outline-none focus:ring-2 focus:ring-heading/80 dark:border-0 dark:bg-layer-3">
              Do you offer technical support?
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 text-heading" : "text-text"
                } h-5 w-5`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 py-2">Yes</Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
