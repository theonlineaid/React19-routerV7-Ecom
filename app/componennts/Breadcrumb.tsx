import React from "react";
import { Link } from "react-router";

interface BreadcrumbProps {
  parent: string;
  sub?: string;
  subChild?: string;
  noBreadcrumb?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ parent, sub, subChild, noBreadcrumb }) => {
  return (
    <div className={`page-header breadcrumb-wrap ${noBreadcrumb || ''}`}>
      <div className="container">
        <div className="breadcrumb text-sm">
          <Link to="/" className="text-pink-600 hover:underline">{parent}</Link>
          {sub && (
            <>
              <span className="mx-2">/</span>
              <span>{sub}</span>
            </>
          )}
          {subChild && (
            <>
              <span className="mx-2">/</span>
              <span>{subChild}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
