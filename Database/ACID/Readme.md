# ACID

- Atomicity
- Consistency
- Isolation
- Durability

Fundamental or Principal of Database System

## What is Database Transaction

A transaction is a collection of queries that are treated as one unit of work.Exmp:Account Deposit (select,update,update)

#### Transaction Lifespan

- Transaction Begin

- Transaction Commit

- Transaction Rollback

- Transaction unexpected ending=Rollback

Send $100 From account-1 to account-2

Begin

```
   SELECT BALANCE FROM ACCOUNT WHERE ID=1
   BALANCE>100
   UPDATE ACCOUNT SET BALANCE =BALANCE-100 WHERE ID=1

   UPDATE ACCOUNT SET BALANCE =BALANCE+100 WHERE ID=2
```

End

## Atomicity

- Atomicity is idea of transaction being one unit and that cannot be split.

- All queries in transaction must be succeed.

- If one query fails all prior successful queries in the transaction should be rollback

- If the database went down prior to commit of a transaction all the successful queries in th transaction should be rollback.Database should clean this up after restart.

## Isolation

So to talk about isolation, we have to answer this question.We have transactions, correct?
And if it's a single user, that's fine.But we have many TCP connections to my database if you support remote and remote connections.And then each connection execute transactions.
`So there is a chance where concurrency can happen, multiple transaction fighting over to write and`.And that's what isolation come into place.

- Dirty Reads
  You read something that some other transaction has wrote but didn't really commit yet.

- Non repeatable reads : You read a value, right?And then in the same transaction, you read it again.And that sounds ridiculous.

- Phantom reads: And these are things that you cannot really read because they don't exist yet.
