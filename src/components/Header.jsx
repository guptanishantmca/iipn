import React from 'react';
import { gql, useQuery } from '@apollo/client';

const MENU_QUERY = gql`
  query GetPrimaryMenu {
    menu(id: "Header", idType: NAME) {
      menuItems {
        nodes {
          id
          label
          url
        }
      }
    }
  }
`;

const Header = () => {
  const { loading, error, data } = useQuery(MENU_QUERY);

  if (loading) return <p>Loading header...</p>;
  if (error) return <p>Error loading menu: {error.message}</p>;

  const menuItems = data?.menu?.menuItems?.nodes || [];

  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
          {menuItems.map(item => (
            <li key={item.id}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
