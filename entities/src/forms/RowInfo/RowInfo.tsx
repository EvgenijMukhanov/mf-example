import React, { FC, ReactNode } from 'react'

import { Text } from 'shared/ui'
import { Row } from '../Row/Row'
import { RowLabel } from '../RowLabel/RowLabel'
import { RowField } from '../RowField/RowField'

export interface IRowInfo {
  label: ReactNode,
  value: ReactNode,
}

/**
 * Form field with text data
 * @param label
 * @param value
 * @returns ReactNode
 */
export const RowInfo: FC<IRowInfo> = ({ label, value }) => {

  return (
    <Row>
      <RowLabel>
        <Text>{ label }</Text>
      </RowLabel>
      <RowField>
        <Text>{ value }</Text>
      </RowField>
    </Row>
  )
}