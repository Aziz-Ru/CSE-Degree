# Software Testing

- Define function ,nofunctiona and regrssion testing.
- Compare & contrast testing levels
Software testing involves executing a program to identify any error or bug in the software product’s code. 
Software Testing is the practice of integrating quality checks throughout the software development to meet the specifiq requirement.

The main goal of software testing is to ensure that the system and its components meet the specified requirements and work accurately in every case.It must be remembered that testing does expose many defects existing in a software product

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
- Acceptance Testing
acceptance testing is formal testing with respect to user needs, requirements, and business
processes. It determines whether a system satisfies the needs of the users, customers, and other stakeholders.Acceptance testing is usually done by the customer or the stakeholders during the maintenance stage of the SDLC.

## Verification & Validation
Verification is the process of checking that software achieves its goal without any bugs.It is the process to ensure whether the product that is developed is right or not**Verification is simply known as Static Testing.**.some of the activities that are involved in verification.
    Inspections
    Reviews
    Walkthroughs
    Desk-checking

Validation is the process of checking whether the software product is up to the mark or in other words product has high-level requirements.**Verification is simply known as Dynamic Testing.**.som activities are 
    Black Box Testing
    White Box Testing
    Unit Testing
    Integration Testing


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

####  Equivalence Partitiong Method:

It is a software testing technique or black-box testing that divides input domain into classes of data, and with the help of these classes of data, test cases can be derived.

#### Equivalence Partitioning Method

 It is a software testing technique or black-box testing that divides input domain into classes of data, and with the help of these classes of data, test cases can be derived.

#### Guidelines

- If the range condition is given as an input, then one valid and two invalid equivalence classes are defined. 
If a specific value is given as input, then one valid and two invalid equivalence classes are defined. 
If a member of set is given as an input, then one valid and one invalid equivalence class is defined. 
If Boolean no. is given as an input condition, then one valid and one invalid equivalence class is defined. 
 
####  Boundary Value Analysis

Boundary Value Analysis is based on testing the boundary values of valid and invalid partitions. The behavior at the edge of the equivalence partition is more likely to be incorrect than the behavior within the partition, so boundaries are an area where testing is likely to yield defects.

It checks for the input values near the boundary that have a higher chance of error. Every partition has its maximum and minimum values and these maximum and minimum values are the boundary values of a partition. 

### Whitebox Testing

White Box Testing is a way of testing the software in which the tester has knowledge about the internal structure or the code or the program of the software.White box testing is mainly focused on ensuring that the internal code of the software is correct and efficient.

#### Control flow testing

Control flow testing is a structural testing strategy. This testing technique comes under white box testing. 

####  Statement Coverage

It is one type of white box testing technique that ensures that all the statements of the source code are executed at least once. 

#### Condition coverage

It testing is a type of white-box testing that ensures all the conditional expressions in a program for all possible outcomes of the conditions. It is also called predicate coverage.

In branch coverage, all conditions must be executed at least once. On the other hand, in condition coverage, all possible outcomes of all conditions must be tested at least once.

- guarantees that all the conditions in the code are checked at least once.

- detects defects from the early stages of the software development life cycle(SDLC)

- improves the quality, maintainability, and reliability of the software.

- helps in faster troubleshooting of errors in the code.

- gives higher confidence, and trust on the code developed for the software


#### Gray Box Testing

Gray Box Testing is a software testing technique that is a combination of the Black Box Testing technique and the White Box Testing technique. The internal structure is partially known in Gray Box Testing. 


### Debugging

Debugging is the process of identifying, analyzing, and fixing errors or issues (commonly referred to as "bugs") in software or a system.

##### Cause elimination

It introduces the concept of binary partitioning. Data related to the error occurrence are organized to isolate potential causes.

#### unit testing
Unit testing is the process of testing the smallest parts of your code, like individual functions or methods, to make sure they work correctly. It’s a key part of software development that improves code quality by testing each unit in isolation.

##### Test-Driven Development (TDD)
In TDD, developers write tests before writing the actual code. This ensures that once the code is completed, it instantly meets the functional requirements when tested, saving time on debugging.
##### After Completing Code Blocks
After a section of code is finished, unit tests are created (if not already done through TDD). These tests are then run to verify that the code works as expected. Unit tests are rarely the first set of tests run during broader system testing.
##### DevOps and CI/CD
In DevOps environments, Continuous Integration/Continuous Delivery (CI/CD) automatically runs unit tests whenever new code is added. This ensures that changes are integrated smoothly, tested thoroughly, and deployed efficiently, maintaining overall code quality.


#### Integration testing

In Integration testing , combined individual units are tested as a group and expose the faults in the interaction between the integrated units. that focuses on verifying the interactions and data exchange between different components or modules of a software application. The goal of integration testing is to identify any problems or bugs that arise when different components are combined and interact with each other.

#### Big-Bang Integration Testing 

- simply put all module  together and tested.
- practicable only for very small systems. 
- If an error is found during the integration testing, it is very difficult to localize the error

- debugging errors reported during Big Bang integration testing is very expensive to fix. 

#### Bottom-Up Integration Testing 

In bottom-up testing, each module at lower levels are tested with higher modules until all modules are tested.
The primary purpose of this integration testing is that each subsystem tests the interfaces among various modules making up the subsystem.

- In bottom-up testing, no stubs are required.
- A principal advantage of this integration testing is that several disjoint subsystems can be tested simultaneously.
- It is easy to create the test conditions.
- Best for applications that uses bottom up design approach.
- It is Easy to observe the test results.

- In this testing, the complexity that occurs when the system is made up of a large number of small subsystems. 

#### Top-down Integration Testing 
Top-down integration testing technique is used in order to simulate the behaviour of the lower-level modules that are not yet integrated. In this integration testing, testing takes place from top to bottom. First, high-level modules are tested and then low-level modules and finally integrating the low-level modules to a high level to ensure the system is working as intended. 

- After the top-level ‘skeleton’ has been tested, the modules that are at the immediately
lower layer of the ‘skeleton’ are combined with it and tested.





### System Testing

System Testing is a type of software testing that is performed on a completely integrated system to evaluate the compliance of the system with the corresponding requirements. . System testing detects defects within both the integrated units and the whole system.


### Acceptance testing

Acceptance testing is the process of evaluating a software application to ensure it meets the specified business requirements and user needs before it is released. 

### Smoke testing
 Smoke testing is a type of functional testing technique where the basic functionality or feature of the application is tested as it ensures that the most important function works properly. 
 
### Regression testing
Regression testing is done to make sure that the code changes do not affect the existing functionality and the features of the application.

### Recovery Testing
Recovery testing is a type of software testing that verifies the software’s ability to recover from failures like hardware failures, software failures, crashes, etc.


### Load testing

Load testing simulates a real-world load on the system to see how it performs under stress. It helps identify bottlenecks and determine the maximum number of users or transactions the system can handle.

### Stress testing 
Stress testing is a type of load testing that tests the system’s ability to handle a high load above normal usage levels.


### Alpha Testing

Alpha Testing is one of the user acceptance tests. It is the first stage of software testing, during which the internal development team tests the program before making it available to clients or people outside the company.

- Alpha testing uses both white box and black box testing.
- performed by testers who are usually internal employees of the organization.
- Alpha testing is performed at the developer’s site.
- ensures the quality of the product before forwarding to beta testing.
- Developers can immediately address the critical issues or fixes in alpha testing.
- Multiple test cycles are organized in alpha testing.

### Beta Testing
Beta Testing is performed by real users of the software application in a real environment. Beta testing is one type of User Acceptance Testing. A pre-release version of the product is made available for testing to a chosen set of external users or customers during the second phase of software testing.

- Beta testing commonly uses black-box testing.
- Beta testing is performed by clients who are not part of the organization.
- Beta testing is performed at the end-user of the product.
- Reliability, security and robustness are checked during beta testing
- Beta testing doesn’t require a testing environment or lab.
- Most of the issues or feedback collected from the beta testing will be implemented in future versions of the product.
- Only one or two test cycles are there in beta testing.
