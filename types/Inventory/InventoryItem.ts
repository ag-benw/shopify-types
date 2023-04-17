export interface InventoryItemResource {
  cost: string
  country_code_of_origin: string
  country_harmonized_system_codes: CountryHarmonizedSystemCode[]
  created_at: string
  harmonized_system_code: number
  id: number
  province_code_of_origin: string
  sku: string
  tracked: boolean
  updated_at: string
  requires_shipping: boolean
}

export interface CountryHarmonizedSystemCode {
  harmonized_system_code: string
  country_code: string
}
