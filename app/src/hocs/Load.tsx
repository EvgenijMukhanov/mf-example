import React, { FC, ReactNode, useEffect, useState } from "react"

import '../shared-decl.d'

import { Text } from 'shared/ui'

interface ILoad {
  children: ReactNode
}

export const Load: FC<ILoad> = ({ children }) => {

  const [load, seLoad] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      seLoad(true)
    }, 5000)
  })


  return (
    <>
      { !load && <Text>Loading...</Text>}
      { load && children }
    </>
  )
}