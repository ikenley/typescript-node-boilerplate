variable "namespace" {}
variable "environment" {}
variable "name" {}

variable "tags" {
  description = "A map of tags to add to all resources"
  type        = map(string)
  default     = {}
}

variable "cognito_pool_id" {
  default = ""
}
