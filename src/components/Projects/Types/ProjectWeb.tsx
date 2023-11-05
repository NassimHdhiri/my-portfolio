import React from 'react'
import ProjectSingle from '../ProjectSingle'

type Props = {}

export default function ProjectWeb({}: Props) {
  return (
    <div className='flex flex-col'>
        <p>Project web</p>
        <div className='grid grid-cols-3 wrap gap-4 justify-center'>
            <ProjectSingle/>
            <ProjectSingle/>
            <ProjectSingle/>
            <ProjectSingle/>
            <ProjectSingle/>
            <ProjectSingle/>
        </div>
    </div>
  )
}