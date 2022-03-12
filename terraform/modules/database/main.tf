#
# Creates logical database, schemas, and roles
#

module "user_set" {
  source = "github.com/ikenley/terraform-postgres-example//modules/user_set"

  namespace   = var.namespace
  environment = var.environment

  users = var.users
}

module "database" {
  source = "github.com/ikenley/terraform-postgres-example//modules/database"

  namespace   = var.namespace
  environment = var.environment

  name             = var.name
  super_admin_user = var.super_admin_user
  users            = var.users

  schemas = var.schemas

  depends_on = [
    module.user_set
  ]
}
