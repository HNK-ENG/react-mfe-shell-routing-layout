import type { ComponentType } from "react"
import RecommendationAtCartPage from "./pages/RecommendationAtCartPage"

export const RECOMMENDATION = 'recommendation'

export type SharedPageName = typeof RECOMMENDATION

export type SharedPagesType = Record<SharedPageName, ComponentType>


export const sharedPages: SharedPagesType = {
  [RECOMMENDATION]: RecommendationAtCartPage,
}