import { FC, PropsWithChildren } from 'react';

const NavHeader: FC<PropsWithChildren> = ({ children }) => {
  return (
    <p className="text-md text-gray-700 dark:text-gray-300 font-bold mb-4">
      {children}
    </p>
  );
};

interface NavLinkProps extends PropsWithChildren {
  href: string;
}

const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  return (
    <li className="text-md text-gray-500 dark:text-gray-400 hover:text-sky-500">
      <a href={href}>
        <span>{children}</span>
      </a>
    </li>
  );
};

const NavSection: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ul className="border-l-2 border-gray-200 dark:border-gray-700 pl-4 mb-8 flex flex-col gap-4">
      {children}
    </ul>
  );
};

export function Navigation() {
  return (
    <nav className="my-xl">
      <NavHeader>Introduction</NavHeader>
      <NavSection>
        <NavLink href="#getting-started">Getting Started</NavLink>
        <NavLink href="#code-generation">Code Generation</NavLink>
      </NavSection>

      <NavHeader>Resources</NavHeader>
      <NavSection>
        <NavLink href="#documentation">Documentation</NavLink>
        <NavLink href="#storybook">Storybook</NavLink>
      </NavSection>

      <NavHeader>Design System - Figma</NavHeader>
      <NavSection>
        <NavLink href="#ui-template">UI Template</NavLink>
        <NavLink href="#p6m-components-library">p6m Components Library</NavLink>
      </NavSection>

      <NavHeader>Support</NavHeader>
      <NavSection>
        <NavLink href="#support">Front-End Tech Support</NavLink>
      </NavSection>
    </nav>
  );
}
