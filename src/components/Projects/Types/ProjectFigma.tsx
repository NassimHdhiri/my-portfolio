import React from 'react'
import ProjectSingle from '../ProjectSingle'

type Props = {}

export default function ProjectFigma({}: Props) {
  return (
      <div className='flex flex-col'>
        <p>ProjectFigma</p>
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