import React, { useState } from 'react';

const TreeNode = ({ node, onclickFunc }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="tree-node mr-5">
      <div onClick={handleToggle} className={`node-toggle ${isExpanded ? 'expanded flex flex-row items-center gap-2' : ' flex flex-row items-center  gap-2'}`}>
        {isExpanded && node.children.length > 0 ?

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>}

        <a className='cursor-pointer' key={node.id} id={node.id} x-value={node.id} onClick={onclickFunc}>    {node.name}
        </a>
      </div>
      {isExpanded && (
        <ul className="child-nodes">
          {node.children.map((childNode: any) => (
            <li key={childNode.id} className='mr-5 cursor-pointer' onClick={onclickFunc} id={childNode.id} x-value={node.id}>
              <TreeNode node={childNode} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function TreeView({ treeData, onclickFunc }: any) {
  return (
    <div className='flex flex-col'>
      <ul>
        <li className='flex flex-row items-center gap-2'>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <a className='cursor-pointer' id="0" x-value={0} onClick={onclickFunc}>   اصلی

          </a>
        </li>
      </ul>
      {treeData.map((rootNode: any) => (
        <TreeNode key={rootNode.id} node={rootNode} onclickFunc={onclickFunc} />
      ))}
    </div>
  );
};
