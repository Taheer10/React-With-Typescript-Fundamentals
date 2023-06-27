// ConditionalRendering Component
// A component that conditionally renders content based on a condition.

import React from "react";

interface ConditionalRenderingProps {
  showContent: boolean;
}

const ConditionalRendering: React.FC<ConditionalRenderingProps> = ({
  showContent,
}) => {
  return (
    <div>
      {showContent ? (
        <p>This content is shown when showContent is true</p>
      ) : (
        <p>This content is shown when showContent is false</p>
      )}
    </div>
  );
};

export default ConditionalRendering;
