# Software Testing

- Define function ,nofunctiona and regrssion testing.
- Compare & contrast testing levels
Software testing involves executing a program to identify any error or bug in the software product’s code. 
Software Testing is the practice of integrating quality checks throughout the software development to meet the specifiq requirement.

The main goal of software testing is to ensure that the system and its components meet the specified requirements and work accurately in every case.It must be remembered that testing does expose many
defects existing in a software product

The purpose of testing is to
- check whether the software matches expected requirements and
- ensure error-free software.

There are 3 types of testing

- Functional Testing
- Non Functional Testing
- Regression Testing: Regression testing, also called maintenance testing, confirms that a recent change to the application, such as a bug fix, does not adversely
affect already existing functionality

There 4 testing levels.

- Unit Testing
    - Test a Modeule of Code
    - Occures during the build of phase SDLC
    - Eliminate errors before integration with other modules
    
- Integration Testing
    - Identify error introduces when two or more modules are combined
    - Type blacbox testing
    - Occure when modules are combined into large projects.
- System Testing
    - 
- Acceptance Testing
acceptance testing is formal testing with respect to user needs, requirements, and business
processes. It determines whether a system satisfies the needs of the users, customers, and other stakeholders.Acceptance testing is usually done by the customer or the stakeholders during the maintenance stage of the SDLC.

#### Objectives

- Enhance software reliability and stability through rigorous testing.

- Identify performance bottlenecks and optimize software efficiency

- Validate software compatibility across different platforms and environments. 

- Verify proper handling of edge cases and exceptional scenarios.

- Detect and address security vulnerabilities to protect user data. 

#### Manual Testing

Manual testing is the process of verifying an application’s functionality by client requirements without using any automated techniques.

- Whitebox Testing
- Blackbox Testing
- Graybox Testing


#### Blackbox Testing

In the black-box testing approach, test cases are designed using only the functional specification of the software, i.e. without any knowledge of the internal structure of the software.

Black-box testing is a type of software testing in which the tester is not concerned with the software’s internal knowledge or implementation details but rather focuses on validating the functionality based on the provided specifications or requirements.

**Black box testing uses methods like equivalence partitioning, boundary value analysis, and error guessing to create test cases.**

Black box testing does not require any knowledge of the internal workings of the software, and can be performed by testers who are not familiar with programming languages.

- Equivalence Partitiong Method:

It is a software testing technique or black-box testing that divides input domain into classes of data, and with the help of these classes of data, test cases can be derived.

#### Equivalence Partitioning Method

 It is a software testing technique or black-box testing that divides input domain into classes of data, and with the help of these classes of data, test cases can be derived.
 
####  Boundary Value Analysis

Boundary Value Analysis is based on testing the boundary values of valid and invalid partitions. The behavior at the edge of the equivalence partition is more likely to be incorrect than the behavior within the partition, so boundaries are an area where testing is likely to yield defects.

It checks for the input values near the boundary that have a higher chance of error. Every partition has its maximum and minimum values and these maximum and minimum values are the boundary values of a partition. 

### Whitebox Testing

White Box Testing is a way of testing the software in which the tester has knowledge about the internal structure or the code or the program of the software.White box testing is mainly focused on ensuring that the internal code of the software is correct and efficient.
