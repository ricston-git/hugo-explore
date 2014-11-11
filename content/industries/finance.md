---
draft:        false
Title:       "Finance"
Description: "Finance"
date: "2014-05-20T10:04:31Z"

---

## Global Financial Institution Case Study

## The Problem
The Bank had three major areas it needed to address:

It found itself struggling to manage and orchestrate the numerous web services exposed by the various systems running within the bank.
The bank had a solution in place that was used to move large files around the organisation. However the solution required the installation and configuration of different products on each host and destination and configuring routing of files between host and destination systems was cumbersome and imposed a high admin overhead.
The third major functional requirement was an infrastructure for the transmission of financial transaction data. The bank already had a solution in place using an old version of Mule together with some customisations.
The last hurdle of this project was uptime. Since Mule was going to sit in the center of the organisation, uptime was of immense importance. Downtime had to be reduced to a minimum. 

## Our Solution
Ricston helped the bank address the above problems by using Mule.

The first requirement was resolved via the introduction of Mule ESB in the center of their business. Instead of exposing a multitude of different web services on different hosts to their  client users, a Mule instance was used as a proxy. Users would only talk to the ESB, and the ESB would route the requests to the appropriate destination. This also served as an extra layer of security, as only the Mule ESB would be exposed to the external network, while all other hosts would sit on the secured internal network. Having an ESB in place also allowed the bank to expose new services by orchestrating other services together.

The second requirement to move large files around the organisation was resolved by using Mule ESB so that all routing was handled in the ESB, including reading from the host, and writing to destination. Configuring and maintaining of routing was centralised in the bus which streamlined and simplified administration.

Ricston further helped the bank upgrade their infrastructure used for the transmission of financial transactions and data. The existing solution that ran on an older version of Mule ESB together with some customisations was upgraded to the current release of Mule significantly reducing the overhead attached to the configuration and monitoring of this infrastructure.

To maximise Uptime the bank installed two physical sites, each in a different country for contingency, and Ricston consultants drew up the plan to deploy Mule in order to reduce downtime in case of a disaster.
