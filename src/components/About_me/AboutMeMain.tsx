import AboutMeTitle from './AboutMeTitle'
import NassimPic2 from './NassimPic2'
import SingleExp from './SingleExp'
import Paraghraphe from './Paraghraphe'
import NassimPic from '../../assets/Profile_about_me/images/imagenassim.svg'

export default function AboutMeMain() {
  return (
    <div className="grid grid-rows-2 gap-2 xs:mt-60">
      <div className="row-span-1">
        <AboutMeTitle />
      </div>

      <div className="row-span-2 -mt-28 xs:-mt-64">
        <div className="grid grid-cols-12 xs:flex xs:flex-col-reverse ">
          <div className="col-span-5 mt-2">
            <NassimPic2 />
          </div>

          <div className="col-span-7 mt-12 xs:-mt-52  ">
            <div className="flex justify-around mb-8 xs:flex-col xs:gap-y-4 xs:ml-4 " >
              <SingleExp />
              <SingleExp />
            </div>
            <img className="xs:mt-16  lg:-left-2 lg:-top-1 xs:-top-[60%] xs:ml-4  xs:w-96   " src={NassimPic}  alt="" />
            <Paraghraphe />
          </div>
        </div>
      </div>
    </div>
  )
}
