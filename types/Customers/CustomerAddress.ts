export interface CustomerAddressResponse {
  address1: string
  address2: string
  city: string
  country: string
  country_code: string
  country_name: string
  company: string
  customer_id: CustomerId
  first_name: string
  id: number
  last_name: string
  name: string
  phone: string
  province: string
  province_code: string
  zip: string
}

export interface CustomerId {
  id: number
}
