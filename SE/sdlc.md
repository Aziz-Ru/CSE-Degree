# SDLC

## Software Development Life Cycle(SDLC)

A software development life cycle (SDLC) model (also called software life cycle model and
software development process model) describes the diﬀerent activities that need to be carried
out for the software to evolve in its life cycle.The software development life cycle (SDLC) is a structured process that is used to design, develop, and test good-quality software. SDLC is a methodology that defines the entire procedure of software development step-by-step. The goal of the SDLC life cycle model is to deliver high quality, maintainable software that meets the user’s requirements. The Software Development Life Cycle, known as the SDLC,is a systematic process to develop high-quality software in a predictable timeframe and budget.The goal of the SDLC is to produce software that meets a client’s business requirements.

### Process versus methodology

A software development process has a much broader scope as compared to a software development  methodology. A process usually describes all the activities starting from the inception of a software to its maintenance and retirement stages, or at least a chunk of activities in the  life cycle. It also recommends speciﬁc methodologies for carrying out each activity. A methodology, in contrast, describes the steps to carry out only a single or at best a few individual activities.

- Systematic and Organized Approach
- Improved Project Management
- Risk Management
- Requirement Clarity
- Quality Assurance
- Cost and Time Efficiency
  
#### Advantage

- increased efficiency and reduce risks

- team members know what they should be working on and when.

- facilitates communication between the customer, other stakeholders, and the development team.

**Phases of the SDLC**
There are 6 phase in SDLC. Each phase is discreate meaning that task from a previous phase do not overlap with task in next phase. 

- **Requirement Analysis**:To gather and analyze the needs of the stakeholders and document the software requirements.
- **Design**:To create a blueprint or architecture of the software system based on the gathered requirements.
- **Implementation/Coding**:To convert the design into executable code using programming languages and tools.
- **Testing**:To identify and fix defects, ensuring the software works as intended.
Activities:
- **Deployment**:To make the software available for use in the production environment.
- **Maintenance**:To ensure the software continues to function correctly and efficiently after deployment.

  
1. Planning & Requirements Gathering

- Requirements Gathered
- Analyzed
- Documented
- Prioritized

Requirements gathering is a important phase in the software development life cycle (SDLC) and project management. It involves collecting, documenting, and managing the requirements that define the features and functionalities of a system or application.

- Stakeholder Identification : Identify all stakeholders who will be affected by the system, directly or indirectly.

- Stakeholder Analysis:Understand the needs, expectations, and influence of each stakeholder.Analyze stakeholder inputs to prioritize requirements and manage conflicting interests.

- Problem Definition:Clearly define the problems or opportunities that the software system aims to address.

- Requirements Extraction:Gather detailed requirements by interacting with stakeholders.

- Validation and Verification: Ensure that gathered requirements are accurate, complete, and consistent.

- Requirements Documentation:Document gathered requirements in a structured format.

Benifits: Cost Reduction,Customer Satisfaction,Improved Communication,Enhanced Quality,Accurate Planning

Software requirements can be classified into four broad categories:
- functional,
- external and User Interface, or UI,
- system features,
- and non-functional.

#### Functional Requirements

These are the requirements that the end user specifically demands as basic facilities that the system should offer.

2. System Design
- Transforming requirements into code.
- Breaking down requirements into sets of related modeule.
- Design communicating business rules and application login.

In the design phase, the requirements gathered from the SRS are used to develop the software architecture.In the design phase, the software’s architecture and user interface are developed. This step defines how the software will work and how users will interact with it.

3. Implementation (or Coding)
 
- Mainatainability
- Readability
- Testablity
- Security


Implementation phase is the most important phase of Software Development Life Cycle (SDLC) this phase comes after design phase. Output of the design phase will be implemented in the this phase.This phase often requires the use of programming tools, different programming languages, and software stacks.

4. Testing
Code needs to be thoroughly tested to ensure it is stable, secure, and meets the requirements. Some common levels of testing include
- unit testing ->Unit testing is often done by the developer and tests the smallest component of code that can be isolated from the rest of the system.
- integration testing->Once the components are integrated into the larger product, integration testing occurs.
- system testing ->Then, after the larger product is deemed completed, system testing can take place.
and 
- acceptance testing-> User acceptance testing, or UAT for short and sometimes called beta testing, is when the software is tested by the intended end user. Types of testing can broadly be divided.

6. Deployement

The deployment phase is where the application is released into the production environment and made available to users.

5. Maintenance
The maintenance phase happens once the code has been deployed into a production environment.This phase helps to find any other bugs, identify user interface issues, or UI for short, and identify other requirements that may not have been listed in the SRS.


### Software Development Methodologies

A specific methodology for developing software is commonly used in order to assist the development team to clarify communication among team members and determine how and when information is
shared.

### What is Software Modeling?


Software modeling is the process of creating abstract representations of a software system. These models serve as blueprints that guide developers, designers, and stakeholders through the system’s structure, behavior, and functionality. 


### Waterfall Model

The Waterfall model is a linear and sequential model which means that a development phase cannot begin unti the previous is completed.



**Advantages**

- simple and easy to understand.
- useful for small projects.
- easy to manage.
- we can move to the next phase only after the first phase is successfully completed so that there is no overlapping between the phases.

**Disadvantages**

- complete and accurate requirements are expected at the beginning of the development process
- go back to the previous phase due to which it is very difficult to change the requirements.
- high risk and uncertainty in this model.
- testing period comes very late

### Prototyping Model
- **Small Scale replica to clarify requirements.**
- Test design ideas.
Prototype model is an activity in which prototypes of software applications are created. First a prototype is created and then the final product is manufactured based on that prototype.A prototype is a toy implementation of the system.A prototype usually turns out to be a very crude version of the actual system.

**One problem in this model is that if the end users are not satisfied with the prototype model, then a new prototype model is created again, due to which this model consumes a lot of money and time.**

### Iterative Model

In Iterative model we start developing the software with some requirements and when it is developed, it is reviewed. If there are requirements for changes in it, then we develop a new version of the software based on those requirements. This process repeats itself many times until we get our final product.

In iterative models, bugs and errors can be identified quickly.
Under this model, software is prepared quickly with some specifications.
Testing and debugging the software becomes easier during each iteration.
We get reliable feedback from users along with blueprints.
This model is easily adaptable to constantly changing needs.


Iterative model is not suitable for small projects.
Since we have to repeat iterations many times in the software development process due to which we require more resources.
Since the requirements are constantly changing, we have to make frequent changes in the software.
Due to constantly changing requirements, the budget of the project also increases and it takes more time to complete it.
### Incremental Model

software requirements are divided or broken down into several stand-alone modules or increments in the SDLC 

- we collect the customer's requirements, now instead of making the entire software at once, we first take some requirements and based on them create a module or function of the software and deliver it to the customer. Then we take some more requirements and based on them add another module to that software.

- modules are added to the software in each increment until the complete system is created.

- starts by developing an initial implementation, then user feedback is taken on it, and it is developed through several versions until an accepted system is developed. 

#### Advantages
1. Important modules/functions are developed first and then the rest are added in chunks.

2. Working software is prepared quickly and early during the software development life cycle (SDLC).

3. This model is flexible and less expensive to change requirements and scope

4. The customer can respond to each module and provide feedback if any changes are needed.

5. Project progress can be measured.

6. easier to test and debug

#### Disadvantages
Management is a continuous activity that must be handled.
Before the project can be dismantled and built incrementally
The complete requirements of the software should be clear.

#### V-Model

V-Model is an SDLC model, it is also called Verification and Validation Model.It is based on the association of testing phase with each development phase that is in V-Model with each development phase, its testing phase is also associated in a V-shape in other words both software development and testing activities take place at the same time. 

 In V-Design the left side represents the development activity, the right side represents the testing activity.
 
 **Each phase in verification corresponds with a validation phase.**
 
The tests are written during the verification phases on the left and executed during the validation stages on the right.

Unit testing happens in each sprint to minimize the risk of failure.

#### Agile Model
Agile model is a combination of iterative and incremental models, that is, it is made up of iterative and incremental models.

It focuses on a collaborative software development process over multiple short cycles rather than a strictly top-down linear process.Agile is what is called an iterative approach to development.

Rather than the “maintenance” stage of the SDLC, the final stage of the sprint is a feedback stage. At the end of each sprint, a chunk of working code is released at a meeting called the “sprint.

**The four core values of Agile development outlined in what is known as the "Agile manifesto"**

- individuals and interactions over processes and tools
- working software over comprehensive documentation
- customer collaboration over contract negotiation, and
- responding to change over following a plan.

#### Advantage

In this the software project is completed in a very short time.
In this the customer representative has an idea of ​​each iteration so that he can easily change the requirement.
This is a very realistic approach to software development.
In this, focus is given on teamwork.
There are very few rules in this and documentation is also negligible.There is no need for planning in this.It can be managed easily.It provides flexibility to developers.

#### Disadvantage

 It cannot handle complex dependencies.
Due to lack of formal documentation in this, there is confusion in development.
It mostly depends on the customer representative, if the customer representative gives any wrong information then the software can become wrong.

#### Diffrenece

- Agile is cyclical.
- Agile focuses on quick, short bursts of development.
-  Agile, new, and changing requirements are handled quickly and easily because planning is initiated at the beginning of each sprint cycle.planning such as budgeting and scheduling can be challenging


### RAD Model

RAD model stands for rapid application development model. The methodology of RAD model is similar to that of incremental or waterfall model. It is used for small projects.

If the project is large then it is divided into many small projects and these small projects are planned one by one and completed. In this way, by completing small projects, the large project gets ready quickly.
