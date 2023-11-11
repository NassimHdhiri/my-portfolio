import ImageNassim from '../../../assets/Profile_resume/images/imagenassim1.svg';
import BookmarkRibbon from '../../../assets/Profile_resume/images/BookmarkRibbon.svg';
import Crownd from '../../../assets/Profile_resume/images/Crownd.svg';
import LightningBolt from '../../../assets/Profile_resume/images/LightningBolt.svg';
import MagnifyGlass from '../../../assets/Profile_resume/images/MagnifyGlass.svg';

import SandGlass from '../../../assets/Profile_resume/images/SandGlass.svg';
import StarRotate from '../../../assets/Profile_resume/images/StarRotate1.svg';
import RectangleNassim from '../../../assets/Profile_resume/images/Rectanglenassim.svg';

export default function Picture() {
  return (
    <div className=' relative  lg:h-[610px] lg:w-[400px] xs:h-[600px] xs:w-64 bg-red-400 '>
      {/* motifs */}
        {/* save */}
        <img className="  absolute  lg:bottom-28 lg:right-7 xs:bottom-32  xs:w-6" src={BookmarkRibbon} alt="nassim's pic"/>
        {/* King */}
        <img className=" absolute  lg:right-7 lg:top-24 xs:top-40  xs:w-6" src={Crownd} alt="nassim's pic"/>
        
        {/* LIGHT BOLT */}
        <img className=" absolute lg:left-2 lg:bottom-28 xs:bottom-32 xs:left-16 xs:w-6" src={LightningBolt} alt="nassim's pic"/>
        
        {/* SEARCH */}
        <img className=" absolute lg:left-44 lg:bottom-12 xs:bottom-20 xs:left-52   xs:w-6 " src={MagnifyGlass} alt="nassim's pic"/>
        
        {/* STAR */}
        <img className=" absolute xs:top-40 xs:left-10 lg:top-24 lg:left-2 xs:w-9" src={StarRotate} alt="nassim's pic"/>
        
        {/* time */}
        <img className=" absolute lg:top-10 lg:left-44 xs:top-24 xs:left-48 xs:w-6" src={SandGlass} alt="nassim's pic"/>
        
        {/* rectangle Gris background */}
        <img className=" absolute lg:left-16 lg:top:20  xs:top-[149px] lg:w-[304px] lg:h-[502px] xs:h-80"  src={RectangleNassim} alt=""/>

        {/* Nassim picture */}
        <img className=" absolute lg:left-7  lg:top-14   xs:top-36 xs:-left-2  lg:w-[326px] lg:h-[486px] xs:h-64 " src={ImageNassim} alt="nassim's pic"/>

    </div>
  )
}