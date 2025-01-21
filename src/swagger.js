const swaggerJSDoc = require('swagger-jsdoc');

// Cấu hình Swagger
const swaggerDefinition = {
  openapi: '3.0.0', // Phiên bản OpenAPI
  info: {
    title: 'API Documentation', // Tên tài liệu
    version: '1.0.0', // Phiên bản API
    description: 'API documentation for Node.js application', // Mô tả
  },
  servers: [
    {
      url: 'http://localhost:8086', // URL server
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/Routes.js'], // Đường dẫn tới các file chứa định nghĩa API
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;