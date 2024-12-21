# Transaction

Transaction is collection of operation that performs as single unite of workin database application.

A transaction goes through many different states throughout its life cycle.

These states are called as transaction states.

Transaction states are as follows-
1. Active state
2. Partially committed state
3. Committed state
4. Failed state
5. Aborted state
6. Terminated state

# ACID Properties in DBMS

A- Atomicity
C- Consistency
I- Isolation
D- Durability

## Atomicity
This property ensure that transaction occures entirely or does not occure at all.That is why, it is also referred to as “All or nothing rule“.

## Consistency
It ensures that the database remains consistent before and after the transaction.

## Isolation
This property ensures that multiple transactions can occur simultaneously without causing any inconsistency.During execution, each transaction feels as if it is getting executed alone in the system.
A transaction does not realize that there are other transactions as well getting executed parallely.

##  Durability-
This property ensures that all the changes made by a transaction after its successful execution are written successfully to the disk.

## What is a Schedule?
A schedule is a series of operations from one or more transactions. A schedule can be of two types: 

Serial Schedule: When one transaction completely executes before starting another transaction, the schedule is called a serial schedule.
Concurrent Schedule: When operations of a transaction are interleaved with operations of other transactions of a schedule, the schedule is called a Concurrent schedule
    
    
    
