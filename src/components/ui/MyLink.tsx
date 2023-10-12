import Link from "next/link";

import React from "react";

const MyLink = ({ sideBarItem }: any) => {
  return (
    <div className="mt-5">
      <Link href={sideBarItem.link}>{sideBarItem?.level} </Link>
    </div>
  );
};

export default MyLink;
