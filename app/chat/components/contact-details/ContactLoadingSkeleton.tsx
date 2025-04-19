export const ContactLoadingSkeleton = () => {
  return (
    <div className="p-4">
    <div className="flex flex-col items-center pb-6 border-b">
      <div className="h-20 w-20 rounded-full bg-gray-200 animate-pulse flex items-center justify-center mb-3">
      </div>
      <div className="h-6 w-32 bg-gray-200 animate-pulse rounded mb-2"></div>
      <div className="h-4 w-24 bg-gray-200 animate-pulse rounded mb-2"></div>
      <div className="flex items-center mt-1">
        <div className="h-2 w-2 rounded-full bg-gray-200 animate-pulse mr-1"></div>
        <div className="h-3 w-12 bg-gray-200 animate-pulse rounded"></div>
      </div>
    </div>

    <div className="py-4 space-y-4">
      <div>
        <div className="h-5 w-36 bg-gray-200 animate-pulse rounded mb-2"></div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-4 w-32 bg-gray-200 animate-pulse rounded"></div>
          </div>
          <div className="flex justify-between">
            <div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-4 w-28 bg-gray-200 animate-pulse rounded"></div>
          </div>
          <div className="flex justify-between">
            <div className="h-4 w-24 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-4 w-20 bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>
      </div>

      <div>
        <div className="h-5 w-32 bg-gray-200 animate-pulse rounded mb-2"></div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="h-4 w-12 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div>
          </div>
          <div className="flex justify-between">
            <div className="h-4 w-24 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-4 w-20 bg-gray-200 animate-pulse rounded"></div>
          </div>
          <div className="flex justify-between">
            <div className="h-4 w-20 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>
      </div>
    </div>

    <div className="pt-4 border-t">
      <div className="h-9 w-full bg-gray-200 animate-pulse rounded"></div>
    </div>
  </div>
  )}