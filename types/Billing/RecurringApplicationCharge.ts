export interface ReccuringApplicationChargeReponse {
  activated_on: string | null
  billing_on: string | null
  cancelled_on: string | null
  capped_amount: string
  confirmation_url: string
  created_at: string
  id: number
  name: string
  price: string
  return_url: string
  status: "pending" | "accepted" | "active" | "declined" | "expired" | "frozen" | "cancelled"
  terms: string
  test: boolean | null
  trial_days: number
  trial_ends_on: string | null
  updated_at: string
  currency: string
}
