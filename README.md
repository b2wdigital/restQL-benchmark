The tests for the benchmark below were done using the out of the box configuration of the tools involved. No tuning or configuration changes were applied. The goal was to test the out of the box performance of the compared tools.

The environment used was one C5.large AWS instance which has the simplest configuration of the compute optimized line (2 vCPU and 4GB RAM). To create a consistent environment all services called by restQL or the tool were stubed using [tanker-go]( https://github.com/MachadoLhes/tanker-go). Tanker go allows to specify the response time of the request in the query string so that it mimics a real service.

We’ve used open source [vegeta](https://github.com/tsenart/vegeta) for the load test. All the code and artifacts used in the tests are included in this repo.

### Reliency

Being a key component between clients and APIs, resiliency needs to play a key role in a solution like restQL or GraphQL. Below we compare the success and error rate between both solutions.

![Successfull responses](https://docs.google.com/spreadsheets/d/e/2PACX-1vRuM9L7z60rDmjctuZzG4KdOD41JMwzXdwt_J-MyJYTpwi_TS4XjvkLwhrR3IK4rrBdj-J3kGWtSnu1/pubchart?oid=1261108315&format=image)

![Error responses](https://docs.google.com/spreadsheets/d/e/2PACX-1vRuM9L7z60rDmjctuZzG4KdOD41JMwzXdwt_J-MyJYTpwi_TS4XjvkLwhrR3IK4rrBdj-J3kGWtSnu1/pubchart?oid=1002516891&format=image)

As shown above, under heavy load, restQL returns 10X more successfull responses than Apollo.

## Response time results

Being a key component between clients and APIs, a middleware solution should add as few overhead as possible. Below we compare the response time between restQL and Apollo GraphQL.

![Average response time](https://docs.google.com/spreadsheets/d/e/2PACX-1vRuM9L7z60rDmjctuZzG4KdOD41JMwzXdwt_J-MyJYTpwi_TS4XjvkLwhrR3IK4rrBdj-J3kGWtSnu1/pubchart?oid=1622668985&format=image)

![99 percentile response time](https://docs.google.com/spreadsheets/d/e/2PACX-1vRuM9L7z60rDmjctuZzG4KdOD41JMwzXdwt_J-MyJYTpwi_TS4XjvkLwhrR3IK4rrBdj-J3kGWtSnu1/pubchart?oid=660505214&format=image)

As shown above, under small load, restQL and Apollo response times are pretty similar. However when the load increases (from 40 queries/sec in our example) we see a spike in Apollo response time whilst restQL remains stable. The difference is bigger when we consider the 99 percentile (restQL is about 6,5x faster).  







