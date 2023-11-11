import ExpSocialTitle from './ExpSocialTitle'
import ExpSocialPicEnactus from './ExpSocialPicEnactus'
import ExpSocialCoachIsg from './ExpSocialCoachIsg'

export default function ExpSocial() {
  return (
    <div className='grid grid-rows-2 justify-center xs:w-64 xs:ml-1 '>
        <div className=' row-span-1' >
          <ExpSocialTitle/>
        </div>
        
        <div className=' row-span-2 lg:-mt-14 xs:-mt-28 xs:ml-72'>
          <div className='flex xs:flex-wrap justify-between gap-10 '>
            <ExpSocialPicEnactus/>
            <ExpSocialCoachIsg/>
          </div>
        </div>
    </div>
  )
}