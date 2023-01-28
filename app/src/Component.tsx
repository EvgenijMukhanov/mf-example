import React, {useEffect} from 'react'

export const Component = () => {

  useEffect(() => {
    loadTheme()
  }, [])

  const loadTheme = () => {
    document.documentElement.style.setProperty("--primary", "green");
  }

  return (
    <>
    </>
  )
}