import { useSelector,useDispatch } from 'react-redux';
import { AppState } from '../../store'; // Import your AppState type
import { handleCurrentSlide } from '../../store/PortfolioReducer';

export default function ProjectMenu() {
    const dispatch=useDispatch();
  const {currentSlide} = useSelector((state:AppState) => state.home);

    const handleCurrentSlideShowen=(item:'figma' | 'software' | 'mobile' | 'web')=>{
        dispatch(handleCurrentSlide(item))
    }

  return (
    <>
        {/* count === {currentSlide} */}
        <div className='xs:ml-11 bg-gray-200 w-[680px] xs:w-72 xs:h-4 xs:pl-2 m-auto p-5 rounded-3xl '>
            <ul className='flex gap-5 justify-around xs:w-52 xs:text-[12px] xs:-mt-2 xs:pl-14'>
                <li className={`pl-4 hover:font-semibold hover:cursor-pointer hover:underline ${(currentSlide=="figma")&& "font-semibold underline"}`} onClick={()=>handleCurrentSlideShowen("figma")}>Figma</li>
                <li>l</li>
                <li className={`xs:-mr-2 xs:-ml-2  hover:font-semibold hover:cursor-pointer hover:underline ${(currentSlide=="software")&& "font-semibold underline"}`} onClick={()=>handleCurrentSlideShowen("software")}>Software</li>
                <li>l</li>
                <li className={`xs:-mr-2 xs:-ml-2  hover:font-semibold hover:cursor-pointer hover:underline ${(currentSlide=="mobile")&& "font-semibold underline"}`} onClick={()=>handleCurrentSlideShowen("mobile")}>Mobile</li>
                <li>l</li>
                <li className={`pr-4 hover:font-semibold hover:cursor-pointer hover:underline ${(currentSlide=="web")&& "font-semibold underline"}`} onClick={()=>handleCurrentSlideShowen("web")}>Web</li>
            </ul>
        </div>
    </>
  );
}
