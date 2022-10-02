import { BoltIcon, LightBulbIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import support from '../../Assets/Images/strength/customer-support.png'
import React from 'react';

const Strength = () => {
    return (
        <div>
            <div className='grid grid-cols-4 gap-5'>
            <div className="card  bg-base-100 shadow-xl">
  <figure><BoltIcon className=' w-6'></BoltIcon></figure>
  <div className="card-body">
    <h2 className="card-title">Quick Action & Delivery</h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
            <div className="card  bg-base-100 shadow-xl">
  <figure><UserGroupIcon className='w-6'></UserGroupIcon></figure>
  <div className="card-body">
    <h2 className="card-title">Strong relations and representative</h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
            <div className="card  bg-base-100 shadow-xl">
  <figure><img className='w-6' src={support} alt="support" /></figure>
  <div className="card-body">
    <h2 className="card-title">Regulatory Affairs Support!</h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
            <div className="card  bg-base-100 shadow-xl">
  <figure><LightBulbIcon className='w-6'></LightBulbIcon></figure>
  <div className="card-body">
    <h2 className="card-title">Depth Generic Knowledge</h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
            </div>
        </div>
    );
};

export default Strength;