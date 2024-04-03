import { FC, PropsWithChildren } from 'react';

const NavHeader: FC<PropsWithChildren> = ({ children }) => {
  return (
    <p className="text-md mb-4 font-bold text-gray-700 dark:text-gray-300">
      {children}
    </p>
  );
};

interface NavLinkProps extends PropsWithChildren {
  href: string;
  title?: string;
}

const NavLink: FC<NavLinkProps> = ({ href, title, children }) => {
  return (
    <li className="text-md text-gray-500 hover:text-sky-500 dark:text-gray-400" title={title || 'link'}>
      <a href={href}>
        <span>{children}</span>
      </a>
    </li>
  );
};

const NavSection: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ul className="mb-8 flex flex-col gap-4 border-l-2 border-gray-200 pl-4 dark:border-gray-700">
      {children}
    </ul>
  );
};

export function Navigation() {
  return (
    <nav className="my-xl">
      <NavHeader>Introduction</NavHeader>
      <NavSection>
        <NavLink href="#getting-started" title="Getting Started">Getting Started</NavLink>
        <NavLink href="#code-generation" title="Code Generation">Code Generation</NavLink>
      </NavSection>

      <NavHeader>Resources</NavHeader>
      <NavSection>
        <NavLink href="#documentation" title="Documentation">Documentation</NavLink>
        <NavLink href="#storybook" title="Storybook">Storybook</NavLink>
      </NavSection>

      <NavHeader>Design System - Figma</NavHeader>
      <NavSection>
        <NavLink href="#ui-template" title="UI Template">UI Template</NavLink>
        <NavLink href="#nax-components-library" title="NAX Components Library">NAX Components Library</NavLink>
      </NavSection>

      <NavHeader>Support</NavHeader>
      <NavSection>
        <NavLink href="#support" title="Front-End Tech Support">Front-End Tech Support</NavLink>
      </NavSection>
    </nav>
  );
}
