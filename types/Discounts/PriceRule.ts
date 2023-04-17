export interface PriceRuleResource {
  allocation_method: "each" | "accross"
  created_at: string
  updated_at: string
  customer_selection: "all" | "prerequisite"
  ends_at: string
  entitled_collection_ids: number[]
  entitled_country_ids: EntitledCountryIds
  entitled_product_ids: number[]
  entitled_variant_ids: number[]
  id: number
  once_per_customer: boolean
  prerequisite_customer_ids: number[]
  prerequisite_quantity_range: PrerequisiteQuantityRange
  customer_segment_prerequisite_ids: number[]
  prerequisite_shipping_price_range: PrerequisiteShippingPriceRange
  prerequisite_subtotal_range: PrerequisiteSubtotalRange
  prerequisite_to_entitlement_purchase: PrerequisiteToEntitlementPurchase
  starts_at: string
  target_selection: string
  target_type: string
  title: string
  usage_limit: number
  prerequisite_product_ids: number[]
  prerequisite_variant_ids: number[]
  prerequisite_collection_ids: number[]
  value: number
  value_type: string
  prerequisite_to_entitlement_quantity_ratio: PrerequisiteToEntitlementQuantityRatio
  allocation_limit: number
}

export interface EntitledCountryIds {
  entitled_country_ids: number[]
}

export interface PrerequisiteQuantityRange {
  greater_than_or_equal_to: number
}

export interface PrerequisiteShippingPriceRange {
  less_than_or_equal_to: string
}

export interface PrerequisiteSubtotalRange {
  greater_than_or_equal_to: string
}

export interface PrerequisiteToEntitlementPurchase {
  prerequisite_amount: string
}

export interface PrerequisiteToEntitlementQuantityRatio {
  prerequisite_quantity: number
  entitled_quantity: number
}
