#
# Top-level main module
#

module "database" {
  source = "../database"

  namespace   = var.namespace
  environment = var.environment

  name             = var.db_name
  super_admin_user = var.super_admin_user
  users            = var.users

  schemas = var.schemas
}
