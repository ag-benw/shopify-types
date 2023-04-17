export interface ApplicationChargeReponse {
  confirmation_url: string
  created_at: string
  id: number
  name: string
  price: string
  return_url: string
  status: "pending" | "accepted" | "active" | "declined" | "expired"
  test: boolean | null
  updated_at: string
  currency: string
}