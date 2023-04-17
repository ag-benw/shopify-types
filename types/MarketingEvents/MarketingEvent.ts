export interface Root {
  remote_id: string
  event_type: "ad" | "post" | "message" | "retargeting" | "transactional" | "affiliate" | "loyalty" | "newsletter" | "abandoned_card"
  marketing_channel: "search" | "display" | "social" | "email" | "referral"
  paid: boolean
  referring_domain: string
  budget: number
  currency: string
  budget_type: "daily" | "lifetime"
  started_at: string
  scheduled_to_end_at: string
  ended_at: string
  "UTM parameters": UtmParameters
  description: string
  manage_url: string
  preview_url: string
  marketed_resources: MarketedResource[]
}

export interface UtmParameters {
  marketing_event: MarketingEvent
}

export interface MarketingEvent {
  utm_campaign: string
  utm_source: string
  utm_medium: string
}

export interface MarketedResource {
  type: "product" | "collection" | "price_rule" | "discount" | "page" | "article" | "homepage"
  id: number
}
