# Function Oriented Design

Function Oriented Design is an approach to software design where the design is decomposed into a set of interacting units where each unit has a clearly defined function.

At the first level, the focus is on deciding which modules are needed for the system based on SRS (Software Requirement Specification) and how the modules should be interconnected.

Top-down decomposition in the context of function-oriented design refers to a structured approach for analyzing and designing a system by breaking it down into smaller, more manageable components, starting from a high-level view of the system. 

We shall call the design technique discussed in this text as structured analysis/structured design (SA/SD) methodology.

## OVERVIEW OF SA/SD METHODOLOGY
- Structured analysis (SA)
- Structured design (SD)

- the structured analysis activity transforms the SRS document into a graphic model called the DFD model.

- decompose high level function into low level and manageable function.

- Top-down decomposition approach.

- Application of divide and conquer principle.Through this each high-level function is independently decomposed into detailed functions.

- Graphical representation of the analysis results using data ﬂow diagrams (DFDs). 


### DFD(Data Flow Diagram)

A DFD is a hierarchical graphical model of a system that shows the diﬀerent processing activities or functions that the system performs and the data interchange among those functions.

Data Flow Diagrams (DFD) provide a graphical representation of the data flow of a system that can be understood by both technical and non-technical users.
DFD model only represents the data ﬂow aspects and does not show the sequence of execution of the diﬀerent functions and the conditions based on which a function may or may not be executed.


### Primitive symbols used for constructing DFDs

Function symbol:A function is represented using a circle. This symbol is called a process or a bubble.

External entity symbol:The external entities are essentially those physical entities external to the software system which interact with the system by inputting data to the system or by consuming the data produced by the system.
Data ﬂow symbol:A directed arc (or an arrow) is used as a data ﬂow symbol.
Data store symbol: A data store is represented using two parallel lines

### Important concepts associated with constructing DFD models

#### Balanacing DFD


The data that flow into or out of a bubble must match the data flow at the next level of DFD. This known as balancing a DFD.

**It is important to realise that a DFD represents only data flow, and it does not represent any control information.**
#### Synchronous and asynchronous operations



- If two bubbles are directly connected by a data ﬂow arrow, then they are synchronous.

- However, if two bubbles are connected through a data store, as in Figure 6.3(b) then the speed of operation of the bubbles are independent.

#### Data dictionary

A data dictionary lists all data items that appear in a DFD model.

- provides a standard terminology for all relevant data for use by
the developers working in a project.
- helps the developers to determine the deﬁnition of diﬀerent data
structures in terms of their component elements while implementing the design.
- The data dictionary helps to perform impact analysis.

#### Data deﬁnition


### DEVELOPING THE DFD MODEL OF A SYSTEM

A DFD is a hierarchical graphical model of a system that shows the diﬀerent processing activities or functions that the system performs and the data interchange among those functions.

**Context Diagram**

The context diagram is the most abstract (highest level) data ﬂow representation of a system.It represents the entire system as a single
bubble.The bubble in the context diagram is annotated with the name of the software system being developed (usually a noun).The bubbles at all other levels The context diagram establishes are annotated with verbs according to the main function the context in which the performed by the bubble.

**Level 1 DFD**

- The level 1 DFD usually contains three to seven bubbles
- To develop the level 1 DFD, examine the high-level functional requirements in the SRS document.

**What if a system has more than seven high-level requirements identiﬁed in the SRS document? In this case, some of the related requirements have to be combined and represented as a single bubble in the level 1 DFD**

## STRUCTURED DESIGN

The aim of structured design is to transform the results of the structured analysis (that is, the DFD model) into a structure chart. A structure chart represents the software architecture.The various modules making up the system, the module dependency (i.e.,which module calls which other modules), and the parameters that are passed among the diﬀerent modules. The structure chart representation can be easily implemented using some programming language.

- Rectangular boxes: A rectangular box represents a module. Usually, every rectangular box is annotated with the name of the module it represents.

- Module invocation arrows: An arrow connecting two modules implies that during program execution control is passed from one module to the other in the direction of the connecting arrow.

- Library modules: A library module is usually represented by a rectangle with double edges. Libraries comprise the frequently called modules.

- Selection: The diamond symbol represents the fact that one module of several modules connected with the diamond symbol is invoked depending on the outcome of the condition attached with the diamond symbol.

- Repetition: A loop around the control ﬂow arrows denotes that the respective modules are invoked repeatedly.


There should be at most one control relationship between any two modules in the structure chart. This means that if module A invokes module B, module B cannot invoke module A. The main reason behind this restriction is that we can consider the diﬀerent modules of a structure chart to be arranged in layers or levels. The principle of abstraction does not allow lower-level modules to be aware of the existence of the high-level modules.


Systematic techniques are available to transform the DFD representation of a problem into a module structure represented by as a structure chart. Structured design provides two strategies to guide transformation of a DFD into a structure chart:

- Transform analysis
- Transaction analysis


Transform analysis identiﬁes the primary functional components (modules) and the input and output data for these components.DFD into three types of parts:

- Input.
- Processing
- Output
### DESIGN REVIEW

Traceability: Whether each bubble of the DFD can be traced to some module in the
structure chart and vice versa. They check whether each functional requirement in the SRS
document can be traced to some bubble in the DFD model and vice versa.
Correctness:
correct.
Whether all the algorithms and data structures of the detailed design are
Maintainability: Whether the design can be easily maintained in future.
Implementation: Whether the design can be easily and eﬃciently be implemented.
After the points raised by the reviewers is addressed by the designers, the design
document becomes ready for implementation.

## Distinction Between a Data Flow Diagram (DFD) and a Flowchart

- DFD Represents the flow of data within a system.Flowchart Depicts the sequence of steps or operations in a process.

- DFD focuses on data and how it moves between processes, stores, and external entities.Flowchart focuses on control flow,showing decision points and steps.

- Includes entities, processes, data stores, and data flows.flowchart includes shapes for processes, decisions, start/end points, and arrows for flow control.


## Differentiation Between Structured Analysis and Structured Design 

Structure Analysis    Structure Design

- Focuses on understanding and defining what the system should do.Focuses on how the system will be implemented to achieve the defined requirements.

- Analytical and abstract.Concrete and practical.

- Models the system's functional requirements and data flow.Develops a detailed blueprint for implementing the system.

- Produces models like Data Flow Diagrams (DFDs), Entity-Relationship Diagrams (ERDs), and process descriptions.Produces a system design specification, including module structures and interface definitions.

- Top-down approach to decompose system functionality and data flow into smaller components.Decomposes functions into modules, emphasizing modularity, cohesion, and minimal coupling.

- Occurs during the early stages of system development (analysis phase).Occurs after structured analysis, during the design phase.Occurs after structured analysis, during the design phase.
