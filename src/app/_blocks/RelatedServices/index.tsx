import React from 'react'

import { Project, Service } from '../../../payload/payload-types'
import { Card } from '../../_components/Card'
import { Gutter } from '../../_components/Gutter'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

export type RelatedServicesProps = {
  blockType: 'relatedServices' | 'relatedProjects'
  blockName: string
  doc?: Service | Project
  introContent?: any
  docs?: (string | Service | Project)[]
  relationTo: 'services' | 'projects'
}

export const Relatedservices: React.FC<RelatedServicesProps> = props => {
  const { introContent, docs, relationTo } = props

  return (
    <div className={classes.relatedservices}>
      {introContent && (
        <Gutter className={classes.introContent}>
          <RichText content={introContent} />
        </Gutter>
      )}
      <Gutter>
        <div className={classes.grid}>
          {docs?.map((doc, index) => {
            if (typeof doc === 'string') return null

            return (
              <div
                key={index}
                className={[
                  classes.column,
                  docs.length === 2 && classes['cols-half'],
                  docs.length >= 3 && classes['cols-thirds'],
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <Card relationTo={relationTo} doc={doc} showCategories />
              </div>
            )
          })}
        </div>
      </Gutter>
    </div>
  )
}
