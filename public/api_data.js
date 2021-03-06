define({ "api": [
  {
    "type": "post",
    "url": "http://148.66.134.64:5000/api/v1/users/register",
    "title": "User Registration",
    "name": "User_Registration",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_no",
            "description": "<p>This must be unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tran_password",
            "description": "<p>This must be a 4 digit password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "full_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>This is optional field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>It will be in this format YYYY-DD-MM</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Can be Male or Female</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ref_id",
            "description": "<p>Referral Code of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_id",
            "description": "<p>Device id of the user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"error\": false,\n    \"message\": \"User registered successfully!\",\n    \"data\": {\n        \"user_id\": 40,\n        \"token\": \"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQwLCJ1c2VyX3R5cGUiOiJjdXN0b21lciIsImlhdCI6MTYyMDIxMzIxMiwiZXhwIjoxNjI3OTg5MjEyfQ.C02Yp6comxoJwbzAeEJOlitxfQOt8pNMp-EF3Q1bTzrtS33pojJNA8X_Pj8n0mGBiSUitvd9yQygN73C6Q1YRw\",\n        \"user_type\": 3,\n        \"user_name\": \"nilesh sanyal\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Unprocessable Entity\n{\n   \"error\": true,\n   \"message\": \"User Already Exist, Please Enter Different Mobile number\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n   \"error\": true,\n    \"errors\": [\n         {\n             \"value\": \"\",\n             \"msg\": \"Mobile number is a required field\",\n             \"param\": \"mobile_no\",\n             \"location\": \"body\"\n         },\n         {\n             \"value\": \"\",\n             \"msg\": \"Invalid mobile number\",\n             \"param\": \"mobile_no\",\n             \"location\": \"body\"\n         },\n         {\n             \"value\": \"\",\n             \"msg\": \"Password is a required field\",\n             \"param\": \"password\",\n             \"location\": \"body\"\n         }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/users/user.controller.js",
    "groupTitle": "User"
  }
] });
