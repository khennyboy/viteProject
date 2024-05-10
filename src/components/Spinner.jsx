import {Bars} from 'react-loader-spinner';


export const Spinner = ({ loading }) => {
  return (
    <div className='mx-auto my-[100px]  w-fit'>
        <Bars
            color='#4338ca'
            loading={loading}
            size={150}
        />
    </div>
  );
};
