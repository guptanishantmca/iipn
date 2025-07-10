import React from 'react';

const BlockRenderer = ({ block }) => {
  const { name, attributes = {}, innerBlocks = [] } = block;

  // Render children blocks recursively
  const renderInnerBlocks = () =>
    innerBlocks.map((inner, i) => <BlockRenderer key={i} block={inner} />);

  switch (name) {
    case 'core/paragraph':
      return <p style={getStyle(attributes)}>{attributes.content}</p>;

    case 'core/heading':
      return React.createElement(
        `h${attributes.level || 2}`,
        { style: getStyle(attributes) },
        attributes.content
      );

    case 'core/image':
      return <img src={attributes.url} alt={attributes.alt} style={{ maxWidth: '100%' }} />;

    case 'core/button':
      return (
        <button style={getStyle(attributes)}>
          {attributes.content || 'Click me'}
        </button>
      );

    case 'core/buttons':
    case 'core/group':
    case 'core/columns':
    case 'core/column':
    case 'core/cover':
      return <div style={getStyle(attributes)}>{renderInnerBlocks()}</div>;

    case 'core/navigation-link':
      return (
        <a href={attributes.url} style={getStyle(attributes)}>
          {attributes.label}
        </a>
      );

    default:
      return (
        <div style={{ border: '1px dashed gray', margin: '5px 0' }}>
          <small>Unsupported block: {name}</small>
          {renderInnerBlocks()}
        </div>
      );
  }
};

export default BlockRenderer;

// Utility function to extract inline styles from attributes
function getStyle(attrs) {
  let style = {};
  if (attrs.style && attrs.style.typography) {
    const t = attrs.style.typography;
    if (t.fontSize) style.fontSize = t.fontSize;
    if (t.textTransform) style.textTransform = t.textTransform;
    if (t.fontStyle) style.fontStyle = t.fontStyle;
    if (t.fontWeight) style.fontWeight = t.fontWeight;
    if (t.letterSpacing) style.letterSpacing = t.letterSpacing;
    if (t.lineHeight) style.lineHeight = t.lineHeight;
  }
  if (attrs.style && attrs.style.color && attrs.style.color.text) {
    style.color = attrs.style.color.text;
  }
  if (attrs.textAlign) style.textAlign = attrs.textAlign;
  return style;
}
