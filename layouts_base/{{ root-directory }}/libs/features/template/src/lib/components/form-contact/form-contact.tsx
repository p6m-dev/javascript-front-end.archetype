'use client';

import { Input, Button } from '@nax-tech/components-web';

export const ContactForm = () => {
  return (
    <form>
      <p className="mb-4 text-center text-lg font-bold text-sky-500">
        Contact Us
      </p>
      <p className="mb-4 text-center text-sm text-slate-500 dark:text-slate-400">
        If you have any questions, please submit the form below:
      </p>
      <Input
        className="mb-4 border-gray-300 text-sm dark:border-gray-600 dark:bg-slate-700"
        placeholder="Name"
      />
      <Input
        className="mb-4 border-gray-300 text-sm dark:border-gray-600 dark:bg-slate-700"
        placeholder="Email"
        type="email"
        required
      />
      <textarea
        className="focus:border-primary-600 hover:border-primary-500 mb-4 w-full rounded-md border border-gray-300 p-2 text-sm outline-none dark:border-gray-600 dark:bg-slate-700"
        placeholder="Question"
        required
      />
      <Button
        variant="secondary"
        className="mx-auto block w-full border-gray-300 bg-gray-200 dark:border-gray-600 dark:bg-slate-700 dark:text-gray-300 "
      >
        Submit
      </Button>
    </form>
  );
};
