export const MockLogin = `{
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
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjEwOWEwZDdhZDQ1YjFlNzFiNWRiZWU4OWZhYzFjMThkYjUwMzcyZGU0YjE2MTgzNTMwOWQ3YTkzZDRmOTRkMzM5ZDA2YTRkNzFmZjQ0ZmRlIn0.eyJhdWQiOiIxIiwianRpIjoiMTA5YTBkN2FkNDViMWU3MWI1ZGJlZTg5ZmFjMWMxOGRiNTAzNzJkZTRiMTYxODM1MzA5ZDdhOTNkNGY5NGQzMzlkMDZhNGQ3MWZmNDRmZGUiLCJpYXQiOjE1MDI3NDE3NTAsIm5iZiI6MTUwMjc0MTc1MCwiZXhwIjoxNTM0Mjc3NzUwLCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.CON6aM2ZnTwPtmoaUWDlEZ2zmIqTITuREzvIeMeobQrl57fSYVGWIduJJOGaVLcMx_w3lOGMuyh1AL--cuGHgz3gngFAj1fWm2ibcYp9YQDejqXubu4ZLbQ74PSUYtB4TlcBMWnacQaX9N2TmWw4MaJHNFJ6VQtVKn_7hLfU093fn19hTvHkd3srD16ph83drk96mC_QjiyKZ3NvHoeUBae4ytd0nGp6XL08KHtchA8e7bHaaZ_4r9cmZm0-PDWAHt3JWjBrsvaY-E-nQ-ku7yjkMfR5FbJImSsNdYLalWSdTc21MHhvKjVT8qAgUY7aqbfISL7KWqI2kaTiexN7W2w9_i-e36VBPJFZPOMUry7oeOasjnoBlVRrcbOjp0s2oAGjKzsxBQ8h2HagX2mAqWzc_O5tCbaux5SwdWjnTdHH5xi8C_19nbFDE-3TLEfQ8sO9s-95fQXKNIkCMJ4hVZoHNg-A6n1JRKq6CjSpPe4G2BOh4LLyZZV2rSChWGW3UXB440DT52CEmwnOVPMtVxP-K__67HQ4YYbd5ddlXc4W4d-1zQovfO8y0zyRX-EIVhesQsb23OtPWCyDPKDekUWOOToB3pXbXpeSgNPgStVBMWtn7feDtomcUfxDFXaf7mrpAg0qjnbrh7Opzv_sLaiHVFIo9F40uSaUIWEXYzI",
    "refresh_token": "def502006f546427dd17c3af5f7e47844ba4b1a5aaca9ee17425fc591ade7465cb2bff380bec7a605e9ab53ddbbf8f0e2f95d372a52895395c8a5dcea5c73855cbdb7aebd7a29b86dc6acc41f0b3f73dc1d701ba32a0deb4d5bb4aaea19ea6bd9fc4a96fa946a978c842d11e4760302814463942b0ba2367d400ebdc9128492b4eb1279b60a5c0d0802c57aff652185ce2afd1513495341fc08e39bbc34aaf82296ffe01bffc0a885780bd0e6a71b06bd0a4da3aae7126c6e9a5eb92466511a1eede9a89d2d56a55a61a665897425c5f9bb6573ad0e3cd0e9e412a3a1994622b9199507c14347d036230bb4fe684c580a9da8fa840b49fa662f5835582c2b552a79b49f72a82369bf84d5828b8d5f01f9c3bb2f253ce2f3d6639507d686ba0a32181af64541e99f04273cbc9f96197e7e1896c49fa188a8d71089bb0b4f6e39b505db7bdefbade248bdf1df0aff5ce1bb8e9241a66d6fe9e320a1de76107b31ba5"
}`;