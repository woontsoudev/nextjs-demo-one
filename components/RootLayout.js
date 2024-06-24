import { StackedLayout } from './shared/stacked-layout';
import { Navbar, NavbarItem, NavbarSection } from './shared/navbar';
import {
  Sidebar,
  SidebarBody,
  SidebarItem,
  SidebarSection,
} from './shared/sidebar';
import { Avatar } from './shared/avatar';

import dogLogo from '@/assets/dog-logo.png';

const navItems = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Blog', url: '/blog' },
  { label: 'Pets', url: '/pets' },
];

export default function RootLayout({ children }) {
  return (
    <StackedLayout
      navbar={
        <Navbar>
          <Avatar src={dogLogo} width={60} height={60} />
          <NavbarSection className="max-lg:hidden">
            {navItems.map(({ label, url }) => (
              <NavbarItem key={label} href={url}>
                {label}
              </NavbarItem>
            ))}
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarBody>
            <SidebarSection>
              {navItems.map(({ label, url }) => (
                <SidebarItem key={label} href={url}>
                  {label}
                </SidebarItem>
              ))}
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
      }
    >
      {children}
    </StackedLayout>
  );
}
