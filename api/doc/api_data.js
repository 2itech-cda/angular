define({ "api": [
  {
    "type": "post",
    "url": "/products",
    "title": "Create",
    "name": "Create",
    "group": "Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Product name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Product description</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "active",
            "description": "<p>Product activation</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "price",
            "description": "<p>Product price</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "JSON",
        "content": "{\n    \"name\": \"Item name\",\n    \"description\": \"Item description\",\n    \"active\": true,\n    \"price\": 39.99\n}",
        "type": "json"
      },
      {
        "title": "Curl",
        "content": "curl \\\n  -X POST \\\n  http://localhost:3000/products \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRm9vIiwiZW1haWwiOiJmb29AZXhhbXBsZS5jb20iLCJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjA1MTg2MTg4fQ.LA_Y-NthD0gP4S4H34-JviakZ5b2kUx76cxCi2iSumE' \\\n  -d '{\"name\":\"Item name\",\"description\":\"Item description\",\"active\":true,\"price\": 39.39}'",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "cmd/app/internal/handlers/product.go",
    "groupTitle": "Product",
    "error": {
      "examples": [
        {
          "title": "Error 400",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"missing or malformed jwt\"\n}",
          "type": "json"
        },
        {
          "title": "Error 401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"invalid or expired jwt\"\n}",
          "type": "json"
        },
        {
          "title": "Error 401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Unauthorized\"\n}",
          "type": "json"
        },
        {
          "title": "Error 500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/products/:id",
    "title": "Delete",
    "name": "Delete",
    "group": "Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Product ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Curl",
        "content": "curl -X DELETE http://localhost:3000/products/77efb316-070b-a144-8425-148ed175e164 \\\n  -H \"Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRm9vIiwiZW1haWwiOiJmb29AZXhhbXBsZS5jb20iLCJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjA1MTg2MTg4fQ.LA_Y-NthD0gP4S4H34-JviakZ5b2kUx76cxCi2iSumE\"",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "cmd/app/internal/handlers/product.go",
    "groupTitle": "Product",
    "success": {
      "examples": [
        {
          "title": "Error 204",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 400",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"missing or malformed jwt\"\n}",
          "type": "json"
        },
        {
          "title": "Error 401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"invalid or expired jwt\"\n}",
          "type": "json"
        },
        {
          "title": "Error 401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Unauthorized\"\n}",
          "type": "json"
        },
        {
          "title": "Error 404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/products/:id",
    "title": "Find",
    "name": "Find",
    "group": "Product",
    "examples": [
      {
        "title": "Curl",
        "content": "curl http://localhost:3000/products/fbe66211-b350-4647-ae32-29aca84a27b7",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "UUID",
            "optional": false,
            "field": "id",
            "description": "<p>Product ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"fbe66211-b350-4647-ae32-29aca84a27b7\",\n    \"name\": \"Item name\",\n    \"description\": \"Item Description\",\n    \"active\": true,\n    \"price\": 10.9,\n    \"date_created\": \"0001-01-01T00:00:00Z\",\n    \"date_updated\": \"0001-01-01T00:00:00Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "cmd/app/internal/handlers/product.go",
    "groupTitle": "Product",
    "error": {
      "examples": [
        {
          "title": "Error 404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error 500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/products",
    "title": "List",
    "name": "List",
    "group": "Product",
    "examples": [
      {
        "title": "Curl",
        "content": "curl http://localhost:3000/products",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "products",
            "description": "<p>Product list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Product name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Product description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "active",
            "description": "<p>Product activation</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "price",
            "description": "<p>Product price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>Product created date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_updated",
            "description": "<p>Product updated date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"b1b5cbac-cc2d-4f1d-9bf6-ace5eb09438f\",\n    \"name\": \"Item 1\",\n    \"description\": \"Item Description 1\",\n    \"active\": true,\n    \"price\": 29.90,\n    \"date_created\": \"0001-01-01T00:00:00Z\",\n    \"date_updated\": \"0001-01-01T00:00:00Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "cmd/app/internal/handlers/product.go",
    "groupTitle": "Product",
    "error": {
      "examples": [
        {
          "title": "Error 500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create",
    "version": "0.1.0",
    "name": "Create",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User role (Nobody: 0 | Guest: 1 | User: 7 | Admin: 15)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "JSON",
        "content": "{\n    \"name\": \"Bar\",\n    \"email\": \"bar@example.com\",\n    \"password\": \"1234\",\n    \"role\": 7\n}",
        "type": "json"
      },
      {
        "title": "Curl",
        "content": "curl \\\n  -X POST \\\n  http://localhost:3000/users \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRm9vIiwiZW1haWwiOiJmb29AZXhhbXBsZS5jb20iLCJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjA1MTg2MTg4fQ.LA_Y-NthD0gP4S4H34-JviakZ5b2kUx76cxCi2iSumE' \\\n  -d '{\"name\":\"Bar\",\"email\":\"bar@example.com\",\"password\":\"1234\",\"role\": 7}'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n{\n    \"name\": \"Bar\",\n    \"email\": \"bar@example.com\",\n    \"date_created\": \"0001-01-01T00:00:00Z\",\n    \"date_updated\": \"0001-01-01T00:00:00Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "cmd/app/internal/handlers/user.go",
    "groupTitle": "User",
    "error": {
      "examples": [
        {
          "title": "Error 400",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"missing or malformed jwt\"\n}",
          "type": "json"
        },
        {
          "title": "Error 401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"invalid or expired jwt\"\n}",
          "type": "json"
        },
        {
          "title": "Error 401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Unauthorized\"\n}",
          "type": "json"
        },
        {
          "title": "Error 500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/users/:email",
    "title": "Delete",
    "version": "0.1.0",
    "name": "Delete",
    "group": "User",
    "description": "<p>Delete a user by its email.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Curl",
        "content": "curl -X DELETE http://localhost:3000/users/bar@example.com \\\n  -H \"Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRm9vIiwiZW1haWwiOiJmb29AZXhhbXBsZS5jb20iLCJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjA1MTg2MTg4fQ.LA_Y-NthD0gP4S4H34-JviakZ5b2kUx76cxCi2iSumE\"",
        "type": "curl"
      }
    ],
    "filename": "cmd/app/internal/handlers/user.go",
    "groupTitle": "User",
    "success": {
      "examples": [
        {
          "title": "Error 204",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error 401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Unauthorized\"\n}",
          "type": "json"
        },
        {
          "title": "Error 404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/:email",
    "title": "Find",
    "version": "0.1.0",
    "description": "<p>Find a user by its email.</p>",
    "name": "Find",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The user name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The user email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>The date the user was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_updated",
            "description": "<p>The date the user was updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"name\": \"Foo\",\n    \"email\": \"foo@example.com\",\n    \"date_created\": \"0001-01-01T00:00:00Z\",\n    \"date_updated\": \"0001-01-01T00:00:00Z\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl",
        "content": "curl http://localhost:3000/users/foo@example.com \\\n  -H \"Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRm9vIiwiZW1haWwiOiJmb29AZXhhbXBsZS5jb20iLCJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjA1MTg2MTg4fQ.LA_Y-NthD0gP4S4H34-JviakZ5b2kUx76cxCi2iSumE\"",
        "type": "curl"
      }
    ],
    "filename": "cmd/app/internal/handlers/user.go",
    "groupTitle": "User",
    "error": {
      "examples": [
        {
          "title": "Error 400",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"missing or malformed jwt\"\n}",
          "type": "json"
        },
        {
          "title": "Error 401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"invalid or expired jwt\"\n}",
          "type": "json"
        },
        {
          "title": "Error 401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Unauthorized\"\n}",
          "type": "json"
        },
        {
          "title": "Error 404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Not Found\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users",
    "title": "List",
    "version": "0.1.0",
    "name": "List",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>User list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "role",
            "description": "<p>User role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>User created date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_updated",
            "description": "<p>User updated date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n     \"name\": \"Foo\",\n     \"email\": \"foo@example.com\",\n     \"date_created\": \"0001-01-01T00:00:00Z\",\n     \"date_updated\": \"0001-01-01T00:00:00Z\"\n }]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl",
        "content": "curl http://localhost:3000/users \\\n  -H \"Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRm9vIiwiZW1haWwiOiJmb29AZXhhbXBsZS5jb20iLCJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjA1MTg2MTg4fQ.LA_Y-NthD0gP4S4H34-JviakZ5b2kUx76cxCi2iSumE\"",
        "type": "curl"
      }
    ],
    "filename": "cmd/app/internal/handlers/user.go",
    "groupTitle": "User",
    "error": {
      "examples": [
        {
          "title": "Error 400",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"missing or malformed jwt\"\n}",
          "type": "json"
        },
        {
          "title": "Error 401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"invalid or expired jwt\"\n}",
          "type": "json"
        },
        {
          "title": "Error 401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Unauthorized\"\n}",
          "type": "json"
        },
        {
          "title": "Error 500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login",
    "version": "0.1.0",
    "name": "Login",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRm9vIiwiZW1haWwiOiJmb29AZXhhbXBsZS5jb20iLCJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjA1MTg2MTg4fQ.LA_Y-NthD0gP4S4H34-JviakZ5b2kUx76cxCi2iSumE\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "JSON",
        "content": "{\n    \"email\": \"foo@example.com\",\n    \"password\": \"0000\"\n}",
        "type": "json"
      },
      {
        "title": "Curl",
        "content": "curl \\\n  -X POST \\\n  http://localhost:3000/login \\\n  -H 'Content-Type: application/json' \\\n  -d '{\"email\":\"foo@example.com\",\"password\":\"0000\"}'",
        "type": "curl"
      }
    ],
    "filename": "cmd/app/internal/handlers/user.go",
    "groupTitle": "User",
    "error": {
      "examples": [
        {
          "title": "Error 401",
          "content": "HTTP/1.1 401 Bad Request\n{\n  \"message\": \"Bad Request\"\n}",
          "type": "json"
        },
        {
          "title": "Error 401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Unauthorized\"\n}",
          "type": "json"
        },
        {
          "title": "Error 500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Register",
    "version": "0.1.0",
    "name": "Register",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "JSON",
        "content": "{\n    \"name\": \"Bar\",\n    \"email\": \"bar@example.com\",\n    \"password\": \"1234\"\n}",
        "type": "json"
      },
      {
        "title": "Curl",
        "content": "curl \\\n  -X POST \\\n  http://localhost:3000/register \\\n  -H 'Content-Type: application/json' \\\n  -d '{\"name\": \"Bar\", \"email\":\"bar@example.com\",\"password\":\"1234\"}'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"name\": \"Bar\",\n    \"email\": \"bar@example.com\",\n    \"date_created\": \"0001-01-01T00:00:00Z\",\n    \"date_updated\": \"0001-01-01T00:00:00Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "cmd/app/internal/handlers/user.go",
    "groupTitle": "User",
    "error": {
      "examples": [
        {
          "title": "Error 401",
          "content": "HTTP/1.1 401 Bad Request\n{\n  \"message\": \"Bad Request\"\n}",
          "type": "json"
        },
        {
          "title": "Error 401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Unauthorized\"\n}",
          "type": "json"
        },
        {
          "title": "Error 500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/users",
    "title": "Update",
    "version": "0.1.0",
    "name": "Update",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User role (Nobody: 0 | Guest: 1 | User: 7 | Admin: 15)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "JSON",
        "content": "{\n    \"name\": \"FooBar\",\n    \"email\": \"bar@example.com\",\n    \"password\": \"0000\",\n    \"role\": 7\n}",
        "type": "json"
      },
      {
        "title": "Curl",
        "content": "curl \\\n  -X POST \\\n  http://localhost:3000/register \\\n  -H 'Content-Type: application/json' \\\n  -H \"Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRm9vIiwiZW1haWwiOiJmb29AZXhhbXBsZS5jb20iLCJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjA1MTg2MTg4fQ.LA_Y-NthD0gP4S4H34-JviakZ5b2kUx76cxCi2iSumE\" \\\n  -d '{\"name\": \"FooBar\",\"email\":\"bar@example.com\",\"password\":\"0000\",\"role\":7}'",
        "type": "curl"
      }
    ],
    "filename": "cmd/app/internal/handlers/user.go",
    "groupTitle": "User",
    "success": {
      "examples": [
        {
          "title": "Error 204",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  }
] });
