#
# Creates the databases, roles, and users for a sample PostgreSQL server
# The server will have: 
#   A shared "core" database for client configuration
#   Multiple single-tenant "tenant" databases
#   An "analytics" database for ad-hoc reporting
#

locals {
  namespace   = "ik"
  environment = "dev"
}

terraform {
  required_providers {
    postgresql = {
      source  = "cyrilgdn/postgresql"
      version = "1.15.0"
    }
  }

  backend "s3" {
    profile = "terraform-dev"
    region  = "us-east-1"
    bucket  = "924586450630-terraform-state"
    key     = "typescript-node-boilerplate/main/terraform.tfstate"
  }
}

provider "aws" {
  region  = "us-east-1"
  profile = "terraform-dev"
}

provider "postgresql" {
  host     = var.db_host
  port     = var.db_port
  database = var.db_database
  username = var.db_username
  password = var.db_password
  sslmode  = "disable" # localhost only. Do not disable in real env
}

module "main" {
  source = "../modules/main"

  namespace   = local.namespace
  environment = local.environment
  name        = "ts-app"

  db_name          = "ts_app"
  super_admin_user = var.db_username
  users            = var.users

  schemas = [
    {
      name        = "app"
      read_users  = []
      write_users = ["template_app_user"]
      dba_users   = ["template_app_dba"]
    }
  ]
}
