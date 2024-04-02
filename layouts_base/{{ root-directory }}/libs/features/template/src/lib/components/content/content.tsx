import { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconExclamationCircleFilled } from '@nax-tech/icons-web';
import { LogoStorybook, LogoFigma } from '@nax-tech/assets';
import { Navigation } from '../navigation/navigation';
import { Hero } from '../hero/hero';
import { ContactForm } from '../form-contact/form-contact';

interface HeaderProps extends PropsWithChildren {
  anchor: string;
  className?: string;
}

const Header: FC<HeaderProps> = ({ anchor, children, className }) => {
  const classes = twMerge(
    'text-3xl mb-4 text-slate-800 dark:text-slate-100',
    className,
  );
  return (
    <h2 className={classes} id={anchor}>
      {children}
    </h2>
  );
};

interface SubHeaderProps extends PropsWithChildren {
  className?: string;
}

const SubHeader: FC<SubHeaderProps> = ({ className, children }) => {
  const classes = twMerge('text-md font-bold mb-2 text-sky-500', className);
  return <p className={classes}>{children}</p>;
};

interface ParagraphProps extends PropsWithChildren {
  className?: string;
}

const Paragraph: FC<ParagraphProps> = ({ className, children }) => {
  const classes = twMerge('my-4', className);
  return <p className={classes}>{children}</p>;
};

const Shell: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="my-6 rounded-xl bg-slate-900 px-6 py-4 text-white dark:border dark:border-slate-700 dark:bg-slate-800">
      {children}
    </div>
  );
};

interface LinkProps extends PropsWithChildren {
  href: string;
  target?: string;
}

const Link: FC<LinkProps> = ({ href, target, children }) => {
  return (
    <a href={href} className="text-sky-600 hover:underline" target={target}>
      {children}
    </a>
  );
};

export function Content() {
  return (
    <>
      <Hero />
      <div className="container flex lg:gap-20">
        <div className="hidden lg:block">
          <div className="lg:w-64 xl:w-72 2xl:w-80">
            <Navigation />
          </div>
        </div>
        <div className="my-xl text-md flex-1 text-gray-500 dark:text-gray-400">
          <div className="flex flex-col xl:flex-row xl:gap-20">
            <div className="flex-1">
              <SubHeader>Introduction</SubHeader>
              <Header anchor="getting-started">Getting Started</Header>
              <Paragraph>
                Thank you for choosing NAX! We are excited to have you on board.
                This guide will help you get started with NAX Platform front-end
                rapid application development.
              </Paragraph>
              <Paragraph>
                You have generated this project using the NAX Platform CLI and{' '}
                <Link
                  href="https://archetect.github.io/archetect.html"
                  target="_blank"
                >
                  Archetect
                </Link>{' '}
                - code generation tool:
              </Paragraph>
              <Shell>
                archetect render
                git@github.com:nax-platform/javascript-front-end-archetype.git
              </Shell>
              <Paragraph>
                This is a start point for your front-end application.
              </Paragraph>

              <hr className="mt-6" />

              <Header anchor="code-generation" className="mt-6">
                Code Generation
              </Header>
              <Paragraph>
                We provide powerful code generation tools to significantly
                reduce the time and effort required to build your application.
                Code generation also helps to standardize the codebase and
                ensure consistency across the application.
              </Paragraph>
              <Paragraph>
                Our code generation tools are based on the{' '}
                <Link
                  href="https://archetect.github.io/archetect.html"
                  target="_blank"
                >
                  Archetect
                </Link>{' '}
                and{' '}
                <Link href="https://nx.dev" target="_blank">
                  nx.dev
                </Link>
              </Paragraph>
              <Paragraph>
                After you generated the project code base using{' '}
                <Link
                  href="https://archetect.github.io/archetect.html"
                  target="_blank"
                >
                  Archetect
                </Link>{' '}
                you can start generating lower level elements with the VSCode{' '}
                <Link
                  href="https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console"
                  target="_blank"
                >
                  Nx Console
                </Link>{' '}
                extension.
              </Paragraph>

              <hr className="mt-6" />

              <SubHeader className="mt-6">Resources</SubHeader>
              <Header anchor="documentation">Documentation</Header>
              <Paragraph>
                The NAX Platform documentation is available{' '}
                <Link
                  href="https://https://front-end.docs.platform.naxgrp.com/docs/getting-started"
                  target="_blank"
                >
                  here
                </Link>
                .
              </Paragraph>
              <Paragraph>
                You supposed to have access to the{' '}
                <a href="https://github.com/nax-platform">nax-platform</a>{' '}
                Github repository. If you have any issues accessing the
                documentation, please contact us.
              </Paragraph>
              <div className="mt-6 flex rounded-xl bg-sky-100 p-4 dark:bg-slate-800">
                <div className="mr-4">
                  <IconExclamationCircleFilled className="w-8 fill-sky-400" />
                </div>
                <div className="flex">
                  <div className="mr-4">
                    <img
                      src="https://docusaurus.io/img/docusaurus_keytar.svg"
                      className="mt-4 w-28"
                      alt="Docusaurus"
                    />
                  </div>
                  <Paragraph>
                    The documentation is implemeted using{' '}
                    <Link href="https://docusaurus.io" target="_blank">
                      Docusaurus
                    </Link>{' '}
                    framework. It can be deployed to the Github pages or any of
                    the static hosting providers.
                  </Paragraph>
                </div>
              </div>

              <hr className="mb-6 mt-8" />

              <Header anchor="storybook">Storybook</Header>
              <Paragraph>
                The{' '}
                <Link href="https://storybook.js.org" target="_blank">
                  Storybook
                </Link>{' '}
                is a tool for developing UI components in isolation. It makes
                building stunning UIs organized and efficient.
              </Paragraph>
              <div className="mt-6 flex justify-center">
                <a
                  href="https://front-end.docs.platform.naxgrp.com/component-library/index.html"
                  target="_blank"
                  className="text-center"
                  rel="noreferrer"
                >
                  <LogoStorybook />
                </a>
              </div>
              <Paragraph>
                The Storybook represents{' '}
                <Link
                  href="https://front-end.docs.platform.naxgrp.com/component-library/index.html"
                  target="_blank"
                >
                  NAX UI Components Library
                </Link>
                . It is a collection of reusable components that can be used in
                your application.
              </Paragraph>

              <hr className="mb-6 mt-8" />

              <SubHeader className="mt-6">Design System - Figma</SubHeader>
              <Header anchor="ui-template">UI Template</Header>
              <Paragraph>
                The NAX Platform provides Figma file as a start point for any
                project. Our code base can be synced with Figma design tokens
                automatically using the custom built tool.
              </Paragraph>
              <div className="mt-6 flex items-center rounded-xl bg-orange-100 px-8 py-3 dark:bg-orange-100/10">
                <div className="mr-6">
                  <LogoFigma />
                </div>
                <Paragraph>
                  <Link href="https://www.figma.com/file/zj54b88i4RFbt8YKvv8ujv/NAX-Design-Example-File-Template-COPY-ME?type=design&node-id=1%3A36&mode=design&t=MvWZlq2fvrxRIkVP-1">
                    NAX UI Template Figma File
                  </Link>
                </Paragraph>
              </div>

              <hr className="mb-6 mt-8" />

              <Header anchor="nax-components-library">
                NAX Components Library
              </Header>
              <Paragraph>
                The NAX Components Library has a Figma file representing all the
                components available in the library. You can use this file to
                understand the components and their variations.
              </Paragraph>
              <div className="mt-6 flex items-center rounded-xl bg-orange-100 px-8 py-3 dark:bg-orange-100/10">
                <div className="mr-6">
                  <LogoFigma />
                </div>
                <Paragraph>
                  <Link href="https://www.figma.com/file/xbNpx13Mm3SGB49laoBKzj/NAX-Library---Components-V2.1?type=design&node-id=1%3A36&mode=design&t=L09TtWt29pOXIIwq-1">
                    NAX UI Components Library Figma File
                  </Link>
                </Paragraph>
              </div>

              <hr className="mb-6 mt-8" />

              <SubHeader className="mt-6">Support</SubHeader>
              <Header anchor="support">Front-End Tech Support</Header>
              <Paragraph>
                We provide a Notion board for the front-end technical support.
                If you have any issues with the Platform please create a ticket{' '}
                <Link
                  href="https://www.notion.so/naxgrp/3d43aba83310488d954da4b78fbdffb6?v=db7516329be643849ad23c90219a1b21&pvs=4"
                  target="_blank"
                >
                  here
                </Link>
                . We will get back to you as soon as possible.
              </Paragraph>
            </div>
            <div className="my-xl w-full xl:w-72 2xl:w-80">
              <div className="rounded-xl bg-gray-100 p-10 dark:border dark:border-slate-700 dark:bg-slate-800">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
