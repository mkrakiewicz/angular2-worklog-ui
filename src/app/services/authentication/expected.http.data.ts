export const ExpectedHttpData = `{
    "acl": {
        "access_worklogs": true,
        "access_users": true,
        "access_user_settings": true,
        "crud_all_worklogs": true,
        "crud_all_user_settings": true
    },
    "user": {
        "id": 3,
        "name": "Test Admin",
        "email": "admin@domain.com",
        "created_at": "2017-08-12 15:01:23",
        "updated_at": "2017-08-12 15:01:23",
        "deleted_at": null,
        "roles": [
            {
                "id": 1,
                "name": "User",
                "slug": "user",
                "permissions": {
                    "access-worklogs": true,
                    "crud-own-worklogs": true,
                    "access-user-settings": true,
                    "crud-own-user-settings": true
                },
                "created_at": "2017-08-12 15:01:22",
                "updated_at": "2017-08-12 15:01:22",
                "pivot": {
                    "user_id": 3,
                    "role_id": 1
                }
            },
            {
                "id": 2,
                "name": "User Manager",
                "slug": "user-manager",
                "permissions": {
                    "crud-users": true,
                    "access-users": true,
                    "crud-role-users": true,
                    "access-role-users": true
                },
                "created_at": "2017-08-12 15:01:22",
                "updated_at": "2017-08-12 15:01:22",
                "pivot": {
                    "user_id": 3,
                    "role_id": 2
                }
            },
            {
                "id": 3,
                "name": "Admin",
                "slug": "admin",
                "permissions": {
                    "crud-all-worklogs": true,
                    "crud-user-settings": true
                },
                "created_at": "2017-08-12 15:01:22",
                "updated_at": "2017-08-12 15:01:22",
                "pivot": {
                    "user_id": 3,
                    "role_id": 3
                }
            }
        ]
    },
    "token_type": "Bearer",
    "expires_in": 31536000,
    "access_token": "some.access.token-it-is",
    "refresh_token": "refreshToken"
}`;