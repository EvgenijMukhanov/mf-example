import React, { FC, ReactNode, useEffect, useState } from "react"

import '../shared-decl.d'

import { Text } from 'shared/ui'
import { applyDesignConfig, loadConfig } from "../utils/design.config"

interface ILoad {
  children: ReactNode
}

export const Load: FC<ILoad> = ({ children }) => {

  const [load, setLoad] = useState(false)

  useEffect(() => {
    const getConfig = async () => {
      await loadConfig().then(
        response => {
          console.log(response.data);
          applyDesignConfig(response.data)
          setLoad(true)
        }
      ).catch(
        error => {
          console.log(error);
          
        }
      )
    }
    getConfig()

    
  }, [])


  return (
    <>
      { !load && <Text>Loading...</Text>}
      { load && children }
    </>
  )
}

