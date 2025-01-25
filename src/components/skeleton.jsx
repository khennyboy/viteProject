import ContentLoader from "react-content-loader";

const WishesSkeleton = () => {

  const skeletonData = Array.from({ length: 6}, (_, index) => index + 1); 

  return (
    <div className="px-4 mb-12  max-w-2xl lg:max-w-4xl md:px-8 lg:px-12">
      <div className="space-y-6">
        {skeletonData.map((each, index) => (
          <div key={index + 1} className="flex gap-2 pt-4">
              <ContentLoader
                speed={2}
                width={70}
                height={70}
                backgroundColor="#C8C8C8"
                foregroundColor="#E0E0E0"
              >
                <rect x="0" y="0" rx="50%" ry="50%" width="100%" height="100%" />
              </ContentLoader>
              <div className="flex-1">
                  <ContentLoader
                    speed={2}
                    width='100%'
                    backgroundColor="#C8C8C8"
                    foregroundColor="#E0E0E0"
                  >
                    <rect x="0" y="0" rx="4" ry="4" width="50%" height="40" />
                    <rect x="0" y="50" rx="4" ry="4" width="100%" height="70" />
                    <rect x="0" y="130" rx="4" ry="4" width="60%" height="30" />
                  </ContentLoader>
              </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default WishesSkeleton;
