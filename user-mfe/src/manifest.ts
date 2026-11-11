import type { ComponentType } from 'react'
import LoginPage from './pages/LoginPage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'

export const LOGIN = 'login'
export const REGISTER = 'register'

export type SharedPageName = typeof LOGIN | typeof REGISTER

export type SharedPagesType = Record<SharedPageName, ComponentType>

export const sharedPages: SharedPagesType = {
  [LOGIN]: LoginPage,
  [REGISTER]: RegisterPage,
}
