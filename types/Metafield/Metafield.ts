export interface MetafieldResouce {
  created_at: string
  description: string
  id: number
  key: string
  namespace: string
  owner_id: number
  owner_resource: string
  updated_at: string
  value: string
  type: "boolean" | "color" | "date" | "date_time" | "dimension" | "json" | "money" | "multi_line_text_field" | "number_decimal" | "number_integer" | "rating" | "rich_text_field" | "single_line_text_field" | "url" | "volume" | "weight" | "collection_reference" | "file_reference" | "metaobject_reference" | "mixed_reference" | "page_reference" | "product_reference" | "variant_reference"
}
