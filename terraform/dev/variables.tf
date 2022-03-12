variable "db_host" {}
variable "db_port" {}
variable "db_username" {}
variable "db_password" {}
variable "db_database" {}

variable "users" {
  description = "List of users in the form of map {name, password}"
  sensitive   = true
  type = list(object({
    name     = string
    password = string
  }))
}
