# Third task

## Integrations hire project
Create node.js app that synchronizes contacts and tickets from Hubspot to
MySQL/MariaDB database.
Use [sequelize npm package](https://www.npmjs.com/package/sequelize). for database communication.
This synchronization process will run periodically in 10 min intervals.
Optimize this process for synchronization of large amounts of contacts/tickets.
You can use any project structure you want.
Create at least two tables in DB: contacts and tickets (you can create additional tables if
you need them)
DB schema is up to you.

## Contact sync
### https://legacydocs.hubspot.com/docs/methods/contacts/contacts-overview

Contact fields to sync from Hubspot:

* vid
* firstname
* lastname
* createdate

## Ticket sync
### https://legacydocs.hubspot.com/docs/methods/tickets/tickets-overview

Ticket fields to sync from Hubspot:

* id
* content

## v2

There is a high demand from our clients for Hubspot integration with our system. Your task is
to create a program that will synchronize contacts and tickets from Hubspot into our
database.
Clients would also be happy if the time delay between their updated contact/ticket in
Hubspot and its copy in our system would be as short as possible.
When creating your solution, do not forget that some of our clients have over 100 000
contacts/tickets in their Hubspot.

Our clients would like to sync these data from hubspot
**Contacts** : first name, last name, all emails and phone numbers
**Tickets** : ticket content and contact that ticket belongs to

You are free to choose your own programming language and database.

Useful links:

* https://legacydocs.hubspot.com/docs/methods/contacts/contacts-overview
* https://legacydocs.hubspot.com/docs/methods/tickets/tickets-overview