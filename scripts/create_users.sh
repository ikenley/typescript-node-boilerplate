
aws cognito-idp create-group \
    --user-pool-id us-east-1_UBDnR6M7B \
    --group-name admin \
    --description "Admins"

echo "Creating example user"

aws cognito-idp admin-create-user \
    --user-pool-id us-east-1_UBDnR6M7B \
    --username user@example.com \
    --user-attributes Name=email,Value=user@example.com \
    --message-action SUPPRESS

aws cognito-idp admin-set-user-password \
    --user-pool-id us-east-1_UBDnR6M7B \
    --username user@example.com \
    --password Password_12345 \
    --permanent 

echo "Creating example admin"

aws cognito-idp admin-create-user \
    --user-pool-id us-east-1_UBDnR6M7B \
    --username admin@example.com \
    --user-attributes Name=email,Value=admin@example.com \
    --message-action SUPPRESS

aws cognito-idp admin-set-user-password \
    --user-pool-id us-east-1_UBDnR6M7B \
    --username admin@example.com \
    --password Password_12345 \
    --permanent 

aws cognito-idp admin-add-user-to-group \
    --user-pool-id us-east-1_UBDnR6M7B \
    --username admin@example.com \
    --group-name admin