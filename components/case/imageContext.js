'use client'
import { createContext, useContext } from 'react'

export const ImageCtx = createContext(() => {})
export const useOpenImage = () => useContext(ImageCtx)
