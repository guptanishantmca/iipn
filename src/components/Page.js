import React from 'react';
import { gql, useQuery } from '@apollo/client';
import BlockRenderer from './BlockRenderer';

const GET_PAGE_BLOCKS = gql`
  query GetPageBlocks($id: ID!, $idType: PageIdType!) {
    page(id: $id, idType: $idType) {
      title
      blocks
    }
  }
`;

const Page = ({ pageId }) => {
  const { loading, error, data } = useQuery(GET_PAGE_BLOCKS, {
    variables: { id: String(pageId), idType: 'DATABASE_ID' },
  });

  if (loading) return <p>Loading page...</p>;
  if (error) return <p>Error: {error.message}</p>;

  let blocksArray = [];

  try {
    const rawBlocks = data.page.blocks;
    blocksArray = typeof rawBlocks === 'string' ? JSON.parse(rawBlocks) : rawBlocks;
  } catch (e) {
    console.error('Failed to parse blocks:', e);
  }

  return (
    <div>
      <h1>{data.page.title}</h1>
      {blocksArray.map((block, index) => (
        <BlockRenderer key={index} block={block} />
      ))}
    </div>
  );
};

export default Page;
