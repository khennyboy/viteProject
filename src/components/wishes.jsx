import { useCallback, useRef, useState } from "react";

const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date);
  };
export default function Wishes() {
    const viewMore = useRef(null)
    const [count, setCount] = useState(1)
    const [openId, setOpenId] = useState([])
    const datas = Array.from({ length: 30 }, (_, index) => index + 1);
    
    const wishesCount = Math.ceil(datas.length / 10);
    const data = datas?.slice(0, count*10)
   
    const handleMoreWish = useCallback(()=>{
       if (count < wishesCount){
             setCount(prev=>prev+1)
         }
         if (count == wishesCount){
            setCount(1)
        }
    }, [count, wishesCount])
    
    return (
      <div className="px-4 mb-12 space-y-6 max-w-2xl lg:max-w-4xl md:px-8 lg:px-12">
        <h2 className="text-xl md:text-2xl font-bold text-orange-600 text-center mb-6">
          Birthday Wishes 🎉
        </h2>
        <div className="space-y-4 divide-y divide-orange-300">
          {data.map((each, index) => (
            <div key={index+1} className="flex gap-4  pt-4">
              <span className="rounded-full w-9 h-9 sm:w-12 sm:h-12  flex-shrink-0  bg-orange-500 text-white font-bold text-xl md:text-2xl  flex justify-center items-center">
                A
              </span>
              <div>
                <p className="font-semibold md:text-lg text-gray-700">
                  Sheriff Abdullateef {index}
                </p>
                <p className="text-gray-600  leading-snug relative mb-4" >
                  {openId.includes(index) ? 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni totam mollitia sunt perferendis provident facilis doloremque harum voluptas ipsam ullam optio non repudiandae dolorem assumenda pariatur magnam dolore, impedit hic?':'      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni totam mollitia sunt perferendis provident facilis doloremque harum voluptas ipsam ullam optio non repudiandae dolorem assumenda pariatur magnam dolore, impedit hic?'.slice(0, 50)} 🎂
                  <button
                  onClick={()=>{
                    if(openId.includes(index)){
                        setOpenId(prev=>prev.filter(each=>each!=index))
                    }
                    else{
                        setOpenId([...openId, index])}
                    }
                  }
                    className="text-orange-500 text-sm lg:text-base absolute top-full right-0 font-medium hover:underline ml-8 "
                > {openId.includes(index)  ? 'Show Less...':'Show More...'}
          </button>
                </p>
                <span className="text-gray-500 text-xs md:text-sm italic">
                {formatDate(new Date())}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-right">
        { wishesCount !=1 && 
          <button 
          onClick={()=>handleMoreWish()}
            ref={viewMore} 
          className={`cursor-pointer mt-6 px-6 py-3 hover:underline text-orange-500 font-medium hover:text-orange-600 duration-300 ease-linear transition-all`}>
             {count < wishesCount ? 'View More Wishes...': 'View Less'}
          </button>
        }
        </div>
      </div>
    );
  }
  