## Assesment.
Follow these steps to run the application

### Steps:
1. Initialize the project using express-generator: ``npx express-generator kadoAboveAssesment``
2. Install the required packages:
    - nodemon: For development purposes ``npm i nodemon --save-dev``
    - cors: Cors helper to access endpoint security ``npm i cors --save``
    - mocha: For writing tests: ``npm i mocha --save``
    - express-rate-limit: For throttling: ``npm i express-rate-limit``


  - To scale the solution to millions of users we can use AWS Elastic Load Balancer (ELB) with route 53. Elastic Load balance will balance traffic distribution and also has health checks to ensure that traffic is routed to a working host.
  - To scale the application we can create multiple availability zones . We can use AWS s3 and CloudFront CDN. Add CDN for static files for optimizing cross-origin performance and lower the latency
  - For logging and monitoring , we can use AWS cloudwatch which will collect logs and operational data in form metrics , logs and events

