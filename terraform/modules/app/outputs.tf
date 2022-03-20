output "cognito_user_pool_id" {
  value = local.create_pool ? aws_cognito_user_pool.this[0].id : ""
}

resource "aws_ssm_parameter" "cognito_user_pool_id" {
  count = local.create_pool ? 1 : 0

  name  = "${local.id_prefix}/app/cognito_user_pool_id"
  type  = "String"
  value = aws_cognito_user_pool.this[0].id
}

output "user_pool_client_id" {
  value = aws_cognito_user_pool_client.this.client_secret
}

resource "aws_ssm_parameter" "user_pool_client_id" {
  name  = "${local.id_prefix}/app/user_pool_client_id"
  type  = "SecureString"
  value = aws_cognito_user_pool_client.this.id
}

output "user_pool_client_secret" {
  value     = aws_cognito_user_pool_client.this.client_secret
  sensitive = true
}

resource "aws_ssm_parameter" "user_pool_client_secret" {
  name  = "${local.id_prefix}/app/user_pool_client_secret"
  type  = "SecureString"
  value = length(aws_cognito_user_pool_client.this.client_secret) > 0 ? aws_cognito_user_pool_client.this.client_secret : "null"
}
