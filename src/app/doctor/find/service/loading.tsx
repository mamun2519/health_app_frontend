import LoadingSkeleton from "@/components/ui/Skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="mt-24">
      <LoadingSkeleton />
    </div>
  );
};

export default loading;
