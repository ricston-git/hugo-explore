---
draft:        false
Title:       "Insurance"
Description: "Insurance"
date: "2014-05-20T10:04:31Z"
---

## Health Insurance Case Study

## The Problem
In 2010, a leading global health services company based in North America set out to capture and log details of support services provided to their customer to provide their support team, nurses and coaches with comprehensive historical data when in the field servicing customers. This required integration of data from multiple sources within the organisation.

## Our Solution
Ricston’s solution was to configure Mule ESB Enterprise Edition (EE) to listen for HTTP requests fired by the web application used by the client’s Customer Support Team to log information about calls, fetch data from various Oracle relational and XML databases including aggregating different pieces of data into a single payload, and finally store the new information back into the database. 

With the first part of the project complete, Ricston’s consultants then used Mule ESB EE in a slightly different way, as a batch engine. Every couple of days, the entire customer database required updating through a batch process. Mule controlled this process by reading batches of data from the database, and through using its internal VM queues, Ricston consultants were able to successfully make the process as parallel as possible with little effort.
