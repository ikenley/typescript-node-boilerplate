#
# Authentication
#

locals {
  id          = "${var.namespace}-${var.environment}-${var.name}"
  id_prefix   = "/${var.namespace}/${var.environment}/${var.name}"
  create_pool = var.cognito_pool_id == ""
}


resource "aws_cognito_user_pool" "this" {
  count = local.create_pool ? 1 : 0

  name = local.id
}

resource "aws_cognito_user_pool_client" "this" {
  name = local.id

  user_pool_id = aws_cognito_user_pool.this[0].id

  generate_secret     = false
  explicit_auth_flows = ["ADMIN_NO_SRP_AUTH"]

}
