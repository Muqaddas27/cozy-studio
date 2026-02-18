
import React from 'react';

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="animate-reveal bg-gradient-to-b from-white via-champagne/20 to-white min-h-screen">
      {/* Hero Skeleton */}
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="h-4 w-32 bg-gray-200 rounded mx-auto mb-8 animate-pulse"></div>
          <div className="h-24 w-full max-w-2xl bg-gray-200 rounded mx-auto mb-12 animate-pulse"></div>
          <div className="h-6 w-full max-w-xl bg-gray-200 rounded mx-auto animate-pulse"></div>
        </div>
      </section>

      {/* Grid Skeleton */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-[4/5] bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-3 w-1/2 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoadingSkeleton;
